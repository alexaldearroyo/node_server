const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, '/about.html')));
app.get('/contact-me', (req, res) => res.sendFile(path.join(__dirname, '/contact-me.html')));

// 404 - Keep this as the last route
app.use((req, res) => res.status(404).sendFile(path.join(__dirname, '/404.html')));

// Start the server
app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
