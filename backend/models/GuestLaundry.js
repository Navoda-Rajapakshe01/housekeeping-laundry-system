const mongoose = require('mongoose');

const guestLaundrySchema = new mongoose.Schema(
  {
    guestName: {
      type: String,
      required: true,
    },
    roomNumber: {
      type: String,
      required: true,
    },
    items: [
      {
        type: {
          type: String,
          enum: ['Washing', 'Dry Cleaning', 'Ironing'],
          required: true,
        },
        description: String, 
        price: Number,
      },
    ],
    status: {
      type: String,
      enum: ['Received', 'In Progress', 'Ready for Pickup'],
      default: 'Received',
    },
    totalAmount: {
      type: Number,
      default: 0,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    notes: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('GuestLaundry', guestLaundrySchema);
