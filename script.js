function library() {
  const bookshelf = document.getElementById("bookshelf");

  const readYet = {
    yes: "Already read",
    no: "Not read yet",
  };

  // book item creation form elements
  const bookItemForm = {
    body: document.getElementById("create-book-ui"),
    title: document.getElementById("title-input"),
    author: document.getElementById("author-input"),
    pageCount: document.getElementById("page-count-input"),
    readYetYes: document.getElementById("read-yet-yes"),
    readYetNo: document.getElementById("read-yet-no"),
    submitButton: document.getElementById("book-details-submit"),
  };

  const myLibrary = [];

  function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read === "true";
  }

  function createBookElement(b) {
    // create book item constitute elements
    const box = document.createElement("div");

    const textHeading = document.createElement("h3");
    textHeading.textContent = b.title;

    const textBody = document.createElement("p");
    textBody.textContent = `By ${b.author} contains ${b.pages} pages`;

    const readYetDisplay = document.createElement("p");
    readYetDisplay.textContent = b.read ? readYet.yes : readYet.no;

    const removeButton = document.createElement("button");
    removeButton.textContent = "X";

    removeButton.addEventListener("click", () => {
      box.remove();
      myLibrary.splice(myLibrary.indexOf(b), 1);
    });

    // append the content elements to the container div
    box.appendChild(textHeading);
    box.appendChild(textBody);
    box.appendChild(readYetDisplay);
    box.appendChild(removeButton);

    // add class names
    box.className = "book-item";
    textHeading.className = "book-item-heading";
    textBody.className = "book-item-body";
    removeButton.className = "book-item-delete";

    // append the book item to the DOM
    bookshelf.appendChild(box);
  }

  // add book to library
  function addBookToLibrary(x) {
    myLibrary.push(x);
  }

  // display book item creation form
  const newBookButton = document.getElementById("book-button");
  newBookButton.addEventListener("click", () => {
    bookItemForm.body.style.display = "flex";
  });

  // book item creation button
  bookItemForm.submitButton.addEventListener("click", () => {
    // create book item from form input
    const readValue = bookItemForm.readYetYes.checked ? "true" : "false";
    const newBook = new Book(
      bookItemForm.title.value,
      bookItemForm.author.value,
      bookItemForm.pageCount.value,
      readValue
    );
    // append book item to the DOM and add class
    addBookToLibrary(newBook);
    createBookElement(newBook);

    // clear form and hide UI
    bookItemForm.body.style.display = "none";
    bookItemForm.title.value = "";
    bookItemForm.author.value = "";
    bookItemForm.pageCount.value = "";
  });

  // test existing books
  const theHobbit = new Book("The Hobbit", "JRR Tolkien", "295", "true");
  addBookToLibrary(theHobbit);

  // append existing books into the DOM
  for (let x = 0; x < myLibrary.length; x += 1) {
    createBookElement(myLibrary[x]);
  }
}
library();
