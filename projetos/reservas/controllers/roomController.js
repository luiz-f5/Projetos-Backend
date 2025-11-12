const Room = require('../models/Room');

exports.getRooms = (req, res) => {
  let rooms = Room.getAll();
  const { capacityMin, hasProjector } = req.query;

  if (capacityMin) rooms = rooms.filter(r => r.capacity >= +capacityMin);
  if (hasProjector !== undefined) rooms = rooms.filter(r => r.hasProjector === (hasProjector === 'true'));

  res.json(rooms);
};

exports.createRoom = (req, res) => {
  const { name, capacity, hasProjector } = req.body;
  if (!name || capacity <= 0) return res.status(422).json({ error: 'Dados inválidos' });
  const room = Room.create({ name, capacity, hasProjector });
  res.status(201).json(room);
};