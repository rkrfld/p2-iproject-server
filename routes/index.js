const router = require('express').Router()
const accountRouter = require('./accountRoutes')
const auctionRouter = require('./auctionRoutes')
const favoriteRouter = require('./favoriteRouter')
const authenMiddleware = require('../middleware/authentication') 

router.use('/account', accountRouter)


router.use(authenMiddleware)

router.use('/auction', auctionRouter)
router.use('/favorite', favoriteRouter)

module.exports = router
