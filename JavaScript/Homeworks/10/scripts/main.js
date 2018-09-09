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

///////////////////////////////////////////////


let bla = new Book("super", "yurii", 1995);
let bla1 = new Book("notsuper", "notyurii", 2000);
let lib = new Library();
lib.add(bla);
lib.add(bla1);


console.log(lib.showBooksByAuthor());


let test = ["ant", 2, 3, 4, 5, 6];


function f(author, library) {
    let result = "";
    for (let i = 0; i < library.books.length; i++) {
        if (library.books[i].author === author) {
            for (let j = 0; j < library.books.length; j++) {
                if (library.books[i].bookName === library.books[j].bookName) result += i + ": " + library.books[i].bookName + "\n";
            }
        }
    }
    return result;
}

console.log(f("super", lib));