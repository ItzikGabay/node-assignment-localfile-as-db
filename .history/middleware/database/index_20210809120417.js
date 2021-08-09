
/*********************************
 * * /middleware/database/index.js - Functions of the DB.
 *********************************/
"use strict";

let errorMessage = "No such table.";

/*********************************
 * * Fake data - local database
 *********************************/

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

/*********************************
 * * Select() - Get data of specific table
 *********************************/

function select(tableName) {
  if (!db[tableName]) {
    msg: errorMessage;
  }
  return JSON.parse(JSON.stringify(db[tableName]));
}

/*********************************
 * * insert() - Insert data to specific table
 *********************************/

function insert(tableName) {
  if (!db[tableName]) {
    msg: error;
  }

  item.id = new Date().getTime();
  db[tableName].push(item);
  return item;
}

/*********************************
 * * remove() - Insert data to specific table
 *********************************/
function remove(tableName, id) {
    if (!db[tableName]) {
      msg: error;
    }
  
  const rows = select(tableName);
  db[tableName] = rows.filter(row => row.id !== id);

}

function update(tableName, itemID, newItem) {
    if (!db[tableName]) {
      msg: error;
    }
  
  const rows = db[tableName];
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].id === itemId) {
      rows[i] = item;
      return;
    }
  }
}


module.exports = {
  select,
  insert,
  remove,
  update
};
