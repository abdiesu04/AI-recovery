from typing import List
from fastapi import HTTPException, status
from models.users import User
from database.database import get_db
from bson.objectid import ObjectId
from motor.motor_asyncio import AsyncIOMotorClient
from pymongo import MongoClient
from schema.userSchema import UserBase,UserLogin,UserResponse,UserUpdate
def create_user(db: MongoClient, user: UserBase):
    user_data = user.dict()
    try:
        result = db["users"].insert_one(user_data)
        return result.inserted_id
    except pymongo.errors.DuplicateKeyError:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Username already exists",
        )
    except Exception as e:
        # Handle other potential errors
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to create user: {e}",
        )

async def get_user(db: MongoClient, user_id: str):
    # Convert user_id to ObjectId
    object_id = ObjectId(user_id)
    user = db["users"].find_one({"_id": object_id})
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    # Convert to UserResponse model (excluding password)
    return UserResponse(**user)

async def update_user(db: MongoClient, user_id: str, update_data: UserUpdate):
    # Convert user_id to ObjectId
    object_id = ObjectId(user_id)
    # Update specific fields based on the provided data
    db["users"].update_one({"_id": object_id}, {"$set": update_data.dict(exclude_unset=True)})
    return {"message": "User updated successfully"}

async def delete_user(db: MongoClient, user_id: str):
    # Convert user_id to ObjectId
    object_id = ObjectId(user_id)
    db["users"].delete_one({"_id": object_id})
    return {"message": "User deleted successfully"}