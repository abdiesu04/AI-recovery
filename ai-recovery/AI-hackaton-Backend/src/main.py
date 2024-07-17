# backend/main.py

import os
from dotenv import load_dotenv
from database.database import get_db
from fastapi import FastAPI, APIRouter,Depends
from pymongo import MongoClient
from motor.motor_asyncio import AsyncIOMotorClient
from schema.userSchema import UserLogin
from auth.auth import router as auth_router
from routes.users import router as users_router
from fastapi.middleware.cors import CORSMiddleware
from langchain_google_genai import ChatGoogleGenerativeAI
from fastapi.responses import JSONResponse
from pydantic import BaseModel

load_dotenv() #load environmental variables
DB_URI = os.getenv("MONGO_URI")
print(DB_URI)

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:8080",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Add your routes here
app.include_router(auth_router)
app.include_router(users_router)


mongo = "mongodb://127.0.0.1:27017/AIdb"
# Initialize MongoDB client
mongo_client = MongoClient(mongo)
db = mongo_client['chat_history_db']
collection = db['chat_history']
gemini_model = ChatGoogleGenerativeAI(model="gemini-pro", temperature=0.7)

def retrieve_chat_history(user_id: str):
    chat_history = collection.find({'user_id': user_id})
    # print(chat_history)
    return [(message['role'], message['content']) for message in chat_history]

user_profile = {
            "user_id": "6690b520c3501fb2363cf995",
            "username": "user123",
            "password": "12345678",
            "name": "John Doe",
            "age": 30,
            "gender": "male",
            "hobbies": ["reading", "jogging"],
            "triggers": ["stress", "social gatherings"],
            "solutions_tried": ["meditation", "therapy"],
            "cooling_methods": ["deep breathing", "listening to music"],
            "goals": ["stay sober", "attend therapy", "exercise regularly"],
            "checkin":[],
            "habit":[]
        }
def generate_recovery_plan() -> str:
    try:
        user_id = user_profile['user_id']
        chat_history = retrieve_chat_history(user_id)
        context = (
    "You are a friendly, empathetic health assistant specializing in addiction recovery. "
    "Respond with compassion and support, providing evidence-based guidance on recovery, mental health, and related topics. "
    "Use motivational interviewing techniques to empower users, focusing on their overall well-being. "
    "Recommend relevant support services and build rapport by remembering key details and adapting to user preferences."
    )
        for role, content in chat_history:
            context += f"{role}: {content}\n"
        # Construct the prompt based on user profile details
        prompt = f"Based on the chat history in {context} Generate a personalized recovery plan (Step by step) for me with the following details: Name: {user_profile['name']} Age: {user_profile['age']} Goals: {', '.join(user_profile['goals'])} Goals: {', '.join(user_profile['goals'])} Hobbies: {', '.join(user_profile['hobbies'])} Triggers: {', '.join(user_profile['triggers'])} solutions_tried: {', '.join(user_profile['solutions_tried'])} cooling_methods: {', '.join(user_profile['cooling_methods'])}"

        response = gemini_model.invoke(prompt)
        return response.content

    except Exception as e:
        # Handle exceptions gracefully
        print(f"An error occurred: {e}")
        return {"error": str(e)}

def store_message(user_id: str, role: str, content: str):
    collection.insert_one(
        {'user_id': user_id, 'role': role, 'content': content})


def chat_prompt(user_profile: dict, user_prompt: str) -> str:
    user_id = user_profile['user_id']

    # Retrieve the latest chat history entry from MongoDB for the specific user
    chat_history = retrieve_chat_history(user_id)
    latest_message = chat_history[-1] if chat_history else ("User", "")

    # Construct the context from the latest chat history entry
    context = (
        "You are a compassionate assistant knowledgeable about healthcare and addiction recovery. "
        "Provide supportive and concise responses to help the user on their recovery journey.\n"
        f"{latest_message[0]}: {latest_message[1]}\n"
    )

    # Construct the full prompt using the context and user profile
    full_prompt = (
        f"{context} Generate a supportive and concise answer for the following user prompt: '{user_prompt}'. Use the user detail just to know and do not answer questions without being asked."
        f"User details: Name: {user_profile['name']}, Age: {user_profile['age']}, Goals: {', '.join(user_profile['goals'])}, "
        f"Hobbies: {', '.join(user_profile['hobbies'])}, Triggers: {', '.join(user_profile['triggers'])}, "
        f"Solutions tried: {', '.join(user_profile['solutions_tried'])}, "
        f"Preferred coping methods: {', '.join(user_profile['cooling_methods'])}."
    )

    # Invoke the gemini-pro model with the constructed messages
    response = gemini_model.invoke(full_prompt)

    # Store the user's message and the model's response in MongoDB
    store_message(user_id, 'User', user_prompt)
    store_message(user_id, 'AI', response.content)

    return response.content

def checkin(user_profile: dict, progress: str, feeling: str) -> str:
    user_id = user_profile['user_id']

    # Retrieve the latest chat history entry from MongoDB for the specific user
    try:
        checkinHistory = "".join(user_profile[checkin][-5:])
    except:
        checkinHistory = ""

    # Construct the context from the latest chat history entry
    context = (
        "You are a daily checker bot. That you take a progress and feeling data from user and answer accordingly and shortly."
        "Here you are required to summarize the daily feeling and progress of user and give suggestions for next days."
        f"here is the last five checkin history: {checkinHistory}\n"
    )

    full_prompt = (
        f"{context} Generate a supportive and concise answer for the following daily checkin message. Feeling: '{feeling}' and Progress: '{progress}'. Know that the feeling came because of the progress. Use the user detail just to know and do not answer questions without being asked."
        f"User details: Name: {user_profile['name']}, Age: {user_profile['age']}, Gender: {user_profile['gender']}"
        
    )
    response = gemini_model.invoke(full_prompt)

    user_profile["checkin"].append("progress: "+progress+"feeling: "+feeling)

    return response.content

def habitCheck(user_profile: dict, habit: str, done: str) -> str:
    user_id = user_profile['user_id']

    # Retrieve the latest chat history entry from MongoDB for the specific user
    try:
        checkinHistory = "".join(user_profile[habit][-5:])
    except:
        checkinHistory = ""

    # Construct the context from the latest chat history entry
    context = (
        "You are a habit tracker bot. That you take a habit and what the user had done from user and answer accordingly and shortly."
        "Here you are required to summarize the progress of the user and give suggestions what to do next to achieve the habit."
    )

    full_prompt = (
        f"{context} Generate a supportive and concise answer for the following habit message. habit: '{habit}' and what have done by user: '{done}'. Use the user detail just to know and do not answer questions without being asked."
        f"User details: Name: {user_profile['name']}, Age: {user_profile['age']}, Gender: {user_profile['gender']}"
        
    )
    response = gemini_model.invoke(full_prompt)

    user_profile["habit"].append("habit: "+habit+"what i did: "+done)

    return response.content



    

class Message(BaseModel):
    user_id: str
    message: str
class MessageCheck(BaseModel):
    user_id: str
    progress: str
    feeling: str
    
class MessageHabit(BaseModel):
    user_id: str
    habit: str
    done: str
    
@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/api/plan")
async def handle_button_click():
    recovery_plan = generate_recovery_plan()
    return JSONResponse(content={"recovery_plan": str(recovery_plan)})

@app.post("/api/chat")
def chat(message: Message):
    response = chat_prompt(user_profile, message.message)
    # print(JSONResponse(content={"response": response}))
    return response

@app.post("/api/checkin")
def checkinRoute(message: MessageCheck):
    response = checkin(user_profile, message.progress, message.feeling)
    # print(JSONResponse(content={"response": response}))
    return response

@app.post("/api/habits")
def checkinRoute(message: MessageHabit):
    response = checkin(user_profile, message.habit, message.done)
    print(JSONResponse(content={"response": response}))
    return response

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000)

