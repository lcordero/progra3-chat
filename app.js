var express = require('express');
var app = express();
var http = require('http').createServer(app);
var port = process.env.PORT || 1337;
//Conectar el socket con el local host
var socket = io.connect('http://localhost:1337')
//Variables para mandar el mensaje 
var message = $('#message')
var snd_msg = $('#snd_msg')
app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

http.listen(port, function () {
    console.log('listening on *:' + port);
});

//Enviar el mensage
snd_msg.click(function () {
    socket.emit('new_message', { message: message.val() })
})

var mongoose = require('mongoose');

var dbUrl = 'mongodb+srv://isaaczb12:Ccxx745z@progra-3-lvfu9.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(dbUrl, (err) => {
    console.log('mongodb connected', err);
})