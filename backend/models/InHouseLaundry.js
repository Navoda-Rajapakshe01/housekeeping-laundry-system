const mongoose = require('mongoose');

const inhouseLaundrySchema = new mongoose.Schema(
  {
    linenType: {
      type: String,
      required: true,
      enum: ['Bedsheet', 'Towel', 'Pillowcase', 'Blanket', 'Other'],
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    status: {
      type: String,
      enum: ['Dirty', 'Washing', 'Drying', 'Ironing', 'Cleaned'],
      default: 'Dirty',
    },
    scheduledAt: {
      type: Date,
      default: Date.now,
    },
    completedAt: {
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

module.exports = mongoose.model('InhouseLaundry', inhouseLaundrySchema);
