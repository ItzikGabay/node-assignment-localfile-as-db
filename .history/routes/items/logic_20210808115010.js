'use strict';
const itemsDataQueries = require("./data-queries");

function getItems() {
    return itemsDataQueries.se
}

module.exports = {
    getItems,
}