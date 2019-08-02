// const MongoClient = .MongoClient;
const { MongoClient, ObjectID } = require("mongodb");
const obj = new ObjectID();

console.log(obj);

const test = require("assert");
// Connection url
const url = "mongodb://localhost:27017/TodoApp";
// Database Name
const dbName = "test";
// Connect using MongoClient
MongoClient.connect(url, (err, client) => {
  if (err) {
    return console.log("Failed to connect");
  }
  console.log("Successfull");

  const dbName = client.db("TodoApp");

  //   dbName
  //     .collection("Todos")
  //     .deleteOne({ completed: true })
  //     .then(s => console.log(s), e => console.log(e, "error"));

  //   dbName
  //     .collection("Todos")
  //     .deleteMany({ text: "Eat Food" })
  //     .then(s => console.log(s), e => console.log(e, "error"));

  dbName
    .collection("Todos")
    .findOneAndDelete({ _id: new ObjectID("5d2fe1411d9bc74dba05bfc8") })
    .then(s => console.log(s), e => console.log(e, "error"));
  //   client.close();
});
