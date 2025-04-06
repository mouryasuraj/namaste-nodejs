/*

//  Database, Schema & Models | Mongoose

// Connection to database
1. use mongoose library to connecting to the database
2. It is used to create schemas, models and talk to the database
2. Always connect database first and listen on server


//Create schema
1. Schema is used to define how our document will be like which are the fields and their data type will be there
2. Create a models folder inside src
3. create a js file and name meaningfull for schema, like user
4. create schema using mongoose
    ex: 




// About folder structure
1. Create config folder - Put all the configuration in the folder
2. create .env file - place all the sensitive data in this file and import using process.env.VAR_NAME




Questions

1. What is mongoose?
--> 
    1. Mongoose is a ODB(Object Data Modelling) library for mongoose and nodejs
    2. Mongoose allows you to interact with mongoDB in an object oriented way by defining schemas and models
    3. MongoDb is a schemaless, so data can be messy.
    4. Mongoose helps you to define the schema/structure for your mongoDB document

2. What is schema of a database?
-->
    1. Schame is used to define the structure of a document
    2. What field you want(name, age, gender, etc.)
    3. type of that field (string , number, data, Objectid)
    4. whether its required, unique, has default value, etc


3. What is the difference between schema and models
-->
    1. Schema:
        a. Blueprint of the document structure	
	    b. Defines field names, types, rules	
        c. Defining structure and validation	
        d. const userSchema = new Schema(...)	
    2. Models:
        a. The actual object used to interact with DB
        b. Provides methods like .find(), .save()
        c. Creating, reading, updating, deleting data
        d. const User = mongoose.model("User", userSchema)



*/
