const AuthenticationService = require('../services/authenticationService');
const JsonWebToken = require('jsonwebtoken');

class AuthenticationController {


    async login(request, response){
        const user = await AuthenticationService.login(request.body.email, request.body.password);
        // If the user exist

        try {
            if(user){
                const payload = { sub: user.id} // Create the payload
                const token = JsonWebToken.sign(payload, 'secret');
                response.status(200).send(token); // Return 200 + token
            }
            else{
                response.status(405).send("User not found"); // If the user is not in the database
            }
        }
        catch {
            response.status(404).send("Server error"); // If the server crash
        }
        
    }

    async register(request, response){
        const user = await AuthenticationService.register(request.body.email, request.body.password, request.body.firstname, request.body.lastname);

        // if a user is found

        try {
            if(user){
                response.status(200).send("Account created"); // If account is cerated
            }
            else{
                response.status(405).send("Can't create this account"); // else 
            }
        } 
        catch {
            response.status(404).send("Server error"); // If server crash
        }
    }

}


module.exports = new AuthenticationController();