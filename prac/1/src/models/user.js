import mongoose from "mongoose";
import validator from 'validator'

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required:true,
      maxLength: 30,
      minLength: 1,
    },
    lastName: {
      type: String,
      trim: true,
      required:true,
      maxLength: 30,
      minLength: 1,
    },
    email: {
      type: String,
      trim: true,
      unique:true,
      required:true,
      maxLength: 100,
      minLength: 1,
      validator:(value)=>{
        if(!validator.isEmail(value)){
            throw new Error("Email is not valid: ", value)
        }
      }
    },
    password: {
      type: String,
      trim: true,
      unique:true,
      required:true,
      maxLength: 100,
      minLength: 1,
      validator:(value)=>{
        if(!validator.isStrongPassword(value, {minLength:8, minUppercase:1, minLowercase:1, minNumbers:1, minSymbols:1})){
            throw new Error("Your password should contain atleast one uppercase, one lowercase, one number, one special character, minimun lenght 8")
        }
      }
    },
    gender:{
        type:String,
        trim:true,
        enum:{
            values:["Male", "Female", "Others"],
            message:`Gender is invalid: {VALUE} `
        }
    },
    photoUrl:{
        type:String,
        required:true,
        trim:true,
        validator:(value)=>{
            if(!validator.isURL(value)){
                throw new Error("Please enter a valid URL: ", value)
            }
        }
    }

  },
  { timestamps: true }
);


const User = model("User", userSchema)

export default User;

