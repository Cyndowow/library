let myLibrary = [];

class Book {
    constructor(
        title, 
        author, 
        pages, 
        read) {
        this.title = title
        this.author = author
        this.pages =  pages
        this.read = Boolean(read)
    }
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(this.title, this.author, this.pages, this.read);
}

function displayMyLibrary() {
    myLibrary.forEach
}

const createBookCard = (book) => {
    const bookCard = document.createElement('div')
    const title =  document.createElement('p')
    const author = document.createElement('P')
    const pages = document.createElement('p')
    const read = document.createElement('p')

    bookCard.classList.add('book-card')

    title.textContent = `${book.title}`
    author.textContent = `${book.author}`
    pages.textContent = `${book.pages}`

    if (book.read == true) {
        read.textContent = "Read"
    } else {
        read.textContent = "Not read"
    }
}

const addBookBtn = document.getElementById('addBook');
const addBookModal = document.getElementById('addBookModal');
const addBookForm = document.getElementById('addBookForm');