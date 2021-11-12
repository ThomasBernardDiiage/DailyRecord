var express = require('express');
var router = express.Router();
const AuthenticationController = require('../controllers/authenticationController');

router.post('/login', AuthenticationController.login); // we call the AuthenticationController
router.post('/register', AuthenticationController.register); // we call the AuthenticationController



module.exports = router;
