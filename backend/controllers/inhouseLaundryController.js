const InhouseLaundry = require('../models/InHouseLaundry');

// GET all laundry records
exports.getLaundryBatches = async (req, res) => {
  try {
    const items = await InhouseLaundry.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch laundry data' });
  }
};

// POST new laundry batch
exports.createLaundryBatch = async (req, res) => {
  try {
    const laundry = new InhouseLaundry(req.body);
    const saved = await laundry.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create laundry batch' });
  }
};

// PUT update laundry status
exports.updateLaundryBatch = async (req, res) => {
  try {
    const updated = await InhouseLaundry.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    // Optionally mark completedAt when status is "Cleaned"
    if (req.body.status === 'Cleaned') {
      updated.completedAt = new Date();
      await updated.save();
    }

    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update batch' });
  }
};

// DELETE laundry record
exports.deleteLaundryBatch = async (req, res) => {
  try {
    await InhouseLaundry.findByIdAndDelete(req.params.id);
    res.json({ message: 'Laundry batch deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete batch' });
  }
};
