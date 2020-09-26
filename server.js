//dotenv for configuring environment variables
require('dotenv').config()

const express = require('express')
const app = express() , 
      apiRoutes = require('./routes/apiRoutes')
// Multer library for handling file uploads with multipart/form-data encoding
const multer = require('multer')

const PORT = process.env.PORT

app.use(express.static('public'))

app.use('/', apiRoutes)

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
})
