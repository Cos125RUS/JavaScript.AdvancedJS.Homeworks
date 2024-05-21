'use strict'

const { Restaurant } = require('./restaurant');

let restaurant = null;

const cooks = new Map().set('Виктор', new Set()).set('Ольга', new Set()).set('Дмитрий', new Set());
cooks.get('Виктор').add('Пицца "Маргарита"').add('Пицца "Пепперони"');
cooks.get('Ольга').add('Суши "Филадельфия"').add('Суши "Калифорния"');
cooks.get('Дмитрий').add('Тирамису').add('Чизкейк');

const tables = new Map();
for (let index = 0; index < 3; index++) {
    tables.set(index + 1, []);
}

describe('constructorTests', () => {
    test('clear constructor', () => {
        restaurant = new Restaurant();
        expect(restaurant.cooks.size).toBe(0);
        expect(restaurant.tables.size).toBe(0);
    });

    test('construct with cooks in args', () => {
        restaurant = new Restaurant(cooks);
        expect(restaurant.cooks.size).toBe(3);
        expect(restaurant.tables.size).toBe(0);
    });

    test('construct with cooks and tables in args', () => {
        restaurant = new Restaurant(cooks, tables);
        expect(restaurant.cooks.size).toBe(3);
        expect(restaurant.tables.size).toBe(3);
    });
});

describe('addCookTest', () => {
    beforeEach(() => {
        restaurant = new Restaurant();
    });

    test('add cook', () => {
        restaurant.addCook('Виктор');
        expect(restaurant.cooks.size).toBe(1);
        expect(restaurant.cooks.keys().next().value).toEqual('Виктор');
        expect(restaurant.cooks.get('Виктор').size).toBe(0);
    });

    test('add cook and dishes', () => {
        restaurant.addCook('Ольга', ['Суши "Калифорния"', 'Суши "Филадельфия"']);
        expect(restaurant.cooks.size).toBe(1);
        expect(restaurant.cooks.keys().next().value).toEqual('Ольга');
        expect(restaurant.cooks.get('Ольга').size).toBe(2);
        expect(restaurant.cooks.get('Ольга').has('Суши "Калифорния"')).toEqual(true);
        expect(restaurant.cooks.get('Ольга').has('Суши "Филадельфия"')).toEqual(true);
    });
});

describe('addTableTests', () => {
    beforeEach(() => {
        restaurant = new Restaurant();
    });

    test('add table', () => {
        restaurant.addTable(1);
        restaurant.addTable(2);
        expect(restaurant.tables.size).toBe(2);
        expect(restaurant.tables.get(1).length).toBe(0);
    });
});

describe('addOrderTests', () => {
    beforeAll(() => {
        restaurant = new Restaurant(cooks, tables);
    });

    test('add order', () => {
        restaurant.addOrder(1, ['Пицца "Пепперони"']);
        restaurant.addOrder(2, ['Суши "Калифорния"', 'Пицца "Маргарита"']);
        expect(restaurant.tables.get(1).length).toBe(1);
        expect(restaurant.tables.get(2).length).toBe(2);
        expect(restaurant.tables.get(1)[0]).toEqual('Пицца "Пепперони"');
        expect(restaurant.tables.get(2)[0]).toEqual('Суши "Калифорния"');
        expect(restaurant.tables.get(2)[1]).toEqual('Пицца "Маргарита"');
    });
});