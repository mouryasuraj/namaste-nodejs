const mongoose = require('mongoose')
const {Schema} = mongoose

const connectionRequestSchema = new Schema({
    fromUserId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    toUserId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    status:{
        type:String,
        enum:{
            values:["interested", "ignored", "accepted", "rejected"],
            message:`{VALUE} is not a valid status`
        },
        required:true
    }

})

//Check fromUserId is equal to toUserid
// This pre middleware are called everying time before saving the data in the DB
connectionRequestSchema.pre('save', function(next){
    const connectionRequest = this;
    if(connectionRequest.fromUserId.equals(connectionRequest.toUserId)){
        throw new Error("fromUserId is same as toUserId")
    }
    next()
})

const ConnectionRequest = mongoose.model('ConnectionRequest', connectionRequestSchema)

module.exports = ConnectionRequest;





// Create schema