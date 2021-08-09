const express = require('express');
const router = express.Router({ mergeParams: true });
const itemsRoute = require('./items/index')
const itemsRoute = require("./items/logic");

router.use("/items", itemsRoute);

router.get('/', (req, res) => {
    res.status(200).send('home')   
})

module.exports = router