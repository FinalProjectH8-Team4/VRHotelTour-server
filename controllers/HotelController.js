const Hotel = require('../models/index')

class Hotels {

    static async Hotels (req, res) {
        try {
            const hotels = await Hotel.findAll()
            res.status(200).json(hotels)
        } catch (err) {
            console.log(err)
        }
    }

    static async HotelDetail (req, res) {
        try {
            const id = req.params.id
            const hotel = await Hotel.findOne(id)
            res.status(200).json(hotel)
        } catch (err) {
            console.log(err)
        }
    }

    static async AddHotel (req, res) {
        try {
            const payload = {
                name: req.body.name,
                room_type: req.body.room_type,
                facilities: req.body.facilities
            }
            const newHotel = await Hotel.insertOne(payload)
            res.status(201).json(newHotel.ops[0])
        } catch (err) {
            console.log(err)
        }
    }

    static async EditHotel (req, res) {
        try {
            const id = req.params.id
            const payload = {
                name: req.body.name,
                room_type: req.body.room_type,
                facilities: req.body.facilities
            }
            const newHotel = await Hotel.updateOne(id, payload)
            res.status(200).json(newHotel.value)
        } catch (err) {
            console.log(err)
        }
    }

    static async DeleteHotel (req, res) {
        try {
            const id = req.params.id
            const deleteHotel = await Hotel.deleteOne(id)
            res.status(200).json(deleteHotel.value)
        } catch (err) {
            console.log(err)
        }
    }

}

module.exports = Hotels