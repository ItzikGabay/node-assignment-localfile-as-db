
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
    {
      id: 1,
      price: 10,
      text: "phone",
      size: { width: 10, height: 10, depth: 10 },
    },
    {
      id: 2,
      price: 333,
      text: "wallet",
      size: { width: 440, height: 550, depth: 220 },
    },
    {
      id: 3,
      price: 345,
      text: "car",
      size: { width: 10, height: 20, depth: 10 },
    },
    {
      id: 4,
      price: 42,
      text: "massage",
      size: { width: 10, height: 10, depth: 10 },
    },
    {
      id: 5,
      price: 126,
      text: "computer",
      size: { width: 10, height: 10, depth: 10 },
    },
    { id: 6, price: 96, text: "mouse" },
    { id: 7, price: 654, text: "screen" },
  ],
};

/*********************************
 * * Select() - Get data of specific table
 *********************************/

function select(tableName, id) {
  if (!db[tableName]) {
    msg: errorMessage;
  }
  let arr = JSON.parse(JSON.stringify(db[tableName]));
  if (id) {
    arr = _searchById(arr, id)
  }
  return arr
}

/*********************************
 * * insert() - Insert data to specific table
 *********************************/

function insert(tableName, item) {
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
function remove(tableName, id, item) {
  if (!db[tableName]) {
    msg: error;
  }
  
// ['width', 'height']
  const rows = select(tableName);
  if (!item) db[tableName] = rows.filter((row) => row.id !== id);
  if (item) {
    let currentItem = rows[id];
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].id == id) {
            for (let j = 0; j < item.length; j++) {
              let ind = item[j];
              delete rows[i].size[ind];
            }
        break;
      }
    }
    db[tableName] = rows
  }
}

function update(tableName, itemID, newItem) {
    if (!db[tableName]) {
      msg: error;
    }
  
  const rows = db[tableName];
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].id === itemID) {
      if (Object.keys(newItem)[0] === 'sizes') {
        return Object.assign(rows[i].size, newItem.sizes);
      }
      // rows[i] = newItem;
      return Object.assign(rows[i], newItem);
    }
  }
}

/*********************************
 * * selectById() - Insert data to specific table
 *********************************/
function _searchById(arr, id) {
  let result = arr.filter((item) => item.id === id);
  return result;
}


module.exports = {
  select,
  insert,
  remove,
  update,
};
