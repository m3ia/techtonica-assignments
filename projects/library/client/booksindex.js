async function showBooks(){
  const URL = 'http://localhost:8080/api/books';
  const response = await fetch(URL);
  const responseBooks = await response.json();
  console.log(responseBooks); 
  for (let book of responseBooks){
    const card = 
    `
      <div class="col-4">
        <div class="card">
          <div class="card-header">
            <h5 class="class-title">${book.title}</h5>
          </div>
          <div class="card-body"
          </div>  
          <div class="card-footer">
            <button type="button" class="btn btn-default edit-btn">Edit</button>
            <button type="button" class="btn btn-danger delete-btn">Delete</button>
          </div>
        </div>
      </div>
    `
    document.getElementById("books").innerHTML = document.getElementById("books").innerHTML + card;
  }
}

showBooks();