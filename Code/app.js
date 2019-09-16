var express = require('express');
var app = express();
var http = require('http').createServer(app);
var port = process.env.PORT || 1337;
app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

http.listen(port, function () {
    console.log('listening on *:' + port);
});