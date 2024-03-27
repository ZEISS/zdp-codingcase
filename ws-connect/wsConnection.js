import WebSocket from 'ws';

// This file requires the web server to run as a local Docker container first!

// Connect to the WebSocket server
const ws = new WebSocket('ws://localhost:4000');

ws.on('open', () => {
  console.log('Connected to server');
});

// Handle incoming messages
ws.on('message', (message) => {
  console.log('Received: %s', message);
});

ws.on('close', () => { console.log('Connection closed');})