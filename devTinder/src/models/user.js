const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const { Schema } = mongoose;

//Define schema
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      // unique: true,
      minLength: 1,
      maxLength: 10,
      trim: true,
      // enum:["Suraj", "Mourya"],
     
    },
    lastName: {
      type: String,
      minLength: 1,
      maxLength: 10,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate(value){
        if(!validator.isEmail(value)){
          throw new Error("Invalid email address")
        }
      }
    },
    password: {
      type: String,
      required: true,
      validate(value){
        if(!validator.isStrongPassword(value)){
          throw new Error("Your password is invalid")
        }
      }
    },
    age: {
      type: Number,
      min: 18,
      max: 50,
      default: 18,
    },
    gender: {
      type: String,
      // enum:["Male", "Female", "Others"],
      validate(value) {
        if (!["Male", "Female", "Others"].includes(value)) {
          throw new Error("Gender data is not valid");
        }
      },
    },
    photoUrl: {
      type: String,
      validate(value){
        if(!validator.isURL(value)){
          throw new Error("Invalid URL")
        }
      }
    },
    about: {
      type: String,
      default: "This is a default value for the user if he/she doesn't provide",
    },
    skills: {
      type: [String],
      default: ["Shiv"],
    },
  },
  {
    timestamps: true,
  }
);

//Create methods
userSchema.methods.getJWT = async function(){
  const user = this;  //Do not user arrow function as "this" behaves different in arrow functions
  const userPayload = {
    email: user.email,
    gender: user.gender,
    age: user.age,
    photoUrl: user.photoUrl,
  };

  const token = jwt.sign(userPayload, process.env.SECRETKEY, {expiresIn:'1h'})
  return token;
}

userSchema.methods.comparePassword = async function(password){
  const user = this
  return await bcrypt.compare(password, user.password)
}


// Create model
const User = mongoose.model("User", userSchema);

module.exports = User;  
