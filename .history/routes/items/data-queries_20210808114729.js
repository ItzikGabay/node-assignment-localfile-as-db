'use strict';

// Static table name
const tableName = 'items';

// Fake data
const db = {
    items: 
        [
            { id: 1, price: 10, text: 'phone' },
            { id: 2, price: 10, text: 'wallet' },
            { id: 3, price: 10, text: 'car' },
            { id: 4, price: 10, text: 'massage' },
            { id: 5, price: 10, text: 'phone' },
            { id: 6, price: 10, text: 'phone' },
            { id: 7, price: 10, text: 'phone' }
        ]
};

function select() {
    console.log('hey');
}

module.exports = {
    select,
}