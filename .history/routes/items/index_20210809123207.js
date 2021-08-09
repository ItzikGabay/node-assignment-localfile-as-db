
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
  let result = itemsLogic.getItems()
  res.send(result)
})


// items/ - POST ->
router.post('/', (req, res) => {
  console.log(req.body);
  let result = itemsLogic.createItem(req.body.item)
  res.status(200).json({result})
})

// items/test / GET ->
router.get("/test", (req, res) => {
  res.status(200).json(itemsLogic.getItems());
});

module.exports = router;
