var fs = require('fs');
var http = require('http');
var server = http.createServer(function (req, res) {

});

server.listen(5050);
console.log("Server run successful");

var mysql = require('mysql');
var dbconnection = {
    host:"localhost",
    user:"root",
    password:"",
    database:"portfolio_node"
}

var connection = mysql.createConnection(dbconnection);
connection.connect(function (error) {

    if(error){
        console.log("Database connection is failed");
    }
    else{
        console.log("Database connection is successful");

        insertdata(connection);
    }

})

function insertdata(connection){

    let sql_query = "INSERT INTO `user`(`name`, `address`, `phone`) VALUES ('Chandrima Barua','Kajir Deuri','1212121212')";

    connection.query(sql_query,function (error) {
        console.log(error);
        if(error){
            console.log("Data insertion has failed")
        }
        else{
            console.log("Data insertion successful")

        }
        
    })
}

