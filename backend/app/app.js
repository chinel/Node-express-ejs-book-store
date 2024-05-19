const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");
const userRouter = require("../routers/userRouter");
const bookRouter = require("../routers/bookRouter");
const authorRouter = require("../routers/authorRouter");
const { connect } = require("../db/db");

const NODE_ENV = process.env.NODE_ENV;
const app = express();

const logStream = fs.createWriteStream(
  path.join(__dirname, "../logs/access.log"),
  { flags: "a" }
);

//Middleware for loggin
app.use(
  NODE_ENV === "production"
    ? morgan("combined", { stream: logStream })
    : morgan("dev")
);

//middleware that parses json from incoming request
//It also used to enforce a contract, if you only accept json, you should also ensure that you only return json
app.use(express.json());

//middleware for url encoding
app.use(express.urlencoded({ extended: true }));

//middleware to handle cors (cross origin resource sharing) policy
app.use(cors());

//middleware for health check or health point or actuator, to check if our service is up and running
app.use("/health-check", (req, res) => {
  return res.status(200).json({ message: "Service is up" });
});

//routers
app.use("/users", userRouter);
app.use("/books", bookRouter);
app.use("/authors", authorRouter);

//Middleware to handle bad url or error
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  return res.status(error.status || 500).json({
    error: {
      message: error.message,
      status: error.status,
    },
  });
});

connect(); //we put it at the end because we only want our database to start one time
module.exports = app;
