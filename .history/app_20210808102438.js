'use strict';

const express = require('express');
const app = express();

// App config


app.get('/', (req, res) => {
res.send('hello')
})

app.listen(3000)