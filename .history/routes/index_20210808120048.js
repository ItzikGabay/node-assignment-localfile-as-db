/**
 * * /items/logic.js - Functions that communicate with the server only.
 **/

const express = require("express");
const router = express.Router({ mergeParams: true });

// Items route
const itemsRoute = require("./items/index");
router.use("/items", itemsRoute);

router.get("/", (req, res) => {
  res.status(200).send("home");
});

module.exports = router;
