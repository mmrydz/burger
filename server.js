// ==============================================================================
// DEPENDENCIES
// ==============================================================================

var express = require("express");
var exphbs = require("express-handlebars");
var path = require("path");
var bodyParser = require("body-parser");
var mysql = require("mysql");

// ==============================================================================
// EXPRESS CONFIGURATION
// ==============================================================================

// Tells node that we are creating an "express" server

var app = express();

// Sets an initial port. We'll use this later in our listener

var PORT = process.env.PORT || 8080;

// ==============================================================================
// Parsing
// ==============================================================================

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(bodyParser.text({ type: "text/html" }));



// =============================================================================
// LISTENER
// The below code "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});