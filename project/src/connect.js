// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url,
//     {useUnifiedTopology: true, useNewUrlParser: true }
//     , function(err, db) {
//   if (err) throw err;
//   var dbo=db.db('Project');
//   var myobj = { name: "Company Inc", address: "Highway 37" };
//   dbo.collection("Account").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/nydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});



