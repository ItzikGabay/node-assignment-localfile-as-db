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

_useErrorMiddlewares();

function _useErrorMiddlewares() {
  app.use((err, req, res, next) => {
    // request aborted handler
    if (err.status === 400 && err.code === "ECONNABORTED") {
      return res.status(err.status).json({
        error: err,
      });
    }

    if (err.name !== "JsonSchemaValidation") {
      return next(err);
    }

    res.status(400).json({
      statusText: "Bad Request",
      jsonSchemaValidation: true,
      errors: err.validations, // All the validation information
    });
  });
}

/*****************
 * App listening..
 *****************/
app.listen(3000, (req, res) => {
  console.log("Started");
});
