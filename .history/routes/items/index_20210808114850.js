const express = require("express");
const router = express.Router({ mergeParams: true });
const itemsLogic = require("./logic");
const itemsLogic = require("./
");

// items/test / GET
router.get("/test", (req, res) => {
  res.status(200).json(itemsLogic.getItems());
});

module.exports = router;