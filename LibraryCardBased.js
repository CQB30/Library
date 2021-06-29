let myLibrary = [{title: 'Of Mice and Men', author: 'Jon Krakauer', pages: 200, read: true}];
let libraryContainer = document.querySelector("#libraryContainer");
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

function createCard(book) {
    let entry = document.createElement('div');
    entry.className = "bookCard";
    entry.innerHTML = '<p class="bookInfo">Title:</p>' + '<p>' + book.title + '</p>' +
        '<p class="bookInfo">Author:</p>' + '<p>' + book.author + '</p>' +
        '<p class="bookInfo">Pages:</p>' + '<p>' + book.pages + '</p>'; 
        let readSection = document.createElement('div');
        readSection.className = 'readSection';
        readSection.innerHTML = '<p class="bookInfo">Read:</p>' + '<p>' + book.read + '</p>';
        let changeReadStatusButton = document.createElement('button');
        changeReadStatusButton.innerHTML = 'Change';
        readSection.appendChild(changeReadStatusButton);
        entry.appendChild(readSection);
        let removeButton = document.createElement('button');
        removeButton.innerHTML = 'Remove';
        entry.appendChild(removeButton);
        let libraryLength = myLibrary.length;
        entry.setAttribute('data', `index-number: ${libraryLength}`);
    libraryContainer.appendChild(entry);
}

function displayLibrary() {
    myLibrary.forEach(book => {
        createCard(book);
    });
}

function changeRead (book) {
    if (book.read === true) {
        book.read = false;
    } else {
        book.read = true;
    }
}

function removeBook(book) {
    delete myLibrary[book.indexNumber];
    for (i = book.indexNumber+1; i = myLibrary.length; i++) {
        let newIndex = i-1;
        myLibrary[i].setAttribute('data', `index-number: ${newIndex}`);
    }
}

newBookButton.addEventListener('click', () => {
    let title = prompt('Enter the title', '');
    let author = prompt('Enter the author', '');
    let pages = prompt('Enter the number of pages', '');
    let read = prompt('Have you read this yet?', '');
    console.log(title)
    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    createCard(newBook);
})

displayLibrary();