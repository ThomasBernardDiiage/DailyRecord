const AuthenticationService = require('../services/authenticationService');

class AuthenticationController {


    async login(request, response){

        AuthenticationService.login(request.body.email, request.body.password);

        console.log(request.body.email + " " + request.body.password);
    }

    async register(email, password, firstname, lastname){

    }

}


module.exports = new AuthenticationController();