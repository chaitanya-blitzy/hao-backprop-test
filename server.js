const express = require('express');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

// Route handler for root path returning 'Hello world' response
app.get('/', (req, res) => {
  res.send('Hello, World!\n');
});

// Route handler for '/evening' path returning 'Good evening' response  
app.get('/evening', (req, res) => {
  res.send('Good evening');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
