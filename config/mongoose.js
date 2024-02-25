const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.mongo_url;

// connecting mongoose to its default server and ecommerceDB
mongoose.connect(uri);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
