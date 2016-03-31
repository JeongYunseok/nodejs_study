var express = require('express');

var app = express();

app.set('port', process.env.PORT || '3000');

app.get('/', function(req, res) {
  res.send('root');
});

app.get('/hello', function(req, res) {
  res.send('hello');
});

// 404 페이지
app.use(function(req, res) {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

// 500 페이지
app.use(function(err, req, res) {
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server Error');
});

app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:' + app.get('port'));
});
