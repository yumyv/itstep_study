window.addEventListener("load", function () {
    class Library {
        constructor() {
            this.books = [];
            this.add = function (book) {
                this.books.push(book)
            };
        }

        removeBookByIndex(index) {
            let n = parseInt(index, 10);
            for (let i = 0; i < this.books.length; i++) {
                if (i === n) {
                    this.books.splice(i, 1);
                    return this.showBooks();
                }
            }
        };

        removeBookByName(name) {
            for (let i = 0; i < this.books.length; i++) {
                if (this.books[i].bookName.toLowerCase() === name.toLowerCase()) {
                    this.books.splice(i, 1);
                    return this.showBooks();
                }
            }
        };

        showBooks() {
            let result = "";
            for (let i = 0; i < this.books.length; i++) {
                result += i + ": " + "\"" + this.books[i].bookName + "\"" + "\n" + this.books[i].author + " " + this.books[i].year + " год" + "\n";
            }
            return result;
        };

        showBookByIndex(index) {
            let result = "";
            let n = parseInt(index, 10);
            for (let i = 0; i < this.books.length; i++) {
                if (i === n) result = i + ": " + "\"" + this.books[i].bookName + "\"" + "\n" + this.books[i].author + " " + this.books[i].year + " год" + "\n";
            }
            return result;
        };

        showBooksByAuthor(author) {
            let result = "";
            for (let i = 0; i < this.books.length; i++) {
                if (this.books[i].author.toLowerCase() === author.toLowerCase()) {
                    result += i + ": " + "\"" + this.books[i].bookName + "\"" + "\n" + this.books[i].year + " год" + "\n";

                }
            }
            return "Книги автора: " + author + "\n" + result;
        }
    }

    class Book {
        constructor(bookName, author, year) {
            this.bookName = bookName;
            this.author = author;
            this.year = year;
        }

        showHTML() {
            return `
            <div>
                <div class="bookName">${this.bookName}</div>
                <div class="author">${this.author}</div>
                <div class="year">${this.year}</div>
            </div>
        `
        }
    }

    let lib = new Library();
    let info = document.querySelector("#info");
    let btnAddBook = document.querySelector("#addBook");

    btnAddBook.addEventListener("click", function () {
        let bookName = document.querySelector("#bookName").value;
        let author = document.querySelector("#author").value;
        let year = document.querySelector("#year").value;
        let book = new Book(bookName, author, year);
        lib.add(book);
        let result = lib.showBooks();
        info.innerHTML = result;
    });


    let btnBookIndex = document.querySelector("#bookIndex");

    btnBookIndex.addEventListener("click", function () {
        let bookIndex = document.querySelector("#bookByIndex").value;
        let result = lib.showBookByIndex(bookIndex);
        info.innerHTML = result;
    });


    let btnRemoveByIndex = document.querySelector("#removeIndex");

    btnRemoveByIndex.addEventListener("click", function () {
        if (lib.showBooks()) {
            let bookIndex = document.querySelector("#removeByIndex").value;
            let result = lib.removeBookByIndex(bookIndex);
            info.innerHTML = result;
        }
    });


    let btnRemoveByName = document.querySelector("#removeName");

    btnRemoveByName.addEventListener("click", function () {
        let bookName = document.querySelector("#removeByName").value;
        let result = lib.removeBookByName(bookName);
        info.innerHTML = result;
    });


    let btnShowByAuthor = document.querySelector("#showAuthor");

    btnShowByAuthor.addEventListener("click", function () {
        let bookAuthor = document.querySelector("#showByAuthor").value;
        let result = lib.showBooksByAuthor(bookAuthor);
        info.innerHTML = result;
    });
});





