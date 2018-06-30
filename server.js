//Dependencies 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var http = require("http");
var fs = require("fs");

//Express Setup 
var app = express();
var PORT = process.env.PORT || 3001;

//Body Parser Setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

//var server = http.createServer(handleRequest);

// Add the application routes

require( './routing/apiRoutes')(app);
require( './routing/htmlRoutes')(app);

// Starts our server, 3001
app.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});



