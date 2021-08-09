const express = require('express');
const router = express.Router();

router.use('/')

router.get('/test', (req, res) => {
    res.send('hey?')   
})


module.exports = router