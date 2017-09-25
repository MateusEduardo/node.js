var app = require('./config/server');

var server = app.listen(3000, function() {
    console.log('sv up');
});

var io = require('socket.io').listen(server);

app.set('io', io); //variavel global

io.on('connection', function(socket) {
    console.log('usuário conectou');
    
    socket.on('disconnect', function() {
        console.log('usuário desconectou');
    });

    socket.on('msgParaServidor', function(data) {
        socket.emit('msgParaCliente', { apelido: data.apelido, mensagem: data.mensagem });
        
        //broadcast permite que a mensagem seja enviada para todos os usuários
        socket.broadcast.emit('msgParaCliente', { apelido: data.apelido, mensagem: data.mensagem });

        /* participantes */
        if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
            socket.emit('participantesParaCliente', { apelido: data.apelido });
            socket.broadcast.emit('participantesParaCliente', { apelido: data.apelido });
        }
    });
});