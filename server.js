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
var port            = process.env.PORT || 3000;
var http            = require('http');

// SERVER CONFIGURATION ==================================================================
var server = express();
server.set('views', path.join(__dirname, 'dist'));
server.engine('html', ejs.renderFile);
server.set('view engine', 'html');
server.use(logger('dev'));
server.use(methodOverride());
server.use(session({ resave: true, saveUninitialized: true, secret: 'marisabernard' }));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, 'dist')));
server.set('superSecret', 'marisabernard'); 

// ROUTES CONFIGURATION  ====================================================================
require('./api.js')(server);
require('./routes.js')(server);

// SERVER INITIALIZATION =============================================================
server.listen(port, function() {
  console.log('Server running at http://127.0.0.1:' + port + '/');
});






