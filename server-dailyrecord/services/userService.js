const UserModel = require('../models/userModel');

class UserService {
    async getUserWithMail(mail){
        const user = await UserModel.findOne({where:{mail}})

        return user;
    }
}

module.exports = new UserService();