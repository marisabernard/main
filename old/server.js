var port = process.env.PORT || 3000;
var http = require('http');
var fs = require('fs');
var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var api = require('./server/routes/api');
var server = express();


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




