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

function updateSize(id, item) {
  return dataQueries.updateSizes(id, item);
}

function insertSizes(id, item) {
  return dataQueries.insertSizes(id, item);
}

function removeSize(id, item) {
  return dataQueries.deleteSize(id, item);
}

module.exports = {
  getSizes,
  updateSize,
  removeSize,
  insertSizes,
};