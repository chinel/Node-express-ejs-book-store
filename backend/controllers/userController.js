const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { findUser, saveUser } = require("../db/db");
const User = require("../models/userModel");
const errorTemplate = require("../templates/errorTemplate");

const registerUserHandler = (req, res, next) => {
  //find User
  findUser({ email: req.body.email })
    .then((user) => {
      //If user exist
      if (user) {
        //Return response that says user exists try logging in
        return res.status(409).json({
          message: "User exists, try logging in",
        });
      } else {
        //map the req body to user model
        const user = new User();
        user._id = new mongoose.Types.ObjectId();
        const newUser = Object.assign(user, req.body);

        //encrypt the password
        //the second parameter of the hash method can either be a hash or a number which specifies the number of rounds that will be used to generate the salt
        //note that this second call back function is not needed if we will be using await, it will just be const hash = await bcrypt.hash(password, 10), with try catch, the catch block will handle the error thrown
        bcrypt.hash(newUser.password, 10, async function (err, hash) {
          if (err) {
            return res.status(501).json({
              message: `Error: ${err.message}`,
            });
          } else {
            //set the password with the encrypted password
            newUser.password = hash;

            //save the user to the database
            const dbUser = await saveUser(newUser);

            return res.status(201).json({
              message: "Successful Registration",
              user: dbUser,
            });
          }
        });
      }
    })
    .catch((err) => {
      errorTemplate(res, err, "Cannot save user");
    });
};

const loginUserHandler = async (req, res, next) => {
  try {
    //email and password
    //Find the user return the user
    const loggedInUser = await findUser({ email: req.body.email });
    //if the user is not found return response saying authentication failed
    if (!loggedInUser) {
      const error = new Error("Authentication Failed: Unable to find user");
      error.status = 401;
      throw error;
    } else {
      //else use bcrypt to compare password
      const result = await bcrypt.compare(
        req.body.password,
        loggedInUser.password
      );
      //if result
      if (result) {
        loggedInUser.password = null;
        //if result create a JSON web Token, then return response stating authentication successful and token,
        const token = jwt.sign({ user: loggedInUser }, process.env.JWT_SECRET);

        return res.status(200).json({
          user: loggedInUser,
          loggedIn: true,
          token,
          message: "Login Successful",
        });
      } else {
        //return response stating authentication failed
        throw new Error(
          "Authentication Failed: Email or Password does not match"
        );
      }
      //return err or result (True or false)
      // if err return response stating authentication failed
      // else test the result with if statement
      //if err generating JSON web token return authentication failed
      //else if not result return response stating authentication failed
    }
  } catch (err) {
    errorTemplate(res, err, err.message);
  }
};

module.exports = {
  registerUserHandler,
  loginUserHandler,
};
