
/*********************************
 * * /items/index.js - Routes for "/items"
 *********************************/

const express = require("express");
const router = express.Router({ mergeParams: true });
const itemsLogic = require("./logic");

router.get('/', (req, res) => {
  let result = itemsLogic.getItems()
  res.send(result)
})

// items/test / GET
router.get("/test", (req, res) => {
  res.status(200).json(itemsLogic.getItems());
});

router.use("/items", itemsRoute);

module.exports = router;
