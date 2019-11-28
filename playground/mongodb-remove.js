const { ObjectID } = require("mongodb");

const { mongoose } = require("../server/db/mongoose");
const { Todo } = require("../server/models/todo");
const { User } = require("../server/models/user");

// Todo.remove()
//   .then(s => console.log(s))
//   .catch(e => console.log(e));

Todo.findByIdAndDelete("5d55799ee4240d3eb3a84a7f").then(s => console.log(s));
