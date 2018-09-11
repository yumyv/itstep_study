window.addEventListener("load", function () {
    function Library() {
        this.books = [];

        this.add = function (book) {
            this.books.push(book)
        };

        this.removeBookByIndex = function (index) {
            for (let i = 0; i < this.books.length; i++) {
                if (i === index) {
                    this.books.splice(i, 1);
                    return this.books;
                }
            }
        };

        this.removeBookByName = function (name) {
            for (let i = 0; i < this.books.length; i++) {
                if (this.books[i].bookName === name) {
                    this.books.splice(this.books[i], 1);
                    return this.books;
                }
            }
        };

        this.showBooks = function () {
            let result = "";
            for (let i = 0; i < this.books.length; i++) {
                result += i + ": " + this.books[i].bookName + "\n";
            }
            return result;
        };

        this.showBookByIndex = function (index) {
            let result = "";
            for (let i = 0; i < this.books.length; i++) {
                if (i === index) result = i + ": " + this.books[i].bookName + "\n";
            }
            return result;
        };

        this.showBooksByAuthor = function (author) {
            let result = "";
            for (let i = 0; i < this.books.length; i++) {
                if (this.books[i].author === author) {
                    for (let j = 0; j < this.books.length; j++) {
                        if (this.books[i].bookName === this.books[j].bookName) result += i + ": " + this.books[i].bookName + "\n";
                    }
                }
            }
            return result;
        }
    }


    function Book(bookName, author, year) {
        this.bookName = bookName;
        this.author = author;
        this.year = year;

        this.showHTML = function () {
            return `
            <div>
                <div class="bookName">${this.bookName}</div>
                <div class="author">${this.author}</div>
                <div class="year">${this.year}</div>
            </div>
        `
        }
    }


    let info = document.querySelector("#info");

    let bookName = document.querySelector("#bookName");
    let author = document.querySelector("#author");
    let year = document.querySelector("#year");
    let btnAddBook = document.querySelector("#addBook");

    btnAddBook.addEventListener("click", function () {
        let book = new Book(bookName, author, year);
        let lib = new Library().add(book);
    });

    let bookIndex = document.querySelector("#bookByIndex");
    let btnBookIndex = document.querySelector("#bookIndex");

    //////////////////////
    btnBookIndex.addEventListener("click", function () {
        let text = bookIndex.value;
        info.innerHTML = text;
    });
    ////////////////////////
});





