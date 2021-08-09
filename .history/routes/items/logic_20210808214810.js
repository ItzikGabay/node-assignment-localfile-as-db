
/*********************************
 * * /items/logic.js - Functions that communicate with the server only.
 *********************************/

"use strict";

const dataQueries = require("./data-queries");

function getItems() {
  return itemsDataQueries.select();
}

module.exports = {
  getItems,
};
