const mongoose = require("mongoose");
require("dotenv").config();
const User = require("../models/userModel");

const DB_URL = process.env.DB_URL;
const connect = async () => {
  console.log("Connected to MongoDb");
  await mongoose.connect(DB_URL);
};

const disconnect = async () => {
  await mongoose.connection.close();
};

const findUser = async (obj) => {
  return User.findOne(obj);
};

const saveUser = async (newUser) => {
  return newUser.save();
};

module.exports = {
  connect,
  disconnect,
  findUser,
  saveUser,
};
