const { mongoose } = require("./db/mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");
const _ = require("lodash");

const { Todo } = require("./models/todo");
const { User } = require("./models/user");

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


// 
app.post("/users", (req, res) => {
  let body = _.pick(req.body, ["email", "password"]);
  let user = new User(body)

  user.save().then(s => res.send(s))
    .catch(e => res.status(400).send(e))
})


// 
app.get("/", (req, res) => {
  Todo.find({}, (err, docs) => {
    if (err) {
      res.status(400).send(err);
      console.log(err);
    } else {
      res.status(200).send(docs);
      // console.log(docs, "LLL");
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

// app.listen(port, () => console.log("App is working on 3000"));
// app.set("port", process.env.PORT || 3000);
app.listen(3000);
