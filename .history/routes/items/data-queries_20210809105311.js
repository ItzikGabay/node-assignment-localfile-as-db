
/*********************************
 * * /items/data-queries.js - Functions that communicate with the DB only.
 *********************************/

"use strict";

// Static table name
const tableName = "items";
const database = require("../../middleware/database/index")

// Getting info from DB
function selectItems() {
  return database.select(tableName);
}

// Getting info from DB
function insertItem(item) {
  return database.insert(tableName, item);
}

module.exports = {
  select
};