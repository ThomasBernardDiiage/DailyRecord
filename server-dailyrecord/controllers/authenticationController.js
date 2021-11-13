const AuthenticationService = require('../services/authenticationService');

class AuthenticationController {


    async login(request, response){
        AuthenticationService.login(request.body.email, request.body.password);
    }

    async register(request, response){
        const user = await AuthenticationService.register(request.body.email, request.body.password, request.body.firstname, request.body.lastname);

        // if a user is found
        if(user){
            response.status(200).send();
        }
        else{
            response.status(406).send();
        }
    }

}


module.exports = new AuthenticationController();