// This is the express server
import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = 8080;

// Configures cors middleware
app.use(cors());

const __dirname = path.resolve();

// Create a route for the index
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

// Create a route to the About page
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'about.html'));
});

// Have a default route to a 404 - note that no route is passed in
app.use((req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname, 'client', '404.html'));
});

// Says what port to send information with
app.listen(PORT, () => {
  console.log(`HOLA! This server is running on port ${PORT}`);
});
