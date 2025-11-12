let bookings = [];
module.exports = {
  getAll: () => bookings,
  create: (booking) => { booking.id = bookings.length + 1; bookings.push(booking); return booking; },
  findByRoomAndDate: (roomId, date) => bookings.filter(b => b.roomId === +roomId && b.date === date),
  findById: (id) => bookings.find(b => b.id === +id),
  delete: (id) => { const i = bookings.findIndex(b => b.id === +id); if (i >= 0) bookings.splice(i, 1); return i >= 0; }
};