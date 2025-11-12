require('dotenv').config();
const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const roomRoutes = require('./routes/roomRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());
app.use(authRoutes);
app.use(roomRoutes);
app.use(bookingRoutes);
app.use(errorHandler);

module.exports = app;