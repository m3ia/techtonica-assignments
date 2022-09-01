async function showBooks() {
  // Shows all books
  const URL = 'http://localhost:8080/api/books';
  const response = await fetch(URL);
  const responseBooks = await response.json();
  console.log(responseBooks); 
  for (let book of responseBooks) {
    const card = 
    `
      <div class="col-4">
        <div class="card">
          <div class="card-header">
            <h5 class="class-title">${book.title}</h5>
          </div>
          <div class="card-body">
            <p><strong>Author: </strong>${book.author}</p>
            <p><strong>Format: </strong>${book.format}</p>
            <p><strong>ISBN: </strong>${book.isbn}</p>
          </div>  
          <div class="card-footer">
            <button
              type="button"
              class="btn btn-primary"
              id="editBtn-${book.isbn}"
              data-toggle="modal"
              data-target="#editBookModal"
              >Edit</button>
            <button type="button" class="btn btn-danger delete-btn" onClick="deleteBook(${book.isbn})">Delete</button>
          </div>
        </div>
      </div>
    `

    document.getElementById("books").innerHTML = document.getElementById("books").innerHTML + card; 
  }
  return responseBooks;
}

async function handleBooks() {
  const books = await showBooks();
  for (let book of books) {
    const editBtn = document.getElementById(`editBtn-${book.isbn}`);
    editBtn.addEventListener('click', () => setEditModal(book.isbn));
  }
}

handleBooks();

const deleteBook = (isbn) => {
  const xhttp = new XMLHttpRequest();

  xhttp.open("DELETE", `http://localhost:8080/book/${isbn}`, false);
  xhttp.send();

  // reload
  location.reload();
}


// Edit Book:
const setEditModal = (isbn) => {
  
  console.log('isbn is: ', isbn);
  // Get info about book via isbn
  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', `http://localhost:8080/book/${isbn}`, false);
  xhttp.send();

  const book = JSON.parse(xhttp.responseText);

  const {
    title,
    author,
    format
  } = book;

  // Fill info from the form 
  document.getElementById('newIsbn').value = isbn;
  document.getElementById('newTitle').value = title;
  document.getElementById('newAuthor').value = author;
  document.getElementById('newFormat').value = format;

  // Set up the action url for the book
  document.getElementById('editForm').action = `http://localhost:8080/book/${isbn}`;
}