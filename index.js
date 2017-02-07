var express = require("express");
var requestLogger = require("./middleware/requestLogger")


var mongo = require('mongodb');
var monk = require('monk');
var db = monk('192.168.1.125:27017/db');
var fs = require('fs');
var app = express();

var port = 3000;

//app.use(requestLogger);
app.use(function(req,res,next){
    req.db = db;
    next();
});

app.get('/', function(req, res){
	res.write("Hi Man \n");
	/*var collection = db.get('usercollection');
	collection.find({},{},function(e,docs){
		for(doc in docs) {
			res.write(docs[doc].username);
			res.write('\n');
		}
        res.end();
    });*/	
    res.end();
});

app.post('/', function(req, res){

	var body = [];
	req.on('data', function(chunk) {
		console.log(chunk);
	  body.push(chunk);
	}).on('end', function() {
	  body = Buffer.concat(body).toString();
	  // at this point, `body` has the entire request body stored in it as a string
	});

	console.log(Buffer.concat(body).toString());
	/*fs.readFile(req.files[0], function(err, data){
		console.log(data);
	});*/
	res.end();
});

app.listen(port, function() {
	console.log("Application running on port " + port);
});