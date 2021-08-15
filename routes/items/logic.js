
/*********************************
 * * /items/logic.js - Functions that communicate with the server only.
 *********************************/
"use strict";

const dataQueries = require("./data-queries");

/*********************************
 * * getItems() - getting all items from DB(data queries file function)
 *********************************/

async function getItems(query) {
  const items = await dataQueries.selectItems(query)
  let totalItemsLength = 0;
  
  // if no items => return length 0;
  !!items
    ? (totalItemsLength = items.length)
    : (totalItemsLength = totalItemsLength);
  
    return {
      items,
      total: totalItemsLength,
    };
}

/*********************************
 * * createItem() - Creating item on file
 *********************************/

function createItem(item) {
  return dataQueries.insertItem(item);
}

/*********************************
 * * exports
 *********************************/

module.exports = {
  getItems,
  createItem,
};
