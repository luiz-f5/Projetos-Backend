require('dotenv').config()
const express = require('express')
const session = require('express-session')
const usersRoutes = require('./routes/usersRoutes')
const productRoutes = require('./routes/productRoutes')

const app = express()

app.use(express.json())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

app.use('/auth', usersRoutes)
app.use('/products', productRoutes)

module.exports = app