const GuestLaundry = require('../models/GuestLaundry');

// Helper: Calculate total amount
const calculateTotal = (items) => {
  return items.reduce((sum, item) => sum + (item.price || 0), 0);
};

// GET all requests
exports.getGuestLaundry = async (req, res) => {
  try {
    const laundry = await GuestLaundry.find();
    res.json(laundry);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch guest laundry' });
  }
};

// POST new request
exports.createGuestLaundry = async (req, res) => {
  try {
    const totalAmount = calculateTotal(req.body.items);
    const newLaundry = new GuestLaundry({ ...req.body, totalAmount });
    const saved = await newLaundry.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create guest laundry request' });
  }
};

// PUT update request
exports.updateGuestLaundry = async (req, res) => {
  try {
    const updated = await GuestLaundry.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        totalAmount: calculateTotal(req.body.items || []),
      },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update request' });
  }
};

// DELETE request
exports.deleteGuestLaundry = async (req, res) => {
  try {
    await GuestLaundry.findByIdAndDelete(req.params.id);
    res.json({ message: 'Guest laundry request deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete request' });
  }
};
