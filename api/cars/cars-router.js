const router = require('express').Router()
const Cars = require('./cars-model')

router.get('/', (req, res, next) => {
    Cars.getAll(req.params.id)
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(next)
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = router