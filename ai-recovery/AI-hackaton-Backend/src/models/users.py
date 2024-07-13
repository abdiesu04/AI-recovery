from pydantic import BaseModel, EmailStr, Field
from enum import Enum
from typing import List
class Gender(Enum):
    male = "male"
    female = "female"
class User(BaseModel):
    username: str = Field(min_length=4,max_length=20)
    password: str = Field(min_length=4,max_length=12)
    name: str = Field(max_length=25)
    email: EmailStr = Field(...)
    age: int = Field(...)
    gender: str = Field(...)
    hobbies: List[str] = Field(...)
    triggers: List[str] = Field(...)
    solutions_tried: List[str] = Field(...)
    cooling_methods: List[str] = Field()
    goals: List[str] = Field()