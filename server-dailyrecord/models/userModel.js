const { Sequelize, DataTypes, Model } = require('sequelize'); // import all packages


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
            sequelize:sequelizeInstance,
            modelName:'User'
        });
        super.sync(); // sync changes
    }
}

module.exports = UserModel;