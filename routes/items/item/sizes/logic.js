/*********************************
 * * /items/sizes/logic.js - Functions that communicate with the server only.
 *********************************/
"use strict";

const dataQueries = require("./data-queries");

/*********************************
 * * getSizes() - getting all items from DB(data queries file function)
 *********************************/
function getSizes(itemID) {
    return dataQueries.selectSizes(itemID);
}

module.exports = {
    getSizes
}