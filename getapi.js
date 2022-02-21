var express = require('express');
var request = require('request');

var app = express();

var port = process.env.PORT || 3000;


var testRouter = express.Router();

myRouter.route('/testRoute')
  .get(function(req, res){
    request('API CALL HERE??', function (error, response, body){
      if(!error && response.statusCode == 200){
        res.json(body);
      }
    })
  });

app.use('/api', bookRouter);

var myRouter = express.Router();

app.get('/', function(req, res){
  res.send('Welcome to my API');
});

app.listen(port, function() {
  console.log('GULP is running my app on PORT: ' + port);
});