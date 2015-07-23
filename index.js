var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    morgan = require('morgan');

app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('*', function(req, res) {
  res.sendfile('./public/index.html');
});

var server = app.listen(app.get('port'), '0.0.0.0', function() {
  console.log('Server running', server.address().address, server.address().port);
})

