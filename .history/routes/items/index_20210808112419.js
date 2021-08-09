const express = require("express");
const router = express.Router({ mergeParams: true });
const itemsLogic = require("./logic");

router.get("/test", (req, res) => {
  res.send.json(itemsLogic.getItems());
});

module.exports = router;