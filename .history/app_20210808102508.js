'use strict';

const express = require('express');
const app = express();

// App config

// BodyParseer ->
express.json({ extended: false });

app.get('/', (req, res) => {
res.send('hello')
})

app.listen(3000)