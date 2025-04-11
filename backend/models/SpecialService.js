const mongoose = require('mongoose');

const specialServiceSchema = new mongoose.Schema(
  {
    guestName: {
      type: String,
      required: true,
    },
    roomNumber: {
      type: String,
      required: true,
    },
    request: {
      type: String,
      required: true,
    },
    assignedTo: {
      type: String, 
      default: null,
    },
    status: {
      type: String,
      enum: ['Pending', 'Assigned', 'Completed'],
      default: 'Pending',
    },
    notes: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('SpecialService', specialServiceSchema);
