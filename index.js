var express = require("express");
var requestLogger = require("./middleware/requestLogger")


var mongo = require('mongodb');
var monk = require('monk');
var db = monk('192.168.1.125:27017/db');

var app = express();

var port = 3000;

//app.use(requestLogger);
app.use(function(req,res,next){
    req.db = db;
    next();
});

app.get('/', function(req, res){
	res.write("Hi Man \n");
	var collection = db.get('usercollection');
	collection.find({},{},function(e,docs){
		for(doc in docs) {
			res.write(docs[doc].username);
			res.write('\n');
		}
        res.end();
    });
    
	
});

app.listen(port, function() {
	console.log("Application running on port " + port);
});