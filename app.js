var express = require('express');
var app = express();
const PORT = 8080;

app.get('/', function (request, response) {
  response.send('Got a hit!');
});

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT);
});
