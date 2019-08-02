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

  //   dbName.collection("Todos").insertOne(
  //     {
  //       text: "Done her ",
  //       completed: false
  //     },
  //     (err, result) => {
  //       if (err) {
  //         return console.log(err, "Unable to insert todos");
  //       }
  //       console.log(JSON.stringify(result), undefined, 2);
  //     }
  //   );

  // dbName.collection("Users").insertOne(
  //   {
  //     name: "Muhammad Sarim",
  //     age: 18,
  //     location: "Karachi"
  //   },
  //   (err, result) => {
  //     if (err) {
  //       return console.log(err);
  //     }
  //     console.log(result.ops[0]._id.getTimestamp());
  //   }
  // );
});
