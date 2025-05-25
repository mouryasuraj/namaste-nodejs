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


// Pagination in Mongodb

//feed?page=1&limit=10  --> skip(0).limit(10)
//feed?page=2&limit=10  --> skip(11).limit(10)
//feed?page=3&limit=10  --> skip(21).limit(10)
//feed?page=4&limit=10  --> skip(31).limit(10)

//formula to calculate the skip
skip = (page-1) * limit


1. Two functions are there
    a. .skip()
    --> 1. It will skip till that and return the data from that 
    b. .limit()

*/