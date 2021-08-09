/*********************************
 * * /items/index.js - Routes for "/items"
 *********************************/

const express = require("express");
const router = express.Router({ mergeParams: true });
const itemLogic = require("./logic");

// items/item / GET
router.get("/", (req, res) => {
  let result = itemLogic.getItem();
  res.send(result);
});

// items/item / PUT
router.put("/", (req, res) => {
    const result = logic.updateItem(req.body.item)
    res.status(200).json(result);
});

module.exports = router;