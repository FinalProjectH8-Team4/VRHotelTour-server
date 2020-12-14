const router = require('express').Router()
const HotelController = require('../controllers/HotelController')

router.get('/', HotelController.Hotels)
router.post('/', HotelController.AddHotel)
router.get('/:id', HotelController.HotelDetail)
router.put('/:id', HotelController.EditHotel)
router.delete('/:id', HotelController.DeleteHotel)

router.post('/bookroom', HotelController.sendMail)
module.exports = router