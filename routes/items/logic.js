
/*********************************
 * * /items/logic.js - Functions that communicate with the server only.
 *********************************/
"use strict";

const dataQueries = require("./data-queries");

/*********************************
 * * getItems() - getting all items from DB(data queries file function)
 *********************************/

function getItems(query) {
  return dataQueries.selectItems(query);
}

function createItem(item) {
    return dataQueries.insertItem(item);
}

module.exports = {
  getItems,
  createItem,
};
