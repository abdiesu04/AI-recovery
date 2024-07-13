from pydantic import BaseModel, Field
from typing import List
from pydantic import EmailStr
"""
username: str = Field(...)
this 3 dots (...) aso called ellipsis it defines the implicit requirement for the field
which means   In most cases, you'll likely want to enforce
mandatory fields for essential data like usernames and passwords.
Keep the ... to ensure validation and accurate documentation.
"""

class UserBase(BaseModel):
    username: str = Field(min_length=4,max_length=20)
    password: str = Field(min_length=4,max_length=12)
    name: str = Field(max_length=25)
    email: EmailStr = Field(default="")
    age: int = Field(...)
    gender: str = Field(...)
    hobbies: List[str] = Field(...)
    triggers: List[str] = Field(...)
    solutions_tried: List[str] = Field(...)
    cooling_methods: List[str] = Field(default=[])
    goals: List[str] = Field(default=[])

class UserResponse(BaseModel):
    username: str = Field(min_length=4,max_length=20)
    name: str = Field(max_length=25)
    email: EmailStr = Field(...)
    age: int = Field(...)
    gender: str = Field(...)
    hobbies: List[str] = Field(...)
    triggers: List[str] = Field(...)
    solutions_tried: List[str] = Field(...)
    cooling_methods: List[str] = Field(...)
    goals: List[str] = Field(...)
class UserUpdate(BaseModel):
    username: str = Field(...)
    name: str = Field(...)
    age: int = Field(...)
    gender: str = Field(...)
class UserCreate(UserBase):
    username: str = Field(...)
    password: str = Field(...)
#may be not that important
class UserVerify(BaseModel):
    user_id: str = Field(...)
    username: str = Field(...)

class UserLogin(BaseModel):
    username: str = Field(...)
    password: str = Field(...)