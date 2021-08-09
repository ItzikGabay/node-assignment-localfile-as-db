'use strict';

// Static table name
const tableName = 'items';

// Fake data
const db = {
    items: {
        [
            { id: 1, price: 10, text: 'phone' },
            { id: 1, price: 10, text: 'phone' }
        ]
    }
}

function select() {

}

module.exports = {
    select,
}