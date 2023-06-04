// require("dotenv").config({ path: "./config/config.env" });
const express = require("express");
// const mongoose = require("mongoose");
const morgan = require("morgan");

const connectDB = require("./config/db");

// const auth = require("./middlewares/auth");

const app = express();

// middlewares
app.use(express.json());
app.use(morgan("tiny"));
// app.use(require("cors")());

// routes
app.use("/",(req, res)=>{
    res.send("hello");
});

// app.use("/api", require("./routes/auth"));
// app.use("/api", require("./routes/contact"));

// server configurations.
const PORT = process.env.PORT || 8000;
app.listen(PORT, async() => {
  try {
    await connectDB();
  console.log(`server listening on port: ${PORT}`);
  }
  catch (err){
    console.log(err);
  }
});