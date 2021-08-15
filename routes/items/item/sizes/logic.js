/*********************************
 * * /items/sizes/logic.js - Functions that communicate with the server only.
 *********************************/
"use strict";

const dataQueries = require("./data-queries");

/*********************************
 * * getSizes() - getting all items from DB(data queries file function)
 *********************************/
async function getSizes(itemID, callback) {
  const result = await dataQueries.selectSizes(itemID, callback);
  return result;
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