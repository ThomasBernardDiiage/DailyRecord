const { Sequelize, DataTypes, Model } = require('sequelize'); // import all packages
const UserModel = require('./userModel');



class CommentModel extends Model{

    static async init(sequelizeInstance){

        super.init({
            id: {
                type:DataTypes.INTEGER,
                allowNull:false,
                primaryKey:true,
                autoIncrement:true
            },
            text:{
                type:DataTypes.STRING,
                allowNull:false
            },
            idCreator:{
                type:DataTypes.INTEGER,
                allowNull:false,
                references: {
                    model: UserModel,
                    key: 'id'
                }
            }
        },
        {
            sequelize:sequelizeInstance,
            modelName:'Comments'
        });
        await super.sync(); // sync changes);
    }
}


module.exports = CommentModel;