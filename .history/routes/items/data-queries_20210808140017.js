/**
 * * /items/data-queries.js - Functions that communicate with the DB only.
 **/
"use strict";

// Static table name
const tableName = "items";

// Getting info from DB
function select(tableName) {
  if (!db[tableName]) {
    msg: errorMessage;
  }
  return JSON.parse(JSON.stringify(db[tableName]));
}

module.exports = {
  select,
};