const { ObjectId } = require('mongodb')
const db = require('../config/mongoConfig')
const collectionName = process.env.COLLECTION_NAME || 'Hotels'
const hotels = db.collection(collectionName)

class Hotel {
    static findAll() {
        const allHotels = hotels.find().toArray()
        console.log(allHotels)
        return allHotels
    }

    static findOne (id) {
        const hotel = hotels.findOne({"_id": ObjectId(id)}, {})
        return hotel
    }   

    static insertOne (payload) {
        let hotel = {
            name: payload.name,
            room_type: payload.room_type,
            facilities: payload.facilities
        }
        const newHotel = hotels.insertOne(hotel)
        return newHotel
    }

    static updateOne (id, payload) {
        let hotel = {
            name: payload.name,
            room_type: payload.room_type,
            facilities: payload.facilities
        }
        const newHotel = hotels.findOneAndUpdate(
            {"_id": ObjectId(id)}, {
                $set:  hotel 
            }, {
                returnOriginal: false
            }
        )
        return newHotel
    }

    static deleteOne (id) {
        const deletedHotel = hotels.findOneAndDelete({"_id": ObjectId(id)})
        return deletedHotel
    }
}

module.exports = Hotel