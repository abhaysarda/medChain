var express = require('express');
var app = express();

app.set('view engine', 'ejs'); //setting our view engine as ejs
app.get('/', function(req, res){
  res.send('this is the homepage');
}); //responding to a GET request

app.get('/contact', function(req, res){
  res.send('this is the contact page');
});
app.listen(3000);
