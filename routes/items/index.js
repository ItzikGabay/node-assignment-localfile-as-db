
/*********************************
 * * /items/index.js - Routes for "/items"
 *********************************/

const express = require("express");
const router = express.Router({ mergeParams: true });


// items Functions file ->
const itemsLogic = require("./logic");


// items/item ROUTE ->
const itemRoute = require("./item/index")
router.use("/:itemID", itemRoute);


// items/ - GET ->
router.get('/', (req, res) => {
  let result = itemsLogic.getItems(req.query)
  res.status(200).json({ result });
})


// items/ - POST ->
router.post('/', (req, res) => {
  let result = itemsLogic.createItem(req.body.item)
  res.status(200).json({result})
})

module.exports = router;
