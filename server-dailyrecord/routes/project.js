var express = require('express');
var router = express.Router();
const ProjectController = require('../controllers/projectController');

router.get('/', ProjectController.getProjects); // we call the getProjects route
router.get('/:id', ProjectController.getProject); // call get project
router.post('/', ProjectController.createProject); // we call the create project route
router.post('/member', ProjectController.addMemberProject); // call addMemberProject method


module.exports = router;
