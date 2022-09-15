const mongoose = require("mongoose");

const DbSchema = new mongoose.Schema({
  website: {
    type: "string",
    required: true,
  },
  username: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required: true,
  },
});

const passwords = mongoose.model("passwords", DbSchema);

module.exports = passwords;
