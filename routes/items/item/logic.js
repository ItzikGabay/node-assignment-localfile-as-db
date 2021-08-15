/*********************************
 * * /items/logic.js - Functions that communicate with the server only.
 *********************************/
"use strict";

const dataQueries = require("./data-queries");

/*********************************
 * * getItems() - getting all items from DB(data queries file function)
 *********************************/

function getItem(id) {
  return dataQueries.selectItem(id);
}

function updateItem(id, item, callback) {
  return dataQueries.updateItem(id, item, callback);
}

function removeItem(id, callback) {
  return dataQueries.deleteItem(id, callback);
}

module.exports = {
  getItem,
  updateItem,
  removeItem
};
