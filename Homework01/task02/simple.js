'use strict'

const specializations = new Map().set('Виктор', new Set()).set('Ольга', new Set()).set('Дмитрий', new Set());
const orders = new Map();

specializations.get('Виктор').add('Пицца "Маргарита"').add('Пицца "Пепперони"');
specializations.get('Ольга').add('Суши "Филадельфия"').add('Суши "Калифорния"');
specializations.get('Дмитрий').add('Тирамису').add('Чизкейк');

orders.set('table#1', new Set().add('Пицца "Пепперони"'));
orders.set('table#2', new Set().add('Суши "Калифорния"').add('Пицца "Маргарита"'));
orders.set('table#3', new Set().add('Чизкейк'));

console.log(specializations);
console.log(orders);