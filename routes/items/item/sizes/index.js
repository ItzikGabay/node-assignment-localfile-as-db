const express = require('express');
const router = express.Router({ mergeParams: true });
const logic = require('./logic');
const { route } = require('./size/index');
const sizeRoute = require("./size/index");

// items/:id/sizes // $GET
router.get('/', async(req, res) => {
    const result = await logic.getSizes(Number(req.params.itemID))
    res.status(200).json({result})
})

// items/:id/sizes // $PUT
router.post('/', async (req, res) => {
    const result = await logic.insertSizes(Number(req.params.itemID), req.body)
    res.status(200).json({result});
});

// items/:id/sizes // $PUT
router.put('/', async (req, res) => {
    const result = await logic.updateSize(Number(req.params.itemID), req.body)
    res.status(200).json({result});
});

// items/:id/sizes // $PUT
router.delete('/', async (req, res) => {
    const result = await logic.removeSize(Number(req.params.itemID), Object.keys(req.body.size))
    res.status(200).json({result});
});

router.use("/:sizeType", sizeRoute);

module.exports = router;