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
  return database.insert(tableName,id, item);
}

module.exports = {
  selectItem,
  insertItem,
};