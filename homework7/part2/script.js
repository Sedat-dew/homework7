const book = {
  title: " The Great Gatsby", //ili prazno
  author: " Scott Fitzgerald",
  readingStatus: false, //   (true or false)
  getInfo: function () {
    if (this.readingStatus) {
      return `Already read '${this.title}' by ${this.author}.`;
    } else {
      return `You still need to read '${this.title}' by ${this.author}.`;
    }
  },
};

//   prompt
book.title = prompt("What is the book's title?").trim();
book.author = prompt("Who is the author?").trim();
book.readingStatus = confirm("Have you read this book? (OK: Yes, Cancel: No)");

console.log(book.getInfo());
