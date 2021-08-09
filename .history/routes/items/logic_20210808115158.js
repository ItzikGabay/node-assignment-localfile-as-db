'use strict';
const itemsDataQueries = require("./data-queries");

function getItems() {
    // return 'hello'
    return itemsDataQueries.select();
}

module.exports = {
    getItems,
}