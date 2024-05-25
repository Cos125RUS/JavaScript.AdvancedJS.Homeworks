'use strict'

import { initialData } from "./initialData.js";

const containerEl = document.querySelector('.container');
let lastId = initialData.length;

/**
 * Создать карточку товара
 * @param {*} product информация о товаре
 * @returns HTML-элемент с карточкой товара
 */
const createCard = (product) => {
    const elementBox = document.createElement('div');
    elementBox.className = product.product.replaceAll(' ', '_').toLowerCase();
    elementBox.classList.add('product__box');
    elementBox.addEventListener('click', () => redraw(product));

    const titleEl = document.createElement('h1');
    titleEl.classList.add('product_title');
    titleEl.innerText = product.product;
    elementBox.appendChild(titleEl);

    const imgEl = document.createElement('img');
    imgEl.classList.add('product__img');
    imgEl.src = `./img/${product.product}.jpg`;
    elementBox.appendChild(imgEl);

    return elementBox;
}

/**
 * Перерисовать страницу для отображения информации по выбранному товару
 * @param {*} product информация о товаре
 */
const redraw = (product) => {
    containerEl.innerHTML = '';

    const boxEl = document.createElement('div');
    boxEl.classList.add('box');
    boxEl.appendChild(createCard(product));

    const entryFormEl = document.createElement('form');
    entryFormEl.classList.add('entry_form');

    const inputEl = document.createElement('textarea');
    inputEl.classList.add('input');
    inputEl.setAttribute('type', 'text');
    entryFormEl.appendChild(inputEl);

    const btnEl = document.createElement('button');
    btnEl.classList.add('btn');
    btnEl.innerText = "Enter";
    entryFormEl.appendChild(btnEl);
    btnEl.addEventListener('click', function (e) {
        e.preventDefault();
        try {
            const newId = saveReview(product, inputEl.value);
            reviewsBox.appendChild(addReview(newId, inputEl.value));
            inputEl.classList.toggle('error');
        } catch (error) {
            inputEl.classList.add('error');
            alert(error.message);
        }
    });

    boxEl.appendChild(entryFormEl);

    const reviewsBox = document.createElement('div');
    reviewsBox.classList.add('review__box');
    product.reviews.forEach(review => reviewsBox.appendChild(addReview(review.id, review.text)));
    boxEl.appendChild(reviewsBox);

    containerEl.appendChild(boxEl);
}

/**
 * Добавить новый отзыв на страницу
 * @param {*} id идентификатор нового отзыва
 * @param {*} text новый отзыв
 * @returns HTML-элемент с отзывом
 */
const addReview = (id, text) => {
    const reviewEl = document.createElement('p');
    reviewEl.classList.add(`review-${id}`);
    reviewEl.classList.add(`review`);
    reviewEl.textContent = text;
    return reviewEl;
}

/**
 * Сохранить новый отзыв в массиве
 * @param {*} product данные о товаре
 * @param {*} text новый отзыв
 * @returns id нового отзыва
 */
const saveReview = (product, text) => {
    checkReview(text);
    const newId = ++lastId;
    const index = initialData.indexOf(product);
    initialData[index].reviews.push({id: `${newId}`, text: text});
    console.log(initialData);
    return newId;
}

const checkReview = (text) => {
    if (text.length > 500 || text.length < 50) throw new Error('Длина должна быть не менее 50 и не более 500 символов');
}

/**
 * Отрисовка шлавной страницы
 */
const drawIndex = () => {
    initialData.forEach(product => containerEl.appendChild(createCard(product)));
}

/**
 * Стартовая загрузка страницы
 */
document.addEventListener('DOMContentLoaded', function (e) {
    drawIndex();
});