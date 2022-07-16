require("dotenv").config();
const express = require("express");
const app = express();

const animeRoute = require("./routes/anime");

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

//routes
app.use("/api/anime", animeRoute);

app.listen(process.env.PORT, () => {
  console.log("Backend is running!");
});

//
//
//

// require("dotenv").config();
// const express = require("express");
// const app = express();

// const authRoute = require("./routes/auth");

// const mongoose = require("mongoose");
// mongoose
//   .connect(process.env.MONGO)
//   .then(() => console.log("databbase connected!"))
//   .catch((err) => console.log(err));

// app.use(express.json());
// app.use("/auth", authRoute);

// app.listen(process.env.PORT, () => {
//   console.log("Backend is running!");
// });
