/*eslint-env node */
var express   	 	= require('express'); 
var bodyParser	 	= require('body-parser');
var path 		 	= require('path');
var logger 		 	= require('morgan');
var methodOverride 	= require('method-override');
var session 		= require('express-session');
var multer 			= require('multer');
var upload          = multer({ dest: './uploads' });
var ejs 			= require('ejs');
var favicon         = require('serve-favicon');
var port            = process.env.PORT || 8091;
var http            = require('http');

// SERVER CONFIGURATION ==================================================================
var server = express();
server.use(logger('dev'));
server.use(methodOverride());
server.use(session({ resave: true, saveUninitialized: true, secret: 'marisabernard' }));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.set('superSecret', 'marisabernard'); 

// API CONFIGURATION  ====================================================================
server.get('/api', function(req, res){
  res.send("API!!");
});

server.get('/api/show', function(req, res){
  res.send([{
    "_id": "ID1",
    "title" :"TITLE1",
    "assignedTo": "ASSIGNEDTO1",
    "description": "DESCRIPTION1",
    "percentageComplete": 1
  }]);
});

// SERVER INITIALIZATION =============================================================
server.listen(port, function() {
  console.log('Server running at http://127.0.0.1:' + port + '/');
});