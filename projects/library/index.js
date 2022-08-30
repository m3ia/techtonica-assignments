// This will be your express server 

import express from "express";
import cors from "cors";
import books from "./books.js";
import path from 'path';

const app = express();
const PORT = 8080;

// Configuring cors middleware
app.use(cors());

// to let the server know what directory are we working on 
const __dirname = path.resolve();
app.use(express.static('client'));

// /api/books
//creates an endpoint for the route `/api/books` that prints all the books 
app.get('/api/books', (req, resp) =>{
    resp.json(books);

})

//this is route
app.get('/', (req, resp) =>{
    // resp.send("Hello Techtonica this will be my first REST API");
    // open the index.html file that is in the client folder in your path
    resp.sendFile(path.join(__dirname, 'client', 'index.html'));
})


app.listen(PORT, () => console.log(`HOLA! Server running at ${PORT}`));