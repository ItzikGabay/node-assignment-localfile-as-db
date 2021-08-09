/**
 * app.js - main app file
 */


'use strict';

// ############
// App imports
// ############

const express = require('express');
const app = express();

// ############
// App settings
// ############

// BodyParseer ->
app.use(express.json({ extended: false }))


// ############
// Router
// ############
app.get('/', (req, res) => {
    res.status(200).send('hello')
})

app.listen(3000)