/**
 * * /middleware/database/index.js - Functions that communicate with the DB only.
 **/

"use strict";

// Static table name
const tableName = "items";
let errorMessage = "No such table.";

// Fake data
const db = {
  items: [
    { id: 1, price: 10, text: "phone" },
    { id: 2, price: 333, text: "wallet" },
    { id: 3, price: 345, text: "car" },
    { id: 4, price: 42, text: "massage" },
    { id: 5, price: 126, text: "computer" },
    { id: 6, price: 96, text: "mouse" },
    { id: 7, price: 654, text: "screen" },
  ],
};

// Getting info from DB
function select(tableName) {
  if (!db[tableName]) {
    msg: errorMessage;
  }
  return JSON.parse(JSON.stringify(db[tableName]));
}

function remove(id) {}

module.exports = {
  select,
};
