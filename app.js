const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const router = require('./routes/index')
const ErrorHandler = require('./middleware/ErrorHandler')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)
app.use(ErrorHandler)
// app.listen(PORT, () => {
//     console.log(`InepInn running on http://localhost:${PORT}`)
// })

module.exports = app