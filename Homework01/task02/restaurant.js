'use strict'

class Restaurant {
    constructor(cooks = new Map(), tables = new Map()) {
        this.cooks = cooks;
        this.tables = tables;
    }

    addCook(name, dishes) {
        this.cooks.set(name, new Set());
        if (dishes) {
            const cookbook = this.cooks.get(name);
            dishes.forEach(dish => cookbook.add(dish));
        }
        return this;
    }

    addDish(name, dish) {
        this.cooks.get(name).add(dish);
    }

    addTable(num) {
        this.tables.set(num, []);
        return this;
    }

    addOrder(num, order) {
        order.forEach(dish => {
            this.tables.get(num).push(dish);
        });
    }
}

module.exports = { Restaurant };
