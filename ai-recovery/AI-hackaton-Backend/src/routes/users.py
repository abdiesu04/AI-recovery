from fastapi import APIRouter, Depends, HTTPException,status
from auth.auth import get_current_user
from schema.userSchema import UserUpdate    
from auth.auth import get_current_user
from pymongo import MongoClient
from database.database import get_db
from controler.usersCRUD import create_user, update_user, delete_user,get_user
router = APIRouter(prefix="/user",tags= ["User"])

@router.put("/profile")
async def update(user: UserUpdate,current_user: dict = Depends(get_current_user), db: MongoClient = Depends(get_db)):
    # Call the update_user function
    await update_user(db, current_user["user_id"], user)
    return {"message": "User updated successfully"}

@router.get("/profile")
async def get_user_route(current_user: dict = Depends(get_current_user), db: MongoClient = Depends(get_db)):
    # Call the get_user function
    return await get_user(db, current_user["user_id"])



@router.delete("/profile")
async def delete_user_route( current_user: dict = Depends(get_current_user), db: MongoClient = Depends(get_db)):

    # if str(current_user["user_id"]):
    #     raise HTTPException(
    #         status_code=status.HTTP_403_FORBIDDEN,
    #         detail="You are not authorized to delete this user",
    #     )
    # Call the delete_user function
    await delete_user(db, current_user["user_id"])
    return {"message": "User deleted successfully"}