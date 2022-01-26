const router = require('express').Router()
const Controller = require('../controllers/favoriteController')


router.get('/', Controller.getFavo)
router.post('/addtofavo', Controller.addtofavo)

module.exports = router