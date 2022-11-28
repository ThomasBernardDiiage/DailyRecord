const { Sequelize, DataTypes, Model } = require('sequelize'); // import all packages
const bcrypt = require('bcrypt');
const ProjectModel = require('./projectModel');


class MeetingModel extends Model{

    static async init(sequelizeInstance){
        super.init({
            id:{
                type:DataTypes.INTEGER,
                allowNull:false,
                primaryKey:true,
                autoIncrement:true
            },
            description:{
                type:DataTypes.STRING,
                allowNull:true
            },
            file:{
                type:DataTypes.STRING,
                allowNull:false
            },
            date:{
                type:DataTypes.DATE,
                allowNull:false
            },
            projectId:{
                type:DataTypes.INTEGER,
                allowNull:false,
                references: {
                    model: ProjectModel,
                    key: 'id'
                }
            }
        },
        {
            sequelize:sequelizeInstance,
            modelName:'Meetings'
        });
        await super.sync(); // sync changes
    }
}

module.exports = MeetingModel;