function library() {
  const bookshelf = document.getElementById("bookshelf");

  const myLibrary = [];

  function Book(title, author, pages, read) {
    (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read),
    (this.info = function () {
        return `${title} by ${author} with ${pages} pages, ${read}`;
      });
  }

  function createBookElement(b) {
    const box = document.createElement("div");

    const textHeading = document.createElement("h3");
    textHeading.textContent = b.title;

    const textBody = document.createElement("p");
    textBody.textContent = `Written by ${b.author} has ${b.pages} pages, ${b.read}`;

    box.appendChild(textHeading);
    box.appendChild(textBody);

    bookshelf.appendChild(box);
  }

  function addBookToLibrary(x) {
    myLibrary.push(x);
  }

  const newBookButton = document.getElementById("book-button");

  newBookButton.addEventListener("click", () => {
    const newBook = new Book(prompt(), prompt(), prompt(), prompt());
    addBookToLibrary(newBook);
    createBookElement(newBook);
    console.log(myLibrary);
  });

  // test existing books
  const theHobbit = new Book(
    "The Hobbit",
    "JRR Tolkien",
    "295",
    "already read."
  );
  addBookToLibrary(theHobbit);

  // append existing books into the DOM
  for (let x = 0; x < myLibrary.length; x += 1) {
    createBookElement(myLibrary[x]);
  }
}
library();
