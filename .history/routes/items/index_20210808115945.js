/**
 * * /items/data-queries.js - Functions that communicate with the DB only.
 **/

const express = require("express");
const router = express.Router({ mergeParams: true });
const itemsLogic = require("./logic");

// items/test / GET
router.get("/test", (req, res) => {
  res.status(200).json(itemsLogic.getItems());
});

module.exports = router;
