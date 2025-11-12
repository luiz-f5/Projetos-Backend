const Booking = require('../models/Booking');
const Room = require('../models/Room');

exports.createBooking = (req, res) => {
  const { date, start, end } = req.body;
  const roomId = +req.params.id;
  const room = Room.findById(roomId);
  if (!room) return res.status(404).json({ error: 'Sala não encontrada' });

  const conflicts = Booking.findByRoomAndDate(roomId, date).some(b =>
    !(end <= b.start || start >= b.end)
  );
  if (conflicts) return res.status(409).json({ error: 'Conflito de reserva' });

  const booking = Booking.create({ roomId, date, start, end, userId: req.user.id });
  res.status(201).json(booking);
};

exports.getBookings = (req, res) => {
  res.json(Booking.getAll());
};

exports.deleteBooking = (req, res) => {
  const booking = Booking.findById(+req.params.id);
  if (!booking) return res.status(404).json({ error: 'Reserva não encontrada' });

  const success = Booking.delete(+req.params.id);
  if (!success) return res.status(500).json({ error: 'Erro ao cancelar' });

  res.json({ message: 'Reserva cancelada' });
};