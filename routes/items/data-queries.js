/*********************************
 * * /items/data-queries.js - Functions that communicate with the DB only.
 *********************************/

"use strict";

// Static table name
const tableName = "items";
const database = require("../../middleware/database/index");


/*********************************
 * * selectItems() - Getting info from DB
 *********************************/

async function selectItems(query) {
  let items = await database.select(tableName)
    if (!!query.priceIsGreater) {
      items = items.filter((item) => item.price >= query.priceIsGreater);
    }
    if (!!query.priceIsLower) {
      items = items.filter((item) => item.price <= query.priceIsLower);
    }
    return items;
}

/*********************************
 * * insertItem() - Inserting info to DB
 *********************************/

function insertItem(item) {
  return database.insert(tableName, item)
}

/*********************************
 * * exports
 *********************************/

module.exports = {
  selectItems,
  insertItem,
};
