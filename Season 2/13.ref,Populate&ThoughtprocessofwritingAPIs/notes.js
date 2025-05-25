/*


// ref, Populate & Thought process of writing APIs

1. Building relations between schemas
-->
    a. Create a reference
    ex: 
        fromUserId:{
            type:String,
            ref:"User",
            required:true
        }
    b. How to populate
    ex:
    const allConnectionRequests = await ConnectionRequest.find({
      toUserId:loggedInUser._id,
      status:"interested"
    }).populate("fromUserId", "firstName lastName age gender about skills")
    // }).populate("fromUserId", ["firstName","lastName","age","gender","about","skills"])


*/
