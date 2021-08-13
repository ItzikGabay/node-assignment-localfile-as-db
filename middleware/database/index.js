
/*********************************
 * * /middleware/database/index.js - Functions of the DB.
 *********************************/
"use strict";

const fs = require("fs").promises
let errorMessage = "No such table.";

/*********************************
 * * Fake data - local database
 *********************************/


/*********************************
 * * Select() - Get data of specific table
 *********************************/

function select(tableName, id, callback) {
  return _readFile().then(db => {
    if (!db[tableName]) {
      msg: errorMessage;
    }

    let arr = db[tableName];
    if (id) {
      arr = _searchById(arr, id);
    }
    return arr;
  })
}

/*********************************
 * * insert() - Insert data to specific table
 *********************************/

function insert(tableName, item) {
  return _readFile()
    .then(db => {
    if (!db[tableName]) {
      msg: errorMessage;
    }

    item.id = new Date().getTime();
    db[tableName].push(item);
      _writeFile(db)
        return item;
  })
}


/*********************************
 * * remove() - Insert data to specific table
 *********************************/
function remove(tableName, id, item, callback) {
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
    db[tableName] = rows;
    _writeFile(db);
    callback(db[tableName]);
  }
}

function update(tableName, itemID, newItem, callback) {

  _readFile((db) => {
    if (!db[tableName]) {
      msg: error;
    }

    const rows = db[tableName];
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].id === itemID) {
        if (Object.keys(newItem)[0] === "sizes" || Object.keys(newItem)[0] === "size") {
          Object.assign(rows[i].size, newItem.sizes);
          _writeFile(db);
          callback(rows[i].size);
        } else {
          Object.assign(rows[i], newItem);
          _writeFile(db);
          callback(rows[i]);
        }
        // rows[i] = newItem;
      }
    }
  })
}

/*********************************
 * * selectById() - Insert data to specific table
 *********************************/
function _searchById(arr, id) {
  let result = arr.filter((item) => item.id === id);
  return result;
}

function _readFile() {
    return fs.readFile(__dirname + "/db.txt", { encoding: "utf8", flag: "r" })
      .then(db => JSON.parse(db))
      .catch(err => console.error(err))
}

function _writeFile(db) {
  db = JSON.stringify(db);
  return fs.writeFile(__dirname + "/db.txt", db)
    .catch(err => console.log(err) )
}

 
module.exports = {
  select,
  insert,
  remove,
  update,
};
