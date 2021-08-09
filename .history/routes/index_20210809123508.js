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
  res.status(200).send("home");
});

// /{home} - GET ->
router.get("/", (req, res) => {
  res.status(200).send(req.body);
});

module.exports = router;
