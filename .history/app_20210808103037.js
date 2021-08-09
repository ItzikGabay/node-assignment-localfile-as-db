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
app.use(express.json({ extended: false }))


// ############
// Router
// ############
app.get('/', (req, res) => {
    res.status(200).send('hello')
})

app.use("/test", router);

app.listen(3000, 
    )