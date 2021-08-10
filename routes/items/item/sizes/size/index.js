const express = require("express");
const router = express.Router({ mergeParams: true });
const logic = require("./logic");

router.get("/", function (req, res) {
  const result = logic.getSize(Number(req.params.itemID), req.params.sizeType);
  res.status(200).json({ result });
});

module.exports = router;
