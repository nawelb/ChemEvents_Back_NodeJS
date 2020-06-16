var express = require('express');
const apiRouter = express.Router();

//var app = express();
var myGenericMongoClient = require('./my_generic_mongo_client');


//CREATE
// http://localhost:3000/event-api/private/role-admin/event en mode post
// avec { "title1" : "mxyz" , "title2" : "monnaieXyz", "img1" : "null", "img2" : "null", "description" : "null", "date" : "null", "lieu": "null", "email": "null", 
//    "siteWeb": "null", "tags" : "null" } dans req.body
apiRouter.route('/event-api/private/role-admin/event')
.post( function(req , res  , next ) {
	var nouvelEvent = req.body;
	console.log("POST,nouvelEvent="+JSON.stringify(nouvelEvent));
	nouvelEvent._id=nouvelEvent.title1;
	myGenericMongoClient.genericInsertOne('eventtest',
                                            nouvelEvent,
									     function(err,event){
										     res.send(nouvelEvent);
									    });
});

//UPDATE
// http://localhost:3000/event-api/private/role-admin/event en mode PUT
// avec { "title1" : "mxyz" , "title2" : "monnaieXyz", "img1" : "null", "img2" : "null", "description" : "null", "date" : "null", "lieu": "null", "email": "null", 
//    "siteWeb": "null", "tags" : "null" } dans req.body
apiRouter.route('/event-api/private/role-admin/event')
.put( function(req , res  , next ) {
	var newValueOfEventToUpdate = req.body;
	console.log("PUT,newValueOfEventToUpdate="+JSON.stringify(newValueOfEventToUpdate));
	myGenericMongoClient.genericUpdateOne('eventtest',
	newValueOfEventToUpdate.code ,
	{ nom : newValueOfEventToUpdate.nom , 
	  change : newValueOfEventToUpdate.change} ,
	function(err,event){
			if(err){
				res.status(404).json({ error : "no devise to update with code=" + newValueOfEventToUpdate.code });
			}else{
					res.send(newValueOfEventToUpdate);
			 }
	});	//end of genericUpdateOne()
});

//DELETE BY TITLE1
/*
//work well, commented to test other delete function
// http://localhost:8282/devise-api/private/role-admin/devise/EUR en mode DELETE
apiRouter.route('/event-api/private/role-admin/event/:title1')
.delete( function(req , res  , next ) {
	var idEvent = req.params.title1;
	console.log("DELETE,eventId="+idEvent);
	myGenericMongoClient.genericRemove('eventtest',{ title1 : idEvent },
									     function(err,event){
										     res.send({ deletedEvent : idEvent } );
									    });
});
*/

//DELETE BY ID
// http://localhost:8282/devise-api/private/role-admin/devise/EUR en mode DELETE
apiRouter.route('/event-api/private/role-admin/event/:_id')
.delete( function(req , res  , next ) {
	var idEvent = req.params._id;
	console.log("DELETE,eventId="+idEvent);
	myGenericMongoClient.genericRemove('eventtest',{ _id : idEvent },
									     function(err,event){
										     res.send({ deletedEvent : idEvent } );
									    });
});





//GET ALL
//exemple URL: http://localhost:8282/devise-api/public/devise (returning all devises)
//             http://localhost:8282/devise-api/public/devise?dateMini=2020-01-01
apiRouter.route('/event-api/public/event')
.get( function(req , res  , next ) {
	var changeMini = req.query.changeMini;
	var mongoQuery = changeMini ? { date: { $gte: date }  } : { } ;
	myGenericMongoClient.genericFindList('eventtest',mongoQuery,function(err,event){
		   res.send(event);
	});//end of genericFindList()
});

//GET BY ID
//exemple URL: http://localhost:3000/event-api/public/event/c
apiRouter.route('/event-api/public/event/:_id')
.get( function(req , res  , next ) {
	var idEvent = req.params._id;
	myGenericMongoClient.genericFindOne('eventtest',
										{ '_id' : idEvent },
									    function(err,event){
										   res.send({idEvent : event});
									   });
	
});

/* //GET ALL
//exemple URL: http://localhost:8282/devise-api/public/devise (returning all devises)
//             http://localhost:8282/devise-api/public/devise?changeMini=1.05
apiRouter.route('/event-api/public/event')
.get( function(req , res  , next ) {
	//var changeMini = req.query.changeMini;
	var mongoQuery = { } ;
	myGenericMongoClient.genericFindList('eventtest',mongoQuery,function(err,event){
		   res.send({mongoQuery : event});
	});//end of genericFindList()
}); */

//GET ALL
//exemple URL: http://localhost:3000/devise-api/public/devise (returning all devises)
//             http://localhost:8282/devise-api/public/devise?changeMini=1.05
/* apiRouter.route('/event-api/public/event')
.get(function(req , res  , next ) {
	//var changeMini = req.query.changeMini;
	myGenericMongoClient.genericFindList('eventtest', {},function(err,events){
		   res.send({events});
	});//end of genericFindList()
}); */

exports.apiRouter = apiRouter;