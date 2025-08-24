const mongoose = require("mongoose");

const { Schema } = mongoose;

const paymentSchema = new Schema(
  {
    userId:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    paymentId:{
        type:String
    },
    orderId:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    attempts:{
        type:Number,
        required:true
    },
    currency:{
        type:String,
        required:true
    },
    notes:{
        firstName:{
            type:String
        },
        lastName:{
            type:String
        },
        memeberShipType:{
            type:String
        }
    },
    receipt:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
  },
  {
    timestamps: true,
  }
);


const Payment = mongoose.model("Payment", paymentSchema)

module.exports = Payment