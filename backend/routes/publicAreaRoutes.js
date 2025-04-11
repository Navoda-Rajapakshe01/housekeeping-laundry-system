const express = require('express');
const router = express.Router();
const publicAreaController = require('../controllers/publicAreaController');

router.get('/', publicAreaController.getPublicAreas);
router.post('/', publicAreaController.createPublicArea);
router.put('/:id', publicAreaController.updatePublicArea);
router.delete('/:id', publicAreaController.deletePublicArea);

module.exports = router;
