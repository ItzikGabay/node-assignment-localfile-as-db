const express = require("express");
const router = express.Router({ mergeParams: true });
const itemsLogic = require("./logic");

// path: items/test
router.get("/test", (req, res) => {
  res.status(200).json(itemsLogic.getItems());
});

module.exports = router;