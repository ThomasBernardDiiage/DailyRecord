var express = require('express');
var router = express.Router();
const ProjectController = require('../controllers/projectController');

router.get('/', ProjectController.getProjects); // we call the getProjects route 
router.post('/', ProjectController.createProject) // we call the create project route


module.exports = router;
