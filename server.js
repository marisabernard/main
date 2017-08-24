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
//var fs              = require('fs');
//var html            = fs.readFileSync('index.html');

/*var log = function(entry) {
fs.serverendFileSync('/tmp/sample-server.log', new Date().toISOString() + ' - ' + entry + '\n');
}*/

// SERVER CONFIGURATION ==================================================================
var app = express();
app.set('views', path.join(__dirname, 'public','views'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({ resave: true, saveUninitialized: true, secret: 'marisabernard' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(__dirname + '/public/images/favicon.ico')); 
app.set('superSecret', 'marisabernard'); 


/*var server = http.createServer(function (req, res) {
if (req.method === 'POST') {
    var body = '';

    req.on('data', function(chunk) {
        body += chunk;
    });

    req.on('end', function() {
        if (req.url === '/') {
            log('Received message: ' + body);
        } else if (req.url = '/scheduled') {
            log('Received task ' + req.headers['x-aws-sqsd-taskname'] + ' scheduled at ' + req.headers['x-aws-sqsd-scheduled-at']);
        }

        res.writeHead(200, 'OK', {'Content-Type': 'text/plain'});
        res.end();
    });
} else {
    res.writeHead(200);
    res.write(html);
    res.end();
}
});
*/

// Listen on port 3000, IP defaults to 127.0.0.1
//server.listen(port);

// Put a friendly message on the terminal
//console.log('Server running at http://127.0.0.1:' + port + '/');


// ROUTES CONFIGURATION  ====================================================================
//require('./routes.js')(app);

// SERVER INITIALIZATION =============================================================
app.listen(port, function() {
  console.log('Server running at http://127.0.0.1:' + port + '/');
});






