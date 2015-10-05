//basic server dependencies
var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors');
var database = require('./db/orm-model.js');
var database = database();
var restaurantTable = database.Restaurant;

app.use(cors());
//serve up static index.html file by telling express to look in the client folder
app.use('/', express.static("./client"));

//yelp client API configuration
var yelp = require("yelp").createClient({
  consumer_key: "Rrq-4MDBHD_fizozFeSbJQ",
  consumer_secret: "wk-eJnt7_2pLHJ8Jrty4DN3T7TY",
  token: "PwoAmHcHLys2zckRR7bkbRq7osaNycNm",
  token_secret: "j3_6MRTFrVLCaVr-pomty9J3pX4"
});

module.exports = 'yelp';
//yelp API call using request sent from front end
app.get('/yelp', function(req, res){

  //testing the upsert shit u naw?
  restaurantTable.upsert({
    title: "Test Restaurant",//req.body.user_id,
    location: "Test Location",//req.body.email,
    glutenFree: false,//req.body.picture || req.body.gravatar,
    dairyFree: false,
    soyFree: false});

  yelp.search({term: req.query.restaurant, location: req.query.location}, function(error, data) {
    if (error){
      console.error(error);
    } else {
      res.send(data);
    }
  });
});







//sets localhost to listen on port 8080
app.set('port', process.env.PORT || 8080);
app.listen(app.get('port'));
console.log("App listening on port");
//database(); // we probably won't need this later but yeah