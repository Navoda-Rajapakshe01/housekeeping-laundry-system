const PublicArea = require('../models/PublicArea');

// GET all public areas
exports.getPublicAreas = async (req, res) => {
  try {
    const areas = await PublicArea.find();
    res.json(areas);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch public areas' });
  }
};

// POST new public area
exports.createPublicArea = async (req, res) => {
  try {
    const newArea = new PublicArea(req.body);
    const saved = await newArea.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create public area' });
  }
};

// PUT update public area
exports.updatePublicArea = async (req, res) => {
  try {
    const updated = await PublicArea.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update public area' });
  }
};

// DELETE public area
exports.deletePublicArea = async (req, res) => {
  try {
    await PublicArea.findByIdAndDelete(req.params.id);
    res.json({ message: 'Public area deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete public area' });
  }
};
