const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const validateQuery = require('../middlewares/validateQuery');
const { getRooms, createRoom } = require('../controllers/roomController');
const { createBooking } = require('../controllers/bookingController');

router.get('/rooms', auth(), validateQuery, getRooms);
router.post('/rooms', auth(['admin']), createRoom);
router.post('/rooms/:id/bookings', auth(['member']), createBooking);

module.exports = router;