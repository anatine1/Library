let myLibrary =[];

function addToLibrary(lordOfTheRings) {
    var divBook = document.createElement("div");
    divBook.className = 'book';
    divBook.innerHTML = this.name, 
                    this.author,
                    this.pages;
    document.body.appendChild(divBook);


}


function Book(name, author, pages,) {
    this.name = name,
    this.author = author,
    this.pages = pages
   }
Book.prototype.info = function() {
        return(this.name);
}

const lordOfTheRings = new Book('Lord of the Rings', 'J.R.R Tolkien', '442');



