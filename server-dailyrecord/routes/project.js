var express = require('express');
var router = express.Router();
const ProjectController = require('../controllers/projectController');
const StampController = require('../controllers/stampController');
const MeetingController = require('../controllers/meetingController');
const { route } = require('.');
const multer = require('../middleware/multer');

// Project
router.get('/', ProjectController.getProjects); // we call the getProjects route
router.get('/:id', ProjectController.getProject); // call get project
router.post('/', ProjectController.createProject); // we call the create project route
router.post('/:id/member', ProjectController.addMemberProject); // call addMemberProject method

// Meeting
router.get('/:id/meetings', MeetingController.getMeetings); // Call the getMeetings route
router.get('/:id/meeting/:meetingId', MeetingController.getMeeting); // Call the getMeeting route
router.post('/:id/meeting/', MeetingController.createMeeting); // Call the createMeeting route
// router.post('/:id/meeting/:meetingId', MeetingController.setMeeting); // Call the setMeeting route

// Multer
router.post('/:id/meeting/:meetingId/', multer, MeetingController.uploadAudio); // Call the uploadAudio route

// Stamp
router.get('/:id/meeting/:meetingId/timestamps', StampController.getStamps); // Call the getStamps route
router.get('/:id/meeting/:meetingId/timestamp/:stampId', StampController.getStamp); // Call the getStamp route
router.post('/:id/meeting/:meetingId/timestamp/', StampController.createStamp); // Call the createStamp route
// router.post('/:id/meeting/:meetingId/timestamp/:stampId', StampController.setStamp); // Call the setStamp route

module.exports = router;
