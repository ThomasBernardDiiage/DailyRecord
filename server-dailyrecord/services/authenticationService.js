const UserModel = require('../models/userModel');

class AuthenticationService{
    async login(mail, password){
        const user = await UserModel.findOne({where:{mail}}); // We verify if the email adress already exist

        if(user){
            const passwordMatched = await user.verifyPassword(password); // test passwords
            if(passwordMatched){
                return user; // if user exist and info ok return the user
            }
        }
        return undefined;
    }

    async register(mail, password, firstname, lastname){
        console.log(mail);
        const userExist = await UserModel.findOne({where:{mail}}); // We verify if the email adress already exist
        if(userExist){
            return undefined;
        }
        else {
            const user = await UserModel.create({mail, password, firstname, lastname});
            return user;
        }
    }
}


module.exports = new AuthenticationService();