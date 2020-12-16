const transporter = require('../config/nodemailer')
const Hotel = require('../models/index')

class Hotels {

  static async Hotels(req, res, next) {
    try {
      const hotels = await Hotel.findAll()
      res.status(200).json(hotels)
    } catch (err) {
      next(err)
    }
  }

  static async HotelDetail(req, res, next) {
    try {
      const id = req.params.id
      if (id) {
        const hotel = await Hotel.findOne(id)
        if (!hotel) {
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

  static async AddHotel(req, res, next) {
    try {
      const payload = {
        name: req.body.name,
        room_type: req.body.room_type,
        facilities: req.body.facilities
      }
      if (payload) {
        const newHotel = await Hotel.insertOne(payload)
        res.status(201).json(newHotel.ops[0])
      }
      else if (!payload) {
        let err = {
          name: 'Bad Request'
        }
        throw next(err)
      }
      throw next()
    } catch (err) {
      next(err)
    }
  }

  static async EditHotel(req, res, next) {
    try {
      const id = req.params.id
      const payload = {
        name: req.body.name,
        room_type: req.body.room_type,
        facilities: req.body.facilities
      }
      if (id) {
        const newHotel = await Hotel.updateOne(id, payload)
        if (newHotel.value === null) {
          let err = {
            name: 'Not Found'
          }
          throw next(err)
        }
        else if (newHotel.value !== null) {
          res.status(200).json(newHotel.value)
        }
      }
      throw next(err)
    } catch (err) {
      next(err)
    }
  }

  static async DeleteHotel(req, res, next) {
    try {
      const id = req.params.id
      if (id) {
        const deleteHotel = await Hotel.deleteOne(id)
        if (deleteHotel.value === null) {
          let err = {
            name: 'Not Found'
          }
          throw next(err)
        }
        else if (deleteHotel.value !== null) {
          res.status(200).json(deleteHotel.value)
        }
      }
      throw next(err)
    } catch (err) {
      next(err)
    }
  }

  static async sendMail(req, res, next) {
    const { emailAddress } = req.body
    console.log(emailAddress);
    const mailData = {
      from: 'inep.inn@gmail.com',  // sender address
      to: emailAddress,   // list of receivers
      subject: 'Booking Confirmation via InepInn The kooles ap on ert',
      text: 'Inep Inn Booking Guide',
      html: '<b>Halo ! Terima kasih telah menghubungi kami, dalam waktu kurang 24 jam anda akan dihubungi oleh tim kami</b> <br>Hati hati yah :)<br/>',
    };
    transporter.sendMail(mailData, (error, info) => {
      if (error) {
        res.status(500).json({ msg: error })
        return console.log(error);
      }
      res.status(200).json({ msg: 'Email Sent' })
    })

  }
}

module.exports = Hotels