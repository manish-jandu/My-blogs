const { default: mongoose } = require("mongoose");
require("dotenv")

const connectMongoose = async (req,res) => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Database Connected",connect.connection.host,connect.connection.name);
} catch (err) {
    console.log("error connecting mongodb");
    console.log(err);
  }
}

module.exports = {connectMongoose}