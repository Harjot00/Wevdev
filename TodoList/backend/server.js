const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ObjectId = require("mongodb").ObjectId;
const Todo = require("./Models/db");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/Experiment");

app.get("/", async (req, res) => {
  const todos = await Todo.find();

  res.json(todos);
});
app.post("/newtodo", (req, res) => {
  const newtodo = new Todo({ text: req.body.name });
  newtodo.save();
  res.json(newtodo);
  console.log("saved");
});
app.put("/update/:id", (req, res) => {
  Todo.findOneAndUpdate(
    { _id: ObjectId(req.params.id) },
    { complete: true },
    { new: true },
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("updated");
      }
    }
  );
});

app.get("/Delete/:id", (req, res) => {
  Todo.deleteOne({ _id: ObjectId(req.params.id) }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("deleted");
    }
  });
});

app.listen(3001, () => {
  console.log("Working");
});
