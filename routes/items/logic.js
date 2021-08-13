
/*********************************
 * * /items/logic.js - Functions that communicate with the server only.
 *********************************/
"use strict";

const dataQueries = require("./data-queries");

/*********************************
 * * getItems() - getting all items from DB(data queries file function)
 *********************************/

function getItems(query, callback) {
  dataQueries.selectItems(query, items => callback(items));
}

function createItem(item, callback) {
  dataQueries.insertItem(item, callback);
}

module.exports = {
  getItems,
  createItem,
};
