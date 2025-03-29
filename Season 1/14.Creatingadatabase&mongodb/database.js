const { MongoClient } = require("mongodb");

const URI =
  "mongodb+srv://mouryasuraj:gm2KSpWqbNE5dqsM@learningmongodb.otxhr8q.mongodb.net/";
const dbName = "nodejs";

const client = new MongoClient(URI);

const connectDB = async () => {
  const connectedDB = await client.connect(URI);
  //   console.log("Connected to DB Successfully", connectedDB);

  const db = client.db(dbName);
  const connection = db.collection("User");

  const allData = await connection.find({}).toArray();
//   console.log("allData", allData);

//   const insertData = await connection.insertMany([
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

const findData = await connection.countDocuments({firstName:"Suraj"})
console.log(findData);


  return "Done";
};

connectDB()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
