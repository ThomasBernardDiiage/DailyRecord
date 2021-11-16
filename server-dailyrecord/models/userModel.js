const { Sequelize, DataTypes, Model } = require('sequelize'); // import all packages
const bcrypt = require('bcrypt');


class UserModel extends Model{

    static async init(sequelizeInstance){
        super.init({
            userId:{
                type:DataTypes.INTEGER,
                allowNull:false,
                primaryKey:true,
                autoIncrement:true
            },
            userMail:{
                type:DataTypes.STRING,
                allowNull:false
            },
            userPassword:{
                type:DataTypes.STRING,
                allowNull:false
            },
            userFirstname:{
                type:DataTypes.STRING,
                allowNull:false
            },
            userLastname:{
                type:DataTypes.STRING,
                allowNull:false
            }
        },
        {
            hooks:{
                beforeCreate: async (user, options) => {
                    // Hashing the password
                    const hashedPassword = await bcrypt.hash(user.userPassword, 10);
                    user.userPassword = hashedPassword; // We set the new password
                }
            },
            sequelize:sequelizeInstance,
            modelName:'Users'
        });
        await super.sync(); // sync changes
    }

    // Return bool of the password == encrypt password
    async verifyPassword(clearPassword) {
        return await bcrypt.compare(clearPassword, this.userPassword);
      }
}

module.exports = UserModel;