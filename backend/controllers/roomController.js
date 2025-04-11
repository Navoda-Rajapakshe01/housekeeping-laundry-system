const Room = require('../models/Room');

// GET all rooms
exports.getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch rooms' });
  }
};

// POST create new room
exports.createRoom = async (req, res) => {
  try {
    const room = new Room(req.body);
    const saved = await room.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create room' });
  }
};

// PUT update room info (status or staff)
exports.updateRoom = async (req, res) => {
  try {
    const updateData = { ...req.body };

    // Set lastCleanedAt if status is updated to 'Clean'
    if (updateData.status === 'Clean') {
      updateData.lastCleanedAt = new Date();
    }

    const updated = await Room.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update room' });
  }
};

// DELETE room
exports.deleteRoom = async (req, res) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.json({ message: 'Room deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete room' });
  }
};
