/*********************************
 * * /item/data-queries.js - Functions that communicate with the DB only.
 *********************************/

"use strict";

// Static table name
const tableName = "items";
const database = require("../../../middleware/database/index")

// Getting info from DB
function selectItem(id) {
  return database.select(tableName, id);
}

// Inserting to DB
function updateItem(id, item) {
  return database.update(tableName, id, item);
}

// Removing from DB
function deleteItem(id) {
  return database.remove(tableName, id);
}

module.exports = {
  selectItem,
  updateItem,
  deleteItem,
};