const express = require("express");
const cors = require("cors");
const session = require("express-session");
const userRouter = require("../routes/userRouter");
const bookRouter = require("../routes/bookRouter");
const authorRouter = require("../routes/authorRouter");
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

app.use("/", userRouter);
app.use("/books", bookRouter);
app.use("/authors", authorRouter);
app.use((req, res) => {
  //req.session.destroy(null);
  res.status(404).render("404", { pageTitle: "404", session });
});
module.exports = app;
