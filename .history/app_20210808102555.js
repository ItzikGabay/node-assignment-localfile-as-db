'use strict';

const express = require('express');
const app = express();

// App settings

// BodyParseer ->
app.use(express.json({ extended: false }))

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(3000)