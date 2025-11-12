const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { getBookings, deleteBooking } = require('../controllers/bookingController');

router.get('/bookings', auth(['admin']), getBookings);
router.delete('/bookings/:id', auth(['admin']), deleteBooking);

module.exports = router;