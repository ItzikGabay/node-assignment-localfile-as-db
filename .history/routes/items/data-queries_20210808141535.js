/**
 * * /items/data-queries.js - Functions that communicate with the DB only.
 **/

/*********************************
 * * insert() - Insert data to specific table
 *********************************/
"use strict";

// Static table name
const tableName = "items";
const DatabaseDriver = require("../../middleware/database/index")

// Getting info from DB
function select() {
  return DatabaseDriver.select(tableName);
}

module.exports = {
  select
};