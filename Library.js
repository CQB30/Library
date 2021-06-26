let myLibrary = [{title: 'Of Mice and Men', author: 'Jon Krakauer', pages: 200, read: true}];
let libraryTableBody = document.querySelector("#tableBody");
let newBookButton = document.querySelector('#newBook');


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function createTableEntry(book) {
    let entry = document.createElement('tr');
    entry.innerHTML = '<td>' + book.title + '</td>' +
        '<td>' + book.author + '</td>' +
        '<td>' + book.pages + '</td>' + 
        '<td>' + book.read + '</td>', +
        '<td><button class="removeEntry">Remove</button></td>';
    libraryTableBody.appendChild(entry);
}

function displayLibrary() {
    myLibrary.forEach(book => {
        createTableEntry(book);
    });
}

newBookButton.addEventListener('click', () => {
    let title = prompt('Enter the title', '');
    let author = prompt('Enter the author', '');
    let pages = prompt('Enter the number of pages', '');
    let read = prompt('Have you read this yet?', '');
    console.log(title)
    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    createTableEntry(newBook);
})

displayLibrary();