// This will be your express server 

import express from "express";
import bodyParser from 'body-parser';
import cors from "cors";
import originalBooks from "./books.js";
import path from 'path';

let books = originalBooks;
const app = express();
const PORT = 8080;

// Configuring cors middleware
app.use(cors());

// Congfigure body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// to let the server know what directory are we working on 
const __dirname = path.resolve();
app.use(express.static('client'));

// /api/books
//creates an endpoint for the route `/api/books` that prints all the books 
app.get('/api/books', (req, res) =>{
    res.json(books);

})

//this is route
app.get('/', (req, res) =>{
    // resp.send("Hello Techtonica this will be my first REST API");
    // open the index.html file that is in the client folder in your path
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
})

// Create a new book
app.post('/new-book', (req, res) => {
  const book = req.body;
  console.log(book);
  books.push(book);

  res.sendFile(path.join(__dirname, 'client', 'index.html'));
  console.log("Book added to database");
})


// Get a single book by ISBN
app.get('/book/:isbn', (req, res) => {
  const isbn = req.params.isbn;

  // Search for books based on isbn
  // for (let book of books) {
  //   if (book.isbn === isbn) {
  //     res.json(book);
  //     return;
  //   }
  // }

  // Filter books based on param
  const requestedBook = books.filter(book => book.isbn === isbn);
  if (requestedBook.length > 0) {
    res.send(JSON.stringify(requestedBook[0]));
  } else {
    res.status(404).send('Book not found');
  }
});

// Delete a book
app.delete('/book/:isbn', (req, res) => {
  const isbn = req.params.isbn;

  let booksInitialLength = books.length;
  books = books.filter(book => book.isbn !== isbn);
  let booksNewLength = books.length;
  
  if (booksInitialLength === booksNewLength) {
    res.send('Book deleted');
    console.log('Book deleted');
  } else {
    res.status(404).send('Cannot delete. Book not found');
  }
})

app.listen(PORT, () => console.log(`HOLA! Server running at ${PORT}`));