const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema(
  {
    roomNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    floor: {
      type: Number,
      default: '',
    },
    status: {
      type: String,
      enum: ['Clean', 'Needs Cleaning', 'Occupied'],
      default: 'Needs Cleaning',
    },
    assignedTo: {
      type: String, 
      default: null,
    },
    lastCleanedAt: {
      type: Date,
      default: null,
    },
    notes: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Room', roomSchema);
