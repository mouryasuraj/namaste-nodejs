/*

//Building Feed API & Pagination

1. select
--> select function is used to select the data which you want, 
ex: 
    const connections = await User.find({
        fromUserId
    }).select("fromUserId toUserId")

2. Set Data Structure
const data = new Set()    ==> It will store unique values
data.add(1)

*/