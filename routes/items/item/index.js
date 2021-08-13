/*********************************
 * * /item/index.js - Routes for "/items"
 *********************************/

const express = require("express");
const router = express.Router({ mergeParams: true });
const itemLogic = require("./logic");
const sizesRoute = require("./sizes/index");

// items/:id/size // $GET
router.use("/sizes", sizesRoute);

// items/item // $GET
router.get('/', (req, res) => {
  itemLogic.getItem(Number(req.params.itemID), (result) => {
    res.status(200).json({ result });
  });
});

// items/item // $PUT
router.put('/', (req, res) => {
  const result = itemLogic.updateItem(Number(req.params.itemID), req.body.item, (result) => {
    res.status(200).json({result});
    });
});

// items/item // $DELETE
router.delete('/', (req, res) => {
    const result = itemLogic.removeItem(Number(req.params.itemID));
    res.status(200).json({result});
});


module.exports = router;