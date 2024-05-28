'use strict'
/**
 * Реализация через класс Restaurant
 */

const { Restaurant } = require('./restaurant');

const restaurant = new Restaurant();

restaurant.addCook('Виктор');
restaurant.addDish('Виктор', 'Пицца "Маргарита"');
restaurant.addDish('Виктор', 'Пицца "Пепперони"');
restaurant.addCook('Ольга', ['Суши "Калифорния"', 'Суши "Филадельфия"']);
restaurant.addCook('Дмитрий', ['Тирамису', 'Чизкейк']);

for (let index = 0; index < 3; index++) {
    restaurant.addTable(index + 1);
}

restaurant.addOrder(1, ['Пицца "Пепперони"']);
restaurant.addOrder(2, ['Суши "Калифорния"', 'Пицца "Маргарита"']);
restaurant.addOrder(3, ['Чизкейк']);

console.log(restaurant);
console.log(restaurant.cooks.get('Ольга'));