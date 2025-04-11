const express = require('express');
const router = express.Router();
const controller = require('../controllers/specialServiceController');

router.get('/', controller.getSpecialServices);
router.post('/', controller.createSpecialService);
router.put('/:id', controller.updateSpecialService);
router.delete('/:id', controller.deleteSpecialService);

module.exports = router;
