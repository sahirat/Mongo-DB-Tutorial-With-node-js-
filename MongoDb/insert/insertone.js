var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("database").insertOne(myobj, (err, res) => {
        if (err) throw err;
        console.log(" Data Inserted:"+res.insertedCount);
        db.close();
    });
});
