var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// var customModule = require('../modules/testModules')

// var portDecision = process.env.PORT || 3000;

//spin up server
app.listen('3000', 'localhost', function () {
  console.log('listening on port 3000');
}); // end server listening

//base url
app.get('/', function (req, res) {
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
});//end base url

app.get('/boomerang', function (req, res) {
  console.log('is the boomerang coming back?');
  res.send('Whack!');
});// end get /boomerang

app.post('/shout', urlencodedParser, function (req, res) {
  console.log('shout hit:', req.body);
  res.send('you sent a ', req.body.creature);
});//end post shoutout

app.use(express.static('public'));
