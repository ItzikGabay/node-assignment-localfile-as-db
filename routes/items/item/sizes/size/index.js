const express = require("express");
const router = express.Router({ mergeParams: true });
const logic = require("./logic");

router.get("/", async (req, res) => {
  const result = await logic.getSize(Number(req.params.itemID), req.params.sizeType);
  res.status(200).json({ result });
});

router.put("/", async (req, res) => {
  let sizes = req.body;
  const result = await logic.updateSize(Number(req.params.itemID), { sizes });
  res.status(200).send({ result });
});

router.delete("/", async (req, res) => {
  const result = await logic.removeSize(Number(req.params.itemID), [
    req.params.sizeType,
  ]);
    res.status(200).json({ result });
});

module.exports = router;
