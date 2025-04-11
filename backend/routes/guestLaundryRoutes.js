const express = require('express');
const router = express.Router();
const controller = require('../controllers/guestLaundryController');

router.get('/', controller.getGuestLaundry);
router.post('/', controller.createGuestLaundry);
router.put('/:id', controller.updateGuestLaundry);
router.delete('/:id', controller.deleteGuestLaundry);

module.exports = router;
