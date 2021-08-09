const router = express.Router();

router.get('/test', function (req, res) => {
    res.send('hey?')   
})

module.exports = router