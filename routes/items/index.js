
/*********************************
 * * /items/index.js - Routes for "/items"
 *********************************/

const express = require("express");
const router = express.Router({ mergeParams: true });

// items Functions file ->
const itemsLogic = require("./logic");

// Schema 
const validate = require("express-jsonschema").validate;
const itemsSchema = {
  query: {
    type: "object",
    additionalProperties: false,
    properties: {
      priceIsGreater: {
        type: ["number", "string"],
        format: "numeric",
        minimum: 0,
        maximum: 1,
        required: true,
      },
    },
  },
};


// items/item ROUTE ->
const itemRoute = require("./item/index")
router.use("/:itemID", itemRoute);


// items/ - GET ->
router.get("/", validate(itemsSchema), async (req, res) => {
  const result = await itemsLogic.getItems(req.query);
  res.status(200).json({ result });
});


// items/ - POST ->
router.post('/', async (req, res) => {
  const result = await itemsLogic.createItem(req.body.item)
  res.status(200).json({ result });
})

module.exports = router;
