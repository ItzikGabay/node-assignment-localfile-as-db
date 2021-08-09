/*********************************
 * * /item/index.js - Routes for "/items"
 *********************************/

const express = require("express");
const router = express.Router({ mergeParams: true });
const itemLogic = require("./logic");

// items/item / GET
router.get('/', (req, res) => {
  let result = itemLogic.getItem(Number(req.params.itemID));
  res.send(result);
});

// items/item / PUT
router.put('/', (req, res) => {
    const result = itemLogic.updateItem(Number(req.params.itemID) ,req.body.item);
    res.status(200).json({result});
});

module.exports = router;