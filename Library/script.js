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

function addBookToLib(title, author, numPages, haveRead){
    let newBook = new Book(title, author, numPages, haveRead);
    myLib.push(newBook);
}

//change the read status of a book
function changeReadStatus(){

}

//display each book on the HTML page
//needs a button for each one to remove it
function displayBooks(){
    let displayDiv = document.querySelector('.library');
    myLib.forEach(book => {
        //OWN FUNCTION
       let bookEntry = document.createElement('div');
       bookEntry.innerHTML = book.info();
       displayDiv.appendChild(bookEntry);

       //OWN FUNCTION
       let removeButton = document.createElement('button');
       removeButton.innerHTML = "Remove";
       displayDiv.appendChild(removeButton);

       let readButton = document.createElement('button');
       readButton.innerHTML = "Change Read Status";
       displayDiv.appendChild(readButton);
    });

    //NEED TO ATTACH EVENT LISTENERS FOR EACH BUTTON
}

// add event listener to open form to add new book
document.getElementById('add-button').addEventListener('click', function(){
    let addForm = document.querySelector('.add-book-form');
    addForm.style.display = 'block';
    console.log("CLICK");
});

addBookToLib("the Hobbit", "JRR Tolkien", 296, true);
addBookToLib("The Fire Next Time", "James Baldwin", 100, false);
addBookToLib("Making Michael", "Mike Smallcombe", 600, true);



displayBooks();
