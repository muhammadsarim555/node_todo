const { mongoose } = require("./db/mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");

const { Todo } = require("./models/todo");
const { User } = require("./models/user");

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  //   console.log(req.body);
  const todo = new Todo({
    text: req.body.text
  });
  todo
    .save()
    .then(s => res.status(200).send(s))
    .catch(e => res.status(400).send(e));
});

app.get("/todos/:id", (req, res) => {
  // Todo.find()
  //   .then(s => res.status(200).send(s))
  //   .catch(e => res.status(400).send(e));
  // res.send(req.params);
  const id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findById(id)
    .then(s => {
      if (!s) {
        res.status(404).send();
      }

      res.send(s);
    })
    .catch(e => res.status(404).send());
});

app.listen(port, () => console.log("App is working on 3000"));
