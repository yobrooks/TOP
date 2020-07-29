// array to hold the books
let myLib = [];


/* Book Object Constructor*/
function Book(title, author, numPages, haveRead){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.haveRead = haveRead;
}

/* Functions belonging to Book object
    These are being defined on the prototype of the object
    so that a copy of the function isn't made on each Book object
    Instead a single instance of the function will be shared*/
Book.prototype.info = function(){
    let readMessage = "have not read yet";
    if(this.haveRead){
        readMessage = "have read"
    }
    return this.title + " by " + this.author + ", " + this.numPages + " pages, " + readMessage;
}

// Adds a book to the library and then displays it
function addBookToLib(title, author, numPages, haveRead){
    let newBook = new Book(title, author, numPages, haveRead);
    myLib.push(newBook);
    displayBook(newBook);
}

//change the read status of a book
function changeReadStatus(){

}

//display the new book on the HTML page
//also could've just gotten the last element of the library array
//instead of passing the whole book object
function displayBook(book){
    //get the div where books will be displayed
    let displayDiv = document.querySelector('.library');

    //add new book entry
    let bookEntry = document.createElement('div');
    bookEntry.innerHTML = book.info();
    displayDiv.appendChild(bookEntry);

    //add remove button
    let removeButton = document.createElement('button');
    removeButton.innerHTML = "Remove";
    displayDiv.appendChild(removeButton);

    //add read status button
    let readButton = document.createElement('button');
    readButton.innerHTML = "Change Read Status";
    displayDiv.appendChild(readButton);


    //attach event listeners for each button
}

//gets the book data and passes it to add a new book to the library
function getNewBookData(elements){
    let title = elements[0].value;
    let author = elements[1].value;
    let numPages = Number(elements[2].value);
    let haveRead = false;
    if(elements[3].checked){
        haveRead = true;
    }
    addBookToLib(title, author, numPages, haveRead);
}


// add event listener to open form to add new book
document.getElementById('add-button').addEventListener('click', function(){
    let addForm = document.querySelector('.add-book-form');
    addForm.style.display = 'block';
});

//upon submitting the form, get the book data first, then reset the form and hide it
document.querySelector(".add-book-form").onsubmit = function(e){
    e.preventDefault();
    //console.log(this.elements[0].type);
    getNewBookData(this.elements);
    this.reset();
    this.style.display = 'none';
}

