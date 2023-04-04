// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
let app = express()



// CONFIG/MIDDLEWARE
require('dotenv').config()
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())

// MONGOOSE
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})

// ROOT INDEX
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// BOOKS
const booksController = require('./controllers/books.js')
app.use('/books', booksController)

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
