'use strict';
const itemsDataQueries = require("./data-queries");

function getItems() {
    
    return itemsDataQueries.select()
}

module.exports = {
    getItems,
}