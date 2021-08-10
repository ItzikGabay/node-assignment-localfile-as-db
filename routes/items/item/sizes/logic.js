/*********************************
 * * /items/sizes/logic.js - Functions that communicate with the server only.
 *********************************/
"use strict";

const dataQueries = require("./data-queries");

/*********************************
 * * getSizes() - getting all items from DB(data queries file function)
 *********************************/
function getSizes(itemID) {
    return dataQueries.selectSizes(itemID);
}

function updateSize(id, item) {
  return dataQueries.updateSizes(id, item);
}

module.exports = {
  getSizes,
  updateSize
};