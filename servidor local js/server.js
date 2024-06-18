const net = require('net');

const host = '127.0.0.1';
const port = 50000;

const server = net.createServer((socket) => {
  console.log(`Cliente conectado de ${socket.remoteAddress}:${socket.remotePort}`);

  socket.on('data', (data) => {
    console.log(`Mensagem recebida: ${data}`);
    socket.write(data);
  });

  socket.on('end', () => {
    console.log('Cliente desconectado');
  });
});

server.listen(port, host, () => {
  console.log(`Servidor na escuta em ${host}:${port}`);
});
