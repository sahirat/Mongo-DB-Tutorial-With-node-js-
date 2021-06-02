var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    /*Return only the documents with the address "Park Lane 38":*/
    var mysort = { name:-1 };
    dbo.collection("database").find().sort(mysort).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});