//basic server dependencies
var express = require('express');
var path = require('path');
var app = express();
//yelp API call dependencies

//serve up static index.html file by telling express to look in the client folder
app.use('/', express.static("./client"));







//sets localhost to listen on port 8080
app.set('port', process.env.PORT || 8080);
app.listen(app.get('port'));
console.log("App listening on port");
