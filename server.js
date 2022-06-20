const cors = require('cors')
const express = require('express')
const { booksRoutes } = require('./src/routes')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())


//Constantes
const { PORT, BASE_URL } = process.env

//Routes

app.use('/books' , booksRoutes)



app.listen(PORT, () => {
  console.log(`Server is running on ${BASE_URL} : ${PORT}`)
})