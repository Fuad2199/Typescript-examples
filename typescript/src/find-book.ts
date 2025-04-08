// Example optional chaining and type of union for simple find book.

const books = ['1984', 'Brave New World', 'Farenheit 451'];

let foundBook: string | undefined;

for (let book of books) {
    if (book === '1984') { 
        foundBook = book;

        foundBook = foundBook.toUpperCase()
        break;
    }
}

console.log(foundBook?.length)
