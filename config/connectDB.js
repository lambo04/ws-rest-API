//require mongoose
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //connect to DB
    await mongoose.connect(process.env.DB_URI);
    console.log("DB connected.................");
  } catch (error) {
    console.log("DB not connected!!!", err);
  }
};

//export of the function
module.exports = connectDB;