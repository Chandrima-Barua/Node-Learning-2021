var MongoClient = require('mongodb').MongoClient;
var URL = "mongodb+srv://chandrimademo:dk4zHR0osoYrqzxX@cluster0.1w02v.mongodb.net?retryWrites=true&w=majority";
var config = { useUnifiedTopology: true };

MongoClient.connect(URL, config, function (error, ) {

    if(error){
        console.log("Database connection failed");
    }
    else{
        console.log("Database connection successful");

    }

})