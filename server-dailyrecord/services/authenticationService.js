const UserModel = require('../models/userModel');

class AuthenticationService{
    async login(email, password){
        const user = await UserModel.findOne({where:{userMail:email}}); // We verify if the email adress already exist

        if(user){
            const passwordMatched = await user.verifyPassword(password); // test passwords
            if(passwordMatched){
                return user; // if user exist and info ok return the user
            }
        }
        return undefined;
    }

    async register(email, password, firstname, lastname){
        const userExist = await UserModel.findOne({where:{userMail:email}}); // We verify if the email adress already exist
        if(userExist){
            return undefined;
        }
        else {
            const user = await UserModel.create({userMail:email, userPassword:password, userFirstname:firstname, userLastname:lastname});
            return user;
        }
    }
}


module.exports = new AuthenticationService();