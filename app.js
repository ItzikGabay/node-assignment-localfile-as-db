/*****************
 * * app.js - main app file
 *****************/
"use strict";

/*****************
 * Imports
 *****************/
const express = require("express");
const app = express();
const router = require("./routes/index.js");

/*****************
 * App Settings
 *****************/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Router
app.use("/", router);

/*****************
 * App listening..
 *****************/
app.listen(3000, (req, res) => {
  console.log("Started");
});
