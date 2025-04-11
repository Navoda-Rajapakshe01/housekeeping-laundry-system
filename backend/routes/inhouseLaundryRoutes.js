const express = require('express');
const router = express.Router();
const controller = require('../controllers/inhouseLaundryController');

router.get('/', controller.getLaundryBatches);
router.post('/', controller.createLaundryBatch);
router.put('/:id', controller.updateLaundryBatch);
router.delete('/:id', controller.deleteLaundryBatch);

module.exports = router;
