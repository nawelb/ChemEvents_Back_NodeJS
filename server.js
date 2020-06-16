//les routes en /html/... seront gérées par express
//par de simples renvois des fichiers statiques du répertoire "./html"
var express = require('express');
var scfApiEvents = require('./crud_event');

var app = express();

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json() ;

app.listen(3000 , function () {
	console.log("http://localhost:3000");
});
	
// CORS enabled with express/node-js : 
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");                                      
		//ou avec  "www.xyz.com" à la place de "*" en production   
res.header("Access-Control-Allow-Headers",                    
	"Origin, X-Requested-With, Content-Type, Accept");  
next();
});


app.use(jsonParser);

app.use('/html', express.static(__dirname+"/html"));
app.use(scfApiEvents.apiRouter); //delegate REST API routes to apiRouter(s)

	
/*	
app.get('/', function(req , res ) {
	res.redirect('/html/index.html');
});
*/