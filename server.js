//dotenv for configuring environment variables
require('dotenv').config()

const express = require('express')
const app = express() , 
      apiRoutes = require('./routes/apiRoutes')

const PORT = process.env.PORT || 8000;

app.use(express.static('public'))

app.use('/', apiRoutes)

app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
})
