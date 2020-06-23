var express = require('express');
const apiRouter = express.Router();

//var app = express();
var myGenericMongoClient = require('./my_generic_mongo_client');


var allEvents = myGenericMongoClient.genericFindList('eventtest',function(err,event){
		   res.send(event);
	});//end of genericFindList()

    console.log(allEvents);