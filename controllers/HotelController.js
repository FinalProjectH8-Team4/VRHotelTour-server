const Hotel = require('../models/index')

class Hotels {

    static async Hotels (req, res, next) {
        try {
            const hotels = await Hotel.findAll()
            res.status(200).json(hotels)
        } catch (err) {
            next(err)
        }
    }

    static async HotelDetail (req, res, next) {
        try {
            const id = req.params.id
            if(id) {
                const hotel = await Hotel.findOne(id)
                if(!hotel) {
                    let err = {
                        name: 'Not Found'
                    }
                    throw next(err)
                }
                res.status(200).json(hotel)
            }
            throw next()
        } catch (err) {
            next(err)
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
            console.log(newHotel)
            res.status(201).json(newHotel.ops[0])
        } catch (err) {
            res.status(500).json(err)
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
            res.status(500).json(err)
        }
    }

    static async DeleteHotel (req, res) {
        try {
            const id = req.params.id
            const deleteHotel = await Hotel.deleteOne(id)
            res.status(200).json(deleteHotel.value)
        } catch (err) {
            res.status(500).json(err)
        }
    }

}

module.exports = Hotels