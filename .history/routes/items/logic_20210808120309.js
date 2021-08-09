/**
 * * /items/logic.js - Functions that communicate with the server only.
 **/

"use strict";
const itemsDataQueries = require("./data-queries");


function getItems() {
  // return 'hello'
  return itemsDataQueries.select();
}

module.exports = {
  getItems,
};
