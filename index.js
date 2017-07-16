var express = require('express');
var app = express();

var port = process.env.port || 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'jade');

app.listen(port);