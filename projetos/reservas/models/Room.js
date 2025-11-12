let rooms = [];
module.exports = {
  getAll: () => rooms,
  create: (room) => { room.id = rooms.length + 1; rooms.push(room); return room; },
  findById: (id) => rooms.find(r => r.id === +id)
};