const mongoose = require('mongoose');

const linenSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ['Bedsheet', 'Towel', 'Pillowcase', 'Blanket', 'Other'],
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    condition: {
      type: String,
      enum: ['Clean', 'Dirty', 'Needs Replacement'],
      default: 'Clean',
    },
    lastLaundered: {
      type: Date,
      default: null,
    },
    replacementDue: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Linen', linenSchema);
