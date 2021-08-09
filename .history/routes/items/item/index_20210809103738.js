/*********************************
 * * /items/index.js - Routes for "/items"
 *********************************/

const express = require("express");
const router = express.Router({ mergeParams: true });
const itemLogic = require("./logic");

router.get("/", (req, res) => {
  let result = itemLogic.getItem();
  res.send(result);
});

// items/test / GET
router.get("/test", (req, res) => {
  res.status(200).json(itemsLogic.getItems());
});

module.exports = router;
