const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ObjectId = require("mongodb").ObjectId;
const data = require("./Models/db");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://harjot:TYKAL32tK1CaWkeG@cluster0.7szx806.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("successfully connected to database");
  });

app.get("/", async (req, res) => {
  const passwords = await data.find();

  res.json(passwords);
});

app.post("/newpassword", async (req, res) => {
  const newpassword = new data({
    website: req.body.website,
    password: req.body.password,
    username: req.body.username,
    email: req.body.email,
  });
  newpassword.save(() => {
    console.log("saved to database");
  });
});

app.put("/updatepassword/:id", async (req, res) => {
  await data.findByIdAndUpdate(ObjectId(req.params.id), {
    website: req.body.website,
    email: req.body.email,
    password: req.body.password,
    username: req.body.username,
  });
  console.log("password updated");
});

app.delete("/deletepassword/:id", async (req, res) => {
  await data.findByIdAndDelete(req.params.id);
  console.log("password deleted");
});

app.listen("3001", () => {
  console.log("working");
});
