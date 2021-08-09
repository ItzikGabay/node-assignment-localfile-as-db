/**
 * * /middleware/database/index.js - Functions of the DB.
 **/

"use strict";

let errorMessage = "No such table.";

// Fake data - local database
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

/**
 * * Select() - Get data of specific table in the data
 **/
function select(tableName) {
  if (!db[tableName]) {
    msg: errorMessage;
  }
  return JSON.parse(JSON.stringify(db[tableName]));
}

function remove(tableName, id) {
    console.log('hey');
}



module.exports = {
  select, remove
};
