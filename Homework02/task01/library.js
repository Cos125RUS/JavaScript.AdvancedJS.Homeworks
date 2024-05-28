'use strict'

/**
 * Библиотека для работы с книгами
 */
class Library {
    /**
     * Список книг, хранимых в библиотеке
     */
    #books = [];

    constructor(books) {
        if (new Set(books).size !== books.length) throw new Error('Duplicates are not allowed')
        this.#books = books;
    }

    // get books() { return this.#books; }
    // set books(books) { this.#books = books; }

    /**
     * Добавить внигу в библиотеку
     * @param {*} title название книги
     */
    addBook(title) {
        if (this.#books.indexOf(title) !== -1) throw new Error('Book already present');
        this.#books.push(title);
    }

    /**
     * Получить список всех книг библиотеки
     * @returns список книг
     */
    allBooks() {
        return this.#books;
    }

    /**
     * Удалить книгу из библиотеки
     * @param {*} title название книги
     */
    removeBook(title) {
        if (this.#books.indexOf(title) === -1) throw new Error('Book not present');
        this.#books.splice(this.#books.indexOf(title), 1);
    }

    /**
     * Проверка наличия книги в библиотеке
     * @param {*} title название книги 
     * @returns булевое значение
     */
    hasBook(title) {
        return this.#books.indexOf(title) !== -1;
    }
}

module.exports = { Library };