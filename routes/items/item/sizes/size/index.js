const express = require("express");
const router = express.Router({ mergeParams: true });
const logic = require("./logic");

router.get("/", function (req, res) {
  const result = logic.getSize(Number(req.params.itemID), req.params.sizeType);
  res.status(200).json({ result });
});

router.put("/", function (req, res) {
  let sizes = req.body;
  const result = logic.updateSize(Number(req.params.itemID), {sizes});
  res.status(200).send({ result });
});

router.delete("/", function (req, res) {
  const result =
    logic.removeSize(Number(req.params.itemID), [req.params.sizeType]);
    res.status(200).json({ result });
});



module.exports = router;
