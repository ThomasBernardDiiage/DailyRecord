var express = require('express');
var router = express.Router();
const { route } = require('.');
const SharedMeetingController = require('../controllers/sharedMeetingController');

// Project
router.get('/:sharedMeetingId', SharedMeetingController.getSharedMeeting); // we call the getProjects route
router.post('/', SharedMeetingController.createSharedMeeting); // we call the getProjects route




module.exports = router;
