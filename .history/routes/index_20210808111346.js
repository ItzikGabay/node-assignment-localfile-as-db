const express = require('express');
const router = express.Router({ mergeParams: true });
const itemsRoute = require('./items')

router.use('/items', )

router.get('/test', (req, res) => {
    res.send('hey?')   
})

module.exports = router