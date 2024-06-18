const net = require('net');
const readline = require('readline');

const host = '127.0.0.1';
const port = 50000;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const client = new net.Socket();

client.connect(port, host, () => {
  console.log(`Conectado ao servidor em ${host}:${port}`);
  rl.question('Digite a mensagem que deseja enviar: ', (message) => {
    client.write(message);
  });
});

client.on('data', (data) => {
  console.log(`Mensagem recebida de volta do Servidor: ${data}`);
});

client.on('end', () => {
  console.log('Desconectado do servidor');
});

rl.on('line', (input) => {
  if (input.toLowerCase() === 'sair') {
    client.end();
    rl.close();
  } else {
    client.write(input);
  }
});
