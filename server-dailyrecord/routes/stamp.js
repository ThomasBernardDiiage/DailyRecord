// Dependecies
var express = require('express');
var router = express.Router();
const StampController = require('../controllers/stampController');

router.get('/:meetingId', StampController.getStamps); // Call the getStamps route
router.get('/:stampId', StampController.getStamp); // Call the getStamp route
router.post('/', StampController.createStamp); // Call the createStamp route

module.exports = router;