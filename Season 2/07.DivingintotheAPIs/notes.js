/*

//   Diving into the APIs


1. To read the request body, we have to convert JSON into Javascript Object using a built in middleware express.json()
2. To find all the data use find({}) and if you want to filter then pass the filter into find function
ex: find({email:email})
3. const users = await User.findOne({email}).sort({_id:-1}); // It will give the latest created
3. const users = await User.findOne({email}).sort({_id:1}); // It will give the oldest created
4. use _id if you want to filter using findById
5. await User.findByIdAndDelete(userId) // we can write like this, we don't have to write await User.findByIdAndDelete({_id:userId}). findByIdAndDelete(userId) its an shorthand for this findByIdAndDelete({_id:userId})
6. returnDocument:"before/after"
   returnOriginal:false




Questions: 
    1. What is JSON
    --> 
        1. JSON is Javascript Object Notation
        2. 

    2. What is express.json() - 
    3. Explore model methods



*/