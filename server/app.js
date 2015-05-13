/**
 * Main application file
 */

'use strict';

// Set default node environment to development

var express = require('express');
var compression = require('compression');
var bodyParser = require('body-parser');
var path = require('path');
var config=require('./config');


// Setup server
var app = express();
var server = require('http').createServer(app);


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(compression());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(express.static(path.join(config.root, 'client')));
app.set('appPath', 'client');

 app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });

// Start server
server.listen(config.port, function() {
    console.log('Express server listening on %d', config.port);
});

// Expose app
exports = module.exports = app;

