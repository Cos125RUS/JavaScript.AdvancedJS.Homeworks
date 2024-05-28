'use strict'

const { Library } = require('./library');

const books = ["Война и мир", "Отцы и дети", "Мастер и Маргарита"];

const myLib = new Library(books);
console.log(myLib.allBooks());

myLib.addBook("Евгений Онегин");
console.log(myLib.allBooks());

myLib.removeBook("Отцы и дети");
console.log(myLib.allBooks());
console.log(`The book 'Отцы и дети' ${myLib.hasBook("Отцы и дети") ? '' : "not"} present in library`);

// Отлавливание ошибок
try {
    myLib.removeBook("Отцы и дети");
} catch (error) {
    console.error('Error:', error.message);
}

try {
    myLib.addBook("Евгений Онегин");
} catch (error) {
    console.error('Error:', error.message);
}

try {
    books.push("Война и мир");
    const myLibWithDuplicates = new Library(books);
    console.log(myLibWithDuplicates.allBooks());
} catch (error) {
    console.error('Error:', error.message);
}