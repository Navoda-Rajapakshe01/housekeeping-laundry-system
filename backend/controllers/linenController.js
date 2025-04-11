const Linen = require('../models/Linen');

// GET all linens
exports.getLinens = async (req, res) => {
  try {
    const linens = await Linen.find();
    res.json(linens);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch linens' });
  }
};

// POST create new linen
exports.createLinen = async (req, res) => {
  try {
    const linen = new Linen(req.body);
    const saved = await linen.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: 'Failed to add linen' });
  }
};

// PUT update linen by ID
exports.updateLinen = async (req, res) => {
  try {
    const updated = await Linen.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update linen' });
  }
};

// DELETE remove linen by ID
exports.deleteLinen = async (req, res) => {
  try {
    await Linen.findByIdAndDelete(req.params.id);
    res.json({ message: 'Linen deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete linen' });
  }
};
