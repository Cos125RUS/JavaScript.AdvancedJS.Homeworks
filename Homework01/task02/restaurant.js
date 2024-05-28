'use strict'

/**
 * Ресторан
 */
class Restaurant {
    constructor(cooks = new Map(), tables = new Map()) {
        this.cooks = cooks;
        this.tables = tables;
    }

    /**
     * Добавление нового шеф-повара
     * @param {*} name имя повара
     * @param {*} dishes блюда, которые умеет готовить шеф
     * @returns обновлённый ресторан
     */
    addCook(name, dishes) {
        this.cooks.set(name, new Set());
        if (dishes) {
            const cookbook = this.cooks.get(name);
            dishes.forEach(dish => cookbook.add(dish));
        }
        return this;
    }

    /**
     * Добавить новое блюдо в список навыков шеф-повара
     * @param {*} name имя повара
     * @param {*} dish название нового блюда
     */
    addDish(name, dish) {
        this.cooks.get(name).add(dish);
    }

    /**
     * Добавить столик ресторана
     * @param {*} num номер стола
     * @returns обновлённый ресторан
     */
    addTable(num) {
        this.tables.set(num, []);
        return this;
    }

    /**
     * Добавление заказов
     * @param {*} num номер стола
     * @param {*} order заказ в виде массива с названиями блюд
     */
    addOrder(num, order) {
        order.forEach(dish => {
            this.tables.get(num).push(dish);
        });
    }
}

module.exports = { Restaurant };
