/*********************************
 * * /middleware/database/index.js - Functions of the DB.
 *********************************/
"use strict";

const fs = require("fs").promises;
let errorMessage = "No such table.";

/*********************************
 * * Select() - Get data of specific table
 *********************************/

async function select(tableName, id) {
  let db = await _readFile();
  
  if (!db) db.msg;
  if (id) {
    db = _searchById(db, id);
  }
  return db;
}

/*********************************
 * * insert() - Insert data to specific table
 *********************************/

async function insert(tableName, item) {

  // get data
  const db = await select(tableName);
  
  // push id to new item
  item.id = new Date().getTime();
  // push new item to array
  db.push(item);
  // save the changes
  _writeFile(db);
  // return the data
  return 'inserted sucessfully!'
}

/*********************************
 * * remove() - Insert data to specific table
 *********************************/
async function remove(tableName, id, item) {

  // get data
  let db = await select(tableName);

  if (!item) db = db.filter((row) => row.id !== id);

  if (item) {
    let currentItem = db[id];
    for (let i = 0; i < db.length; i++) {
      if (db[i].id == id) {
        for (let j = 0; j < item.length; j++) {
          let ind = item[j];
          delete db[i].size[ind];
        }
        break;
      }
    }
  }

  _writeFile(db);
  return 'Deleted sucessfully'

}

/*********************************
 * * update() - Update data to specific table
 *********************************/

async function update(tableName, itemID, newItem) {

  const db = await _readFile()
    
    if (!db[tableName]) {
      msg: errorMessage;
    }

    const rows = db;
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].id === itemID) {
        if (
          Object.keys(newItem)[0] === "sizes" ||
          Object.keys(newItem)[0] === "size"
        ) {
          Object.assign(rows[i].size, newItem.sizes);
        } else {
          Object.assign(rows[i], newItem);
        }
      }
    }
  const result = await _writeFile(db);
  return ` ${itemID} Updated sucessfully`;
}

/*********************************
 * * selectById() - Insert data to specific table
 *********************************/
function _searchById(arr, id) {
  let result = arr.filter((item) => item.id === id);
  return result;
}

/*********************************
 * * readFile() - Read data from specific file, return it as JSON
 *********************************/

async function _readFile() {
  let db = [];
  try {
    db = await fs.readFile(__dirname + "/db.txt", {
      encoding: "utf8",
      flag: "r",
    });
    db = JSON.parse(db);
    return db;
  } catch (err) {
    return {
      msg: err
    }
  }
}

/*********************************
 * * writeFile() - Insert data to specific table
 *********************************/

async function _writeFile(db) {
  db = JSON.stringify(db);
  await fs.writeFile(__dirname + "/db.txt", db);
  return db;
}

/*********************************
 * * exports
 *********************************/

module.exports = {
  select,
  insert,
  remove,
  update,
};