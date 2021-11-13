const UserModel = require('../models/userModel');

class AuthenticationService{
    login(email, password){
        console.log('Log in with the mail : ' + email + ' and the password : ' + password);

        
    }

    async register(email, password, firstname, lastname){
        const user = await UserModel.create({email, password, firstname, lastname});
        return user;
    }
}


module.exports = new AuthenticationService();