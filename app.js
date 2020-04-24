// Copyright 2017 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var router = express.Router();

/****************************** Router Configuration ***************************/

app.use(express.static(__dirname + '/dist/client'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodOverride());

/****************************** Routes ***************************/

router.get('/api', function(req, res){
  res.send('API');
});

router.get('*', function(req, res){
  res.sendFile('index.html');
});

app.use('/', router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;


