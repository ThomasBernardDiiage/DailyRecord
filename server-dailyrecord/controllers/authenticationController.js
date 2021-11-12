const AuthenticationService = require('../services/authenticationService');

class AuthenticationController {


    async login(request, response){
        AuthenticationService.login(request.body.email, request.body.password);
    }

    async register(request, response){
        console.log("ok");
        AuthenticationService.register(request.body.email, request.body.password, request.body.firstname, request.body.lastname);
    }

}


module.exports = new AuthenticationController();