
/*********************************
 * * /items/logic.js - Functions that communicate with the server only.
 *********************************/

"use strict";

const dataQueries = require("./data-queries");


/*********************************
 * * getItems() - getting all items from DB
 *********************************/
function getItems() {
  return dataQueries.select();
}

module.exports = {
  getItems,
};
