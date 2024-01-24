const bcrypt = require("bcrypt");
const { findUser, saveUser } = require("../db/db");
const User = require("../models/userModel");
const mongoose = require("mongoose");

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
          // Store hash in your password DB.
        });
      }
    })
    .catch((err) => {
      return res.status(err.status || 501).json({
        error: {
          message: err.message,
          status: err.status,
        },
      });
    });
};

module.exports = {
  registerUserHandler,
};
