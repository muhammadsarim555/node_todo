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

  dbName
    .collection("Todos")
    .find({ completed: true })
    .toArray()
    .then(
      s => console.log(JSON.stringify(s, undefined, 2)),
      e => console.log(e, "error")
    );

  //   client.close();
});
