'use strict'

const { Library } = require('./library');

let myLib, books, duplicates = null;

describe('constructTests', () => {
    beforeAll(() => {
        books = ["Война и мир", "Отцы и дети", "Мастер и Маргарита"];
        duplicates = ["Война и мир", "Отцы и дети", "Мастер и Маргарита", "Война и мир"];
    });

    test('normal construct test', () => {
        myLib = new Library(books);
        expect(() => myLib.allBooks()).not.toThrow();
    });

    test('bad construct test', () => {
        expect(() => new Library(duplicates)).toThrow();
    });

    test('error message test', () => {
        try {
            new Library(duplicates)
        } catch (e) {
            expect(e.message).toStrictEqual('Duplicates are not allowed');
        }
        expect.assertions(1);
    });
});

describe('allBooksTest', () => {
    beforeAll(() => {
        books = ["Война и мир", "Отцы и дети", "Мастер и Маргарита"];
    });
    
    test('allBooksTest', () => {
        myLib = new Library(books);
        expect(myLib.allBooks()).toStrictEqual(books);
    });
});

describe('addBookTests', () => {
    beforeAll(() => {
        books = ["Война и мир", "Отцы и дети", "Мастер и Маргарита"];
    });

    beforeEach(() => {
        myLib = new Library(books);
    });

    test('normal book add', () => {
        myLib.addBook("Преступление и наказание");
        expect(myLib.allBooks().length).toBe(4);
        expect(myLib.allBooks()[3]).toStrictEqual("Преступление и наказание");
    });

    test('bad book add', () => {
        expect(() => myLib.addBook("Война и мир")).toThrow();
    });

    test('error message test', () => {
        try {
            myLib.addBook("Война и мир");
        } catch (e) {
            expect(e.message).toStrictEqual('Book already present');
        }
        expect.assertions(1);
    });
});

describe('removeBookTest', () => {
    beforeAll(() => {
        books = ["Война и мир", "Отцы и дети", "Мастер и Маргарита"];
    });

    beforeEach(() => {
        myLib = new Library(books);
    });

    test('normal book remove', () => {
        myLib.removeBook("Отцы и дети");
        expect(myLib.allBooks().length).toBe(2);
        expect(myLib.allBooks()[0]).not.toEqual("Отцы и дети");
        expect(myLib.allBooks()[1]).not.toEqual("Отцы и дети");
    });

    test('bad book remove', () => {
        expect(() => myLib.removeBook("Преступление и наказание")).toThrow();
    });

    test('error message test', () => {
        try {
            myLib.removeBook("Преступление и наказание");
        } catch (e) {
            expect(e.message).toStrictEqual('Book not present');
        }
        expect.assertions(1);
    });
});

describe('hasBookTests', () => {
    test('test book presents', () => {
        books = ["Война и мир", "Отцы и дети", "Мастер и Маргарита"];
        myLib = new Library(books);
        expect(myLib.hasBook("Отцы и дети")).toEqual(true);
        expect(myLib.hasBook("Преступление и наказание")).toEqual(false);
    });
});