/*********************************
 * * /items/sizes/:sizeType/logic.js - Functions that communicate with the server only.
 *********************************/
"use strict";

const sizesDataQueries = require("../data-queries");

function getSize(itemID, query) {
  const sizes = sizesDataQueries.selectSizes(itemID, query);
  const result = {}
  result[query] = sizes[query]
  return result
}

module.exports = {
  getSize,
};
