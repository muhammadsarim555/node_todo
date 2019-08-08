const { mongoose } = require("./server/db/mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");

const { Todo } = require("./server/models/todo");
const { User } = require("./server/models/user");

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

// app.post("/todos", (req, res) => {
//   //   console.log(req.body);
//   const todo = new Todo({
//     item: req.body.text
//   });
//   todo
//     .save()
//     .then(s => res.status(200).send(s))
//     .catch(e => res.status(400).send(e));
// });

app.post("/todos", (req, res) => {
  console.log(req.body);
  const item = new Todo({ item: req.body.item });

  item
    .save()
    .then(s => res.status(200).send(s))
    .catch(e => res.status(400).send(e));
});

app.get("/fetch", (req, res) => {
  Todo.find()
    .then(s => console.log(s))
    .catch(e => console.log(e));
});

app.get("/", (req, res) => {
  Todo.find({}, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      console.log(docs, "LLL");
    }
    // res.send('index',{docs:docs});
  });
  //res.send('test');
});

// app.get("/todos/:id", (req, res) => {
//   // Todo.find()
//   //   .then(s => res.status(200).send(s))
//   //   .catch(e => res.status(400).send(e));
//   // res.send(req.params);
//   const id = req.params.id;

//   if (!ObjectID.isValid(id)) {
//     return res.status(404).send();
//   }
//   Todo.findById(id)
//     .then(s => {
//       if (!s) {
//         res.status(404).send();
//       }

//       res.send(s);
//     })
//     .catch(e => res.status(404).send());
// });
//
// app.listen(port, () => console.log("App is working on 3000"));

app.listen(port || 3000);
