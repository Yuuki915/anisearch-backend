require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const favoriteRoute = require("./routes/favorite");

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("databbase connected!"))
  .catch((err) => console.log(err));

app.use(express.json());

//middleware
// app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(cors());

//routes
app.use("/", favoriteRoute);

app.listen(process.env.PORT, () => {
  console.log(`Backend is running on ${process.env.PORT}!`);
});
