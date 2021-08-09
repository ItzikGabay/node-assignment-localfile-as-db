/**
 * * app.js - main app file
 **/


'use strict';

// ############
// App imports
// ############

const express = require('express');
const app = express();
const router = require('./routes/index.js')


// ############
// App settings
// ############

// BodyParseer ->
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/", router);


// ############
// Router
// ############
app.get('/1', (req, res) => {
    res.status(200).send('hello')
})

app.listen(3000, (req, res) => {
    console.log('Started');
})