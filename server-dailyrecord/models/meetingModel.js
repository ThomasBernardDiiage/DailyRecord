const { Sequelize, DataTypes, Model } = require('sequelize'); // import all packages
const bcrypt = require('bcrypt');
const ProjectModel = require('./projectModel');


class MeetingModel extends Model{

    static async init(sequelizeInstance){
        super.init({
            meetingId:{
                type:DataTypes.INTEGER,
                allowNull:false,
                primaryKey:true,
                autoIncrement:true
            },
            meetingDuration:{
                type:DataTypes.INTEGER,
                allowNull:false
            },
            meetingDescription:{
                type:DataTypes.STRING,
                allowNull:true
            },
            meetingFile:{
                type:DataTypes.STRING,
                allowNull:false
            },
            meetingDate:{
                type:DataTypes.DATE,
                allowNull:false
            },
            meetingProjectId:{
                type:DataTypes.INTEGER,
                allowNull:false,
                references: {
                    model: ProjectModel,
                    key: 'projectId'
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