/*eslint-env node */
var express   	 	= require('express'); 
var bodyParser	 	= require('body-parser');
var path 		 	= require('path');
var logger 		 	= require('morgan');
var methodOverride 	= require('method-override');
var session 		= require('express-session');
var multer 			= require('multer');
var ejs 			= require('ejs');
var favicon         = require('serve-favicon');


// APP CONFIGURATION ==================================================================
var app = express();
app.set('views', path.join(__dirname, 'public','views'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({ resave: true, saveUninitialized: true, secret: 'marisabernard' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(__dirname + '/public/images/favicon.ico')); 
app.set('superSecret', 'marisabernard'); // secret variable

// ROUTES CONFIGURATION  ====================================================================
require('./routes.js')(app);

// SERVER INITIALIZATION =============================================================
app.listen(80, function() {
  var host = "localhost";
  var port = 80;
  console.log('Example app listening at http://%s:%s', host, port);
});
