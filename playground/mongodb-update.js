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
    .collection("Users")
    .findOneAndUpdate(
      { _id: new ObjectID("5d2a574c178b301e24f2dba1") },
      {
        $set: { name: "Iqra Sarim" },
        $inc: { age: 4 }
      },
      {
        returnOriginal: false
      }
    )
    .then(s => console.log(s))
    .catch(e => console.log(e));
});
