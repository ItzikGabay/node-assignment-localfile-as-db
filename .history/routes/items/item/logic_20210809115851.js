/*********************************
 * * /items/logic.js - Functions that communicate with the server only.
 *********************************/
"use strict";

const dataQueries = require("./data-queries");

/*********************************
 * * getItems() - getting all items from DB(data queries file function)
 *********************************/

function getItem(id) {
  return dataQueries.select(id);
}

function updateItem(id, item) {
  return dataQueries.updateItem(item)
}

module.exports = {
  getItem,
  updateItem
};
