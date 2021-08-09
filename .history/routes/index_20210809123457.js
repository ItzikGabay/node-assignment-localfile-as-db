/**
 * * /index.js - Main routes configuration file.
 **/

const express = require("express");
const router = express.Router({ mergeParams: true });

// items ROUTE ->
const itemsRoute = require("./items/index");
router.use("/items", itemsRoute);

// /{home} - GET ->
router.get("/", (req, res) => {
  console.log();
  res.status(200).send("home");
});

module.exports = router;
