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
// App settings
// ############
app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(3000)