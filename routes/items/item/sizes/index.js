const express = require('express');
const router = express.Router({ mergeParams: true });
const logic = require('./logic');
const { route } = require('./size/index');
const sizeRoute = require("./size/index");

// items/:id/sizes // $GET
router.get('/', function (req, res) {
    logic.getSizes(Number(req.params.itemID), result => {
        res.status(200).json({result})
    })
})

// items/:id/sizes // $PUT
router.post('/', (req, res) => {
    logic.insertSizes(Number(req.params.itemID), req.body, result => {
        res.status(200).json({result});
    });
});

// items/:id/sizes // $PUT
router.put('/', (req, res) => {
    logic.updateSize(Number(req.params.itemID), req.body, result => {
        res.status(200).json({result});
    });
});

// items/:id/sizes // $PUT
router.delete('/', (req, res) => {
    logic.removeSize(Number(req.params.itemID), Object.keys(req.body.size), result => {
        res.status(200).json({result});
    });
});

router.use("/:sizeType", sizeRoute);

module.exports = router;