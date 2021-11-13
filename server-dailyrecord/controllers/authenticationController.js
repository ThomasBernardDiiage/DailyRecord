const AuthenticationService = require('../services/authenticationService');
const JsonWebToken = require('jsonwebtoken');

class AuthenticationController {


    async login(request, response){
        const user = await AuthenticationService.login(request.body.email, request.body.password);
        // If the user exist
        if(user){
            const payload = { sub: user.id, email: user.email } // Create the payload
            const token = JsonWebToken.sign(payload, 'secret');
            response.status(200).send(token); // Return 200 + token
        }
        else{
            response.status(406).send();
        }
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