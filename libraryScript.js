

const lordOfTheRings = new Book('Lord of the Rings', 'J.R.R Tolkien', '442');
const TaleOfTwoCities = new Book('tale', 'charles dickens', '400');

let myLibrary =[lordOfTheRings, TaleOfTwoCities];

function Book(name, author, pages,) {
    this.name = name,
    this.author = author,
    this.pages = pages
   }
Book.prototype.info = function() {
        return(this.name);
}

function render(Obj) {
    var bookDiv = document.createElement('div')
    bookDiv.className='book';
    bookDiv.innerHTML = `<h1> Title: ${Obj.name}  </h1>` 
    container.appendChild(bookDiv);
}

myLibrary.forEach(Book => { render(Book)});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

function addToLibrary() {
    var titleAdd = document.getElementById('title').innerText;
    var authorAdd = document.getElementById('author').innerText;
    var pagesAdd = document.getElementById('pages').innerText;
    var newBook = object.create(Book(titleAdd, authorAdd, pagesAdd));
    myLibrary.push(newBook);
}
  





