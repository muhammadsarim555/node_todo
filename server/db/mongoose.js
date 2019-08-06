var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://sarim:sarim123@ds259787.mlab.com:59787/todo123");
// mongoose.connect("mongodb://localhost:27017/TodoApp");

module.exports = { mongoose };
