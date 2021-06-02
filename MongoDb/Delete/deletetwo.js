var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

    var myquery = { address: /^O/ };
    dbo.collection("database").deleteMany(myquery, function (err, obj) {
        if (err) throw err;
        console.log("document deleted" + obj.result.n);
        db.close();
    });
});