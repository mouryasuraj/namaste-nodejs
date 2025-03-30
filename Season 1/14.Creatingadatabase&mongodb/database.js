const { MongoClient } = require("mongodb");

const URI =
  "mongodb+srv://mouryasuraj:SurajMourya@learningmongodb.otxhr8q.mongodb.net/";
const dbName = "nodejs";

const client = new MongoClient(URI);

const connectDB = async () => {
  const connectedDB = await client.connect(URI);
  //   console.log("Connected to DB Successfully", connectedDB);

  const db = client.db(dbName);
  const collection = db.collection("User");

  // INsert the document
  const insertData = await collection.insertMany([{ firstName: "Suraj", lastName:"Mourya" },{ firstName: "Vipin", lastName:"Yadav" },{ firstName: "Adithya", lastName:"Nair" }]);
  console.log("insertData", insertData);
  

  // Update the document
  // const updateData = await collection.updateMany(
  //   { firstName: "Suraj" },
  //   {
  //     $set: {
  //       city: "Mumbai",
  //     },
  //     $unset:{"phoneNumber":""}
  //   }
  // );

  // console.log("UPdateData", updateData);

  //Delete the document
  // const deletedData = await collection.deleteMany({firstName:{ $in:["Suraj", "Vipin", "Adithya"] }})  //We can update multiple user using firstName

  // const allData = await collection.find({}).toArray();
  //   console.log("allData", allData);

  //   const insertData = await collection.insertMany([
  //     {
  //       firstName: "Land",
  //       lastName: "Land",
  //       city: "Mumbai",
  //       phoneNumber: "923568568",
  //     },
  //     {
  //       firstName: "Land1",
  //       lastName: "Land1",
  //       city: "Mumbai",
  //       phoneNumber: "923568568",
  //     },
  //   ]);
  //   console.log(console.log("insertData successfully", insertData));

  const findData = await collection.countDocuments({ firstName: "Suraj" });
  // console.log(findData);
  return "Done";
};

connectDB()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
