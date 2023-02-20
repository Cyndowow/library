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

class Library {
    constructor() {
      this.books = []
    }
  
    addBook(newBook) {
        this.books.push(newBook)
    }

    getBook(title) {
        return this.books.find((book) => book.title === title);
    }
}

const myLibrary = new Library();

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(title, author, pages, read);
}

function displayMyLibrary() {
    
}

const createBookCard = (book) => {
    const bookCard = document.createElement('div');
    const title =  document.createElement('p');
    const author = document.createElement('P');
    const pages = document.createElement('p');
    const buttonGroup = document.createElement('div');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    bookCard.classList.add('book-card');
    buttonGroup.classList.add('button-group');
    readBtn.classList.add('btn');
    removeBtn.classList.add('btn')
    readBtn.onclick = toggleRead;

    title.textContent = `${book.title}`;
    author.textContent = `${book.author}`;
    pages.textContent = `${book.pages} pages`;

    if (book.read == true) {
        readBtn.textContent = "Read"
    } else {
        readBtn.textContent = "Not read"
    };

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    buttonGroup.appendChild(readBtn);
    bookCard.appendChild(buttonGroup);
    booksContainer.appendChild(bookCard);
}

const addBookBtn = document.getElementById('addBook');
const addBookModal = document.getElementById('addBookModal');
const addBookForm = document.getElementById('addBookForm');
const booksContainer = document.getElementById('booksContainer');

const getBookFromInput = () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    return new Book(title, author, pages, read);
};

const addBook = (e) => {
    e.preventDefault();
    const newBook = getBookFromInput();

    myLibrary.addBook(newBook);
    updateBooksContainer();
    resetBookForm();
};

const resetBookForm = () => {
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('pages').value = "";
    read = document.getElementById('read').checked = false
}

addBookForm.onsubmit = addBook;

const resetBooksContainer = () => {
    booksContainer.innerHTML = '';
}

const updateBooksContainer = () => {
    resetBooksContainer();
    for(let book of myLibrary.books) {
        createBookCard(book);
    }
};

const toggleRead = (e) => {
    const title = e.target.parentNode.parentNode.firstChild.innerHTML.replaceAll(
        '"',
        ''
    );

    const book = myLibrary.getBook(title);

    book.read = !book.read;
    updateBooksContainer();
}