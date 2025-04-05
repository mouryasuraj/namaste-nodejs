const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.MONGODBURI);
};

module.exports = connectDB