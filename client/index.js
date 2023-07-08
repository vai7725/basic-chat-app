const socket = io();

const form = document.getElementById('form');
const inp = document.getElementById('chatInp');
const chatContainer = document.querySelector('.chatContainer');

console.log(form);

const name = prompt('Enter your name to join chat');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (inp.value) {
    console.log(inp.value);
    socket.emit('msg', inp.value);
    inp.value = '';
  }
});

socket.on('msg', (msg) => {
  const chatMsg = document.createElement('p');
  chatMsg.textContent = msg;
  chatContainer.appendChild(chatMsg);
});
