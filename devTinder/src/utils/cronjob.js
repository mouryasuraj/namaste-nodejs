const cron = require("node-cron")
const {subDays,startOfDay, endOfDay} = require("date-fns")
const ConnectionRequest = require("../models/connectionRequest")

cron.schedule("8 0 * * *", async ()=>{
    
    try {
        const today = subDays(new Date(), 0)
        const todayStart = startOfDay(today)
        const todayEnd = endOfDay(today)

        // Get All the connection request for today

        const requests = await ConnectionRequest.find({
            status:"interested",
            createdAt:{
                $gte:todayStart,
                $lte:todayEnd
            }
        }).populate("fromUserId toUserId")

        console.log(requests)
        
    } catch (error) {
        console.log("error",error)
    }
    
})