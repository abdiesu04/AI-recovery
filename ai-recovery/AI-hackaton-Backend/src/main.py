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


