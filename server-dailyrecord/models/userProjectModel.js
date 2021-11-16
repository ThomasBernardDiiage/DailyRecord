const { Sequelize, DataTypes, Model } = require('sequelize'); // import all packages
const bcrypt = require('bcrypt');
const UserModel = require('./userModel');
const ProjectModel = require('./projectModel');


class UserProjectModel extends Model{

    static async init(sequelizeInstance){
        super.init({
            userId:{
                type:DataTypes.INTEGER,
                allowNull:false,
                primaryKey:true,
                references: {
                    model: UserModel,
                    key: 'userId'
                }
            },
            projectId:{
                type:DataTypes.INTEGER,
                allowNull:false,
                primaryKey:true,
                references: {
                    model: ProjectModel,
                    key: 'projectId'
                }
            }
        },
        {
            sequelize:sequelizeInstance,
            removeAttribute: 'id',
            modelName:'Works'
        });
        await super.sync(); // sync changes
    }
}

module.exports = UserProjectModel;