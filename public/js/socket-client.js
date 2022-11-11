// Referencias HTML
const online = document.querySelector('#online');
const offline = document.querySelector('#offline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', () => {
  console.log('Conectado');

  offline.style.display = 'none';
  online.style.display = '';
});

socket.on('disconnect', () => {
  console.log('Desconectado');

  offline.style.display = '';
  online.style.display = 'none';
});

btnEnviar.addEventListener('click', () => {
  const mensaje = txtMensaje.value;
  socket.emit('enviar-mensaje', mensaje);
})