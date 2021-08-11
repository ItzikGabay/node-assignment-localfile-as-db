const express = require('express');
const router = express.Router({ mergeParams: true });
const logic = require('./logic');
const { route } = require('./size/index');
const sizeRoute = require("./size/index");

// items/:id/sizes // $GET
router.get('/', function (req, res) {
    const result = logic.getSizes(Number(req.params.itemID))
    res.status(200).json({result})
})

// items/:id/sizes // $PUT
router.post('/', (req, res) => {
    const result = logic.insertSizes(Number(req.params.itemID), req.body.size);
    res.status(200).json({result});
});

// items/:id/sizes // $PUT
router.put('/', (req, res) => {
    const result = logic.updateSize(Number(req.params.itemID), req.body);
    res.status(200).json({result});
});

// items/:id/sizes // $PUT
router.delete('/', (req, res) => {
    const result = logic.removeSize(Number(req.params.itemID), Object.keys(req.body.size));
    res.status(200).json({result});
});

router.use("/:sizeType", sizeRoute);

module.exports = router;