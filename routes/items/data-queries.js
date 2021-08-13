/*********************************
 * * /items/data-queries.js - Functions that communicate with the DB only.
 *********************************/

"use strict";

// Static table name
const tableName = "items";
const database = require("../../middleware/database/index");

// Getting info from DB
function selectItems(query, callback) {
  database.select(tableName, undefined, items => {
    if (!!query.priceIsGreater) {
      items = items.filter((item) => item.price >= query.priceIsGreater);
    }
    if (!!query.priceIsLower) {
      items = items.filter((item) => item.price <= query.priceIsLower);
    }
    callback(items);
  });
}

// Inserting to DB
function insertItem(item, callback) {
  database.insert(tableName, item, result => {
    callback(result)
  });
}

module.exports = {
  selectItems,
  insertItem,
};
