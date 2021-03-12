"use strict";

var express = require('express'); // import addEvent from './models.js';
// const models = require('./models.js');
// const eventonica = models.Eventonica();


var _require = require('./models.js'),
    User = _require.User,
    Event = _require.Event,
    sky = _require.sky; // const eventonica = new Eventonica(); 


var app = express();
var port = process.env.PORT || 3000;

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); // to do: create a directory in eventonica called "server" and all server-related files should go there, and create another called "app". models --> server. 

app.listen(port, function () {
  console.log("Server running port ".concat(port, "..."));
});
app.get('/', function (req, res) {
  res.send("Hello World!");
});
app.route('/events').get(function (req, res) {
  res.send(Event.all);
  console.log(Event.all);
}) // add a new event
.post(function (req, res) {
  var newEvent = req.body;
  Event.all.push(newEvent);
  res.status(200).send(Event.all);
}); // http://localhost:3000/events/100 returns the event with the specific id

app.route('/events/:id').get(function (req, res) {
  var event_id = req.params.id;
  console.log(event_id, Event);
  var status = 400;
  var response = "Unable to fetch data!";
  Event.all.forEach(function (event) {
    if (event['id'] == event_id) {
      res.status(200).send(event);
    }
  });
}); // get all users 

app.route('/users').get(function (req, res) {
  res.send(User.all);
}) // add a new user, and return all users
.post(function (req, res) {
  var newUser = req.body;
  User.all.push(newUser);
  res.status(200).send(User.all);
}); // http://localhost:3000/users/200 gets user with specific id

app.route('/users/:id').get(function (req, res) {
  var user_id = req.params.id;
  var status = 400;
  var response = "Unable to fetch data!";
  User.all.forEach(function (user) {
    if (user['id'] == user_id) {
      res.status(200).send(user);
    }
  });
}); // get specific user 

app.route('/sky').get(function (req, res) {
  res.send(sky);
}); //