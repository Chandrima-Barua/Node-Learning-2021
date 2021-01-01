var MongoClient = require('mongodb').MongoClient;
var URL = "mongodb+srv://chandrimademo:dk4zHR0osoYrqzxX@cluster0.1w02v.mongodb.net?retryWrites=true&w=majority";
var config = { useUnifiedTopology: true };
var tools = require('./Crud');

MongoClient.connect(URL, config, function (error,MyMongoClient ) {

    if(error){
        console.log("Database connection failed");
    }
    else{
        console.log("Database connection successful");
        var myDatabase = MyMongoClient.db('portfolio');
        var myCollection = myDatabase.collection('user');

        //for inserting one data
        // tools.InsertSingleData(MyMongoClient);
        //for inserting multiple data
        // tools.InsertMultipleData(MyMongoClient,myDatabase,myCollection);
        //for deleting single data
        tools.DeleteSingleData(MyMongoClient,myDatabase,myCollection);

    }


})