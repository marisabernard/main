var port = process.env.PORT || 3000;
var http = require('http');
var fs = require('fs');
var html = fs.readFileSync('index.html');
var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var api = require('./server/routes/api');
var server = express();

var log = function(entry) {
  fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
};

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
});*/


// Parsers for POST data
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
server.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
server.use('/api', api);

// Catch all other routes and return the index file
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(port);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + port + '/');




