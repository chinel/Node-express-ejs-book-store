const express = require("express");
const cors = require("cors");
const session = require("express-session");
const router = require("../routes/router");
require("dotenv").config();

const app = express();

//cors middleware
app.use(cors());

//json request
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

//middleware templating
app.set("view engine", "ejs");
app.engine("ejs", require("ejs").__express);

//static site for middleware use
app.use(express.static("public"));
app.use(express.static("views"));

app.use("/", router);
module.exports = app;
