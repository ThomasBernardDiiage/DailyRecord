const UserModel = require('../models/userModel');

class AuthenticationService{

    async login(mail, password){

        try {
            const user = await UserModel.findOne({where:{mail}}); // We verify if the email adress already exist

            if(user){
                if(await user.verifyPassword(password)){
                    return user; // if user exist and info ok return the user
                }
            }
        }
        catch {
            console.log("Error in authentificationService.login( )")
        }

        return false;
    }

    async register(mail, password, firstname, lastname){

        try{
            const userExist = await UserModel.findOne({where:{mail}}); // We verify if the email adress already exist

            if(userExist){ // If the user already exist
                return false;
            }
            else { // If it's a new user
                const user = await UserModel.create({mail, password, firstname, lastname}); // We create this user
                return true; // We return true
            }
        }
        catch {
            console.log("Error in authentificationService.register ( )");
        }
        return false;
    }
}


module.exports = new AuthenticationService();