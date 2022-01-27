const router = require('express').Router()
const Controller = require('../controllers/auctionController')

router.get('/', Controller.getAuctionItem)
router.patch('/:id', Controller.addBid)
router.post('/payment/:id', Controller.payment)

router.get('/orderHistory', Controller.orderHistory)

module.exports = router