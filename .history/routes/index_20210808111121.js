const express = require('express');
const router = express.Router();

router.use('/items', (req, res) => {
    
})

router.get('/test', (req, res) => {
    res.send('hey?')   
})


module.exports = router