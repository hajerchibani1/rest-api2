const mongoose = require("mongoose");
const URI = process.env.URI;
const dbconnect = () =>
  mongoose.connect(URI, (err) => {
    err ? console.log(err) : console.log("data base connected");
  });
module.exports = dbconnect;
