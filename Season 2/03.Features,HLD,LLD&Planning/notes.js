/*

// Features, HLD, LLD & Planning


1. First you have to think what all the feature should be there in my application.
--> 
    Features:
        1. Create an account
        2. Login
        3. Update Profile
        4. FeedPage - Explore Page
        5. Send Connection / Reject or Ignore Connection
        6. Section to see all the matches
        7. Section to see all the request made by user
        8. Section to see all the request received
        9. Option to update profile
        10. 

2. Tech Planning
--> 
    a. 2 Microservices
        1. Frontend - ReactJs
        2. Backend - NodeJs, Mongodb, Express
3. LLD - Low Level Design
    a. DB Design
        1. User - firstName, lastName, password, age, gender etc.
        2. Connection Request - from, to, status
    b. API Design
        1. REST API ((Representational State Transfer Application Programming Interface))
        2. What are the api's we are going to use in this project
            a. POST - /devtinder/signup
            b. POST - /devtinder/login
            c. GET - /devtinder/profile
            d. POST - /devtinder/profile
            e. PATCH - /devtinder/profile
            f. POST - /devtinder/sendrequest (ignore, interested)
            g. POST - /devtinder/reviewrequest (accept, reject)
            g. GET - /devtinder/requests
            g. GET - /devtinder/connections
             



//Question

What is HLD and LLD?
What is REST API?
What is GET, POST, PUT, PATCH, DELETE
what is the difference between PUT and PATCH?

*/
