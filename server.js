const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

const dbconnect = require("./dbconnect");
dbconnect();

app.use("/", require("./routes/user"));
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`server running ${PORT}`);
});
