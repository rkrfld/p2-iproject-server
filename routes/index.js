const router = require('express').Router()
const accountRouter = require('./accountRoutes')
const auctionRouter = require('./auctionRoutes')
const favoriteRouter = require('./favoriteRouter')
const authenMiddleware = require('../middleware/authentication') 
const Controller = require('../controllers/auctionController')

router.use('/account', accountRouter)
router.post('/transaction', Controller.transaction)

router.use(authenMiddleware)

router.use('/auction', auctionRouter)
router.use('/favorite', favoriteRouter)

module.exports = router
