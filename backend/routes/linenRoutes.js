const express = require('express');
const router = express.Router();
const linenController = require('../controllers/linenController');

router.get('/', linenController.getLinens);
router.post('/', linenController.createLinen);
router.put('/:id', linenController.updateLinen);
router.delete('/:id', linenController.deleteLinen);

module.exports = router;
