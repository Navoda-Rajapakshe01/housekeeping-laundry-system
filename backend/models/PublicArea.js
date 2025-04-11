const mongoose = require('mongoose');

const publicAreaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    assignedTo: {
      type: String, 
      default: null,
    },
    status: {
      type: String,
      enum: ['Pending', 'In Progress', 'Cleaned'],
      default: 'Pending',
    },
    notes: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('PublicArea', publicAreaSchema);
