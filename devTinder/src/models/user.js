const mongoose = require('mongoose')
const {Schema} = mongoose;

//Define schema
const userSchema = new Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    age:{
        type:Number
    },
    gender:{
        type:String
    }
})

// Create model
const User = mongoose.model('User', userSchema)

module.exports = User;