/*********************************
 * * /items/sizes/logic.js - Functions that communicate with the server only.
 *********************************/
"use strict";

const dataQueries = require("./data-queries");

/*********************************
 * * getSizes() - getting all items from DB(data queries file function)
 *********************************/
function getSizes(itemID, callback) {
  dataQueries.selectSizes(itemID, callback);
}

function updateSize(id, item, callback) {
  dataQueries.updateSizes(id, item, callback);
}

function insertSizes(id, item, callback) {
  dataQueries.insertSizes(id, item, callback);
}

function removeSize(id, item, callback) {
  dataQueries.deleteSize(id, item, callback);
}

module.exports = {
  getSizes,
  updateSize,
  removeSize,
  insertSizes,
};