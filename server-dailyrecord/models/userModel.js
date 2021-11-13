const { Sequelize, DataTypes, Model } = require('sequelize'); // import all packages
const bcrypt = require('bcrypt');


class UserModel extends Model{

    static async init(sequelizeInstance){
        super.init({
            id:{
                type:DataTypes.INTEGER,
                allowNull:false,
                primaryKey:true,
                autoIncrement:true
            },
            email:{
                type:DataTypes.STRING,
                allowNull:false
            },
            password:{
                type:DataTypes.STRING,
                allowNull:false
            },
            firstname:{
                type:DataTypes.STRING,
                allowNull:false
            },
            lastname:{
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
            modelName:'User'
        });
        super.sync(); // sync changes
    }
}

module.exports = UserModel;