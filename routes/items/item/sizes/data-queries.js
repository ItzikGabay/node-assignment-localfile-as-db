/*********************************
 * * /item/sizes/data-queries.js - Functions that communicate with the DB only.
 *********************************/

"use strict";

const database = require("../../../../middleware/database/index");

// table name
const tableName = "items";


function selectSizes(itemID) {
  const items = database.select(tableName, itemID);
  return items[0].size;
  // return items[0].size
}

// Inserting to DB
function updateSizes(id, item) {
  return database.update(tableName, id, item);
}

module.exports = {
  selectSizes,
  updateSizes,
};
