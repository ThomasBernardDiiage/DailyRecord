const { Sequelize, DataTypes, Model } = require('sequelize'); // import all packages
const bcrypt = require('bcrypt');


class UserModel extends Model{

    static async init(sequelizeInstance){
        super.init({
            uId:{
                type:DataTypes.INTEGER,
                allowNull:false,
                primaryKey:true,
                autoIncrement:true
            },
            uMail:{
                type:DataTypes.STRING,
                allowNull:false
            },
            uPassword:{
                type:DataTypes.STRING,
                allowNull:false
            },
            uFirstname:{
                type:DataTypes.STRING,
                allowNull:false
            },
            uLastname:{
                type:DataTypes.STRING,
                allowNull:false
            }
        },
        {
            hooks:{
                beforeCreate: async (user, options) => {
                    // Hashing the password
                    const hashedPassword = await bcrypt.hash(user.password, 10);
                    user.password = hashedPassword; // We set the new password
                }
            },
            sequelize:sequelizeInstance,
            modelName:'Users'
        });
        await super.sync(); // sync changes
    }

    // Return bool of the password == encrypt password
    async verifyPassword(clearPassword) {
        return await bcrypt.compare(clearPassword, this.password);
      }
}

module.exports = UserModel;