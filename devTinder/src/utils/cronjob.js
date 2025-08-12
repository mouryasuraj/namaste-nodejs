const cron = require("node-cron")
const {subDays,startOfDay, endOfDay} = require("date-fns")
const ConnectionRequest = require("../models/connectionRequest")
const sesClient = require("../config/sesClient")
const run = require("./sendEmail")

cron.schedule("28 0 * * *", async ()=>{
    
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

        const toUserEmails =[...new Set(requests.map((user) => user.toUserId.email))]
        
        for(const email of toUserEmails){
            console.log(email);
            
            const emailRes = await run(`Got connection request from ${email}`, "Please login into devtinder.in to accept or reject the request")
            console.log(emailRes)
        }

        
        
        
    } catch (error) {
        console.log("error",error)
    }
    
})