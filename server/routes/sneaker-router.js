const express = require('express')

const SneakerCtrl = require('../controllers/sneaker-ctrl')

const router = express.Router()

router.post('/sneaker', SneakerCtrl.createSneaker)
router.put('/sneaker/:id', SneakerCtrl.updateSneaker)
router.delete('/sneaker/:id', SneakerCtrl.deleteSneaker)
router.get('sneaker/:id', SneakerCtrl.getSneakerById)
router.get('/sneakers', SneakerCtrl.getSneakers)

module.exports = router
