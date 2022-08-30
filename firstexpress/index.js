const express = require("express");

// determines the port
const PORT = process.env.PORT || 3001;

// creates the express app for you
const app = express();

// create a get request router
app.get('/', (req, res) => {
  res.json('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Hola! Server is listening on ${PORT}`);
});

var requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
}

app.use(requestTime);

app.get('/', function (req, res) {
  var responseText = 'Hello Techtonica!<br>';
  responseText += '<small>Requested at ' + req.requestTime + ' </small>';
  res.send(responseText);
});