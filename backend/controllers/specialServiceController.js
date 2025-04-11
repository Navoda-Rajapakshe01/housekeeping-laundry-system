const SpecialService = require('../models/SpecialService');

// GET all special service requests
exports.getSpecialServices = async (req, res) => {
  try {
    const services = await SpecialService.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch special services' });
  }
};

// POST new special service request
exports.createSpecialService = async (req, res) => {
  try {
    const newRequest = new SpecialService(req.body);
    const saved = await newRequest.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create request' });
  }
};

// PUT update special service request
exports.updateSpecialService = async (req, res) => {
  try {
    const updated = await SpecialService.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update request' });
  }
};

// DELETE special service request
exports.deleteSpecialService = async (req, res) => {
  try {
    await SpecialService.findByIdAndDelete(req.params.id);
    res.json({ message: 'Special service request deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete request' });
  }
};
