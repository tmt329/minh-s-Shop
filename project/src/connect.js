var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


MongoClient.connect(url,
    {useUnifiedTopology: true, useNewUrlParser: true }
    , function(err, db) {
  if (err) throw err;
  var dbo=db.db('project');

  dbo.collection("items").find()
  .then(data=>
    console.log(data))
   
   
    })

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/nydb";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });



