/*********************************
 * * /items/sizes/:sizeType/logic.js - Functions that communicate with the server only.
 *********************************/
"use strict";

const sizesDataQueries = require("../data-queries");

async function getSize(itemID, query) {
  const sizes = await sizesDataQueries.selectSizes(itemID, query);
  const result = {}
  result[query] = sizes[query]
  return result
}

function updateSize(id, item) {
  return sizesDataQueries.updateSizes(id, item);
}

function removeSize(id, item) {
  return sizesDataQueries.deleteSize(id, item);
}


// function deleteSize(itemID, query) {
//   const sizes = sizesDataQueries.selectSizes(itemID, query);
//   const result = {};
//   result[query] = sizes[query];
//   return result;
// }

module.exports = {
  getSize,
  removeSize,
  updateSize,
};
