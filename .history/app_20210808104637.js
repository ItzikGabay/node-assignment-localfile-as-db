/**
 * * app.js - main app file
 */


'use strict';

// ############
// App imports
// ############

const express = require('express');
const app = express();
const router = express.Router()
    

// ############
// App settings
// ############

// BodyParseer ->
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
router.use("/", router);


// ############
// Router
// ############
app.get('/', (req, res) => {
    res.status(200).send('hello')
})

app.listen(3000, (req, res) => {
    console.log('Started');
})