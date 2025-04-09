/*

// Data Sanitization & Schema Validations


Notes:
Schema Types
1. required:true
2. unique:true
--> 1. Whenever you put unique to true then you to use User.init and then handle that in then and catch
    2. But using the init method is not recommendable, because creating index on every sign up, let mongoose handle that, unique will not throw an error, we have to check the status code and send response manually
ex: 
     User.init()
        .then(async () => {
          try {
            const user = new User(body);
            await user.save();
            res.json({
              message: "User created successfully",
              userDetails: {
                email: body.email,
              },
            });
          } catch (error) {
            console.log(
              "An error occured during saving the data to database",
              error
            );
            res.status(500).send("Something went wrong");
          }
        })
        .catch((err) => {
          console.log("Error",err);
          res.status(500).json("Something went wrong");
        });
3. lowercase
4. If you want to validate on your own then use validate
ex: validate(value){
            if(!["Male","Female","Others"].includes(value)){
                throw new Error("Gender data is not valid")
            }
        }
5. In case of update, if you add some validation after creating few document then on those docuemnt this validation will not work by default. First you have to enable it where the endpoint declaration is defined, we have to add an options in findByIdandUpdate(id, dataToUpdate, {runValidator:true})
6. Always sanitize your data, add validation at schema and api level
7. Install validator library for validation


Imp Points:
1. {
        timestamps:true // add this in the schema object, this will create createdAt and updatedAt, field in the document automatically
    }





Questions:
1. What is User.init in mongoose
2. What is index?
3. Read mongoose document
4. Explore timestamps documentation
5. Explore schemaType documentation



//HW
1. Explore schemaType documentation
2. Improve DB Schema by adding validation
3. Learn How to write regex

*/
