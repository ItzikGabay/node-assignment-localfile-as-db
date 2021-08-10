/*********************************
 * * /items/data-queries.js - Functions that communicate with the DB only.
 *********************************/

"use strict";

// Static table name
const tableName = "items";
const database = require("../../middleware/database/index");

// Getting info from DB
function selectItems(query) {
  let items = database.select(tableName);
  if (!!query.priceIsGreater) {
    items = items.filter((item) => item.price >= query.priceIsGreater);
  }
  if (!!query.priceIsLower) {
    items = items.filter((item) => item.price <= query.priceIsLower);
  }
  return items;
}

// Inserting to DB
function insertItem(item) {
  return database.insert(tableName, item);
}

module.exports = {
  selectItems,
  insertItem,
};
