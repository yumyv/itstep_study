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


    ///////////
    btnBookIndex.addEventListener("click", function () {
        let bookIndex = document.querySelector("#bookByIndex").value;
        let result = lib.showBookByIndex(bookIndex);
        info.innerHTML = result;
    });
    ///////////


    let btnRemoveByIndex = document.querySelector("#removeIndex");


    ///////////
    btnRemoveByIndex.addEventListener("click", function () {
        let bookIndex = document.querySelector("#removeByIndex").value;
        let result = lib.removeBookByIndex(bookIndex);
        info.innerHTML = result;
    });
    //////////

    //////////
    let btnRemoveByName = document.querySelector("#removeName");

    btnRemoveByName.addEventListener("click", function () {
        let bookName = document.querySelector("#removeByName").value;
        let result = lib.removeBookByName(bookName);
        info.innerHTML = result;
    });
    //////////////

    /////////////
    let btnShowByAuthor = document.querySelector("#showAuthor");

    btnShowByAuthor.addEventListener("click", function () {
        let bookAuthor = document.querySelector("#showByAuthor").value;
        let result = lib.showBooksByAuthor(bookAuthor);
        info.innerHTML = result;
    });
    /////////////
});





