/*********************************
 * * /item/sizes/data-queries.js - Functions that communicate with the DB only.
 *********************************/

"use strict";

const database = require("../../../../middleware/database/index");

// table name
const tableName = "items";


async function selectSizes(itemID, callback) {
  const items = await database.select(tableName, itemID)
  return items[0].size
}

// Inserting to DB
function updateSizes(id, item, callback) {
  database.update(tableName, id, item, callback);
}

// Inserting to DB
function insertSizes(id, item, callback) {
  database.update(tableName, id, item, callback);
}

// Inserting to DB
function deleteSize(id, item, callback) {
  database.remove(tableName, id, item, callback);
}

module.exports = {
  selectSizes,
  updateSizes,
  deleteSize,
  insertSizes,
};
