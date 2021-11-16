const { Sequelize, DataTypes, Model } = require('sequelize'); // import all packages
const bcrypt = require('bcrypt');
const ProjectModel = require('./projectModel');


class MeetingModel extends Model{

    static async init(sequelizeInstance){
        super.init({
            mId:{
                type:DataTypes.INTEGER,
                allowNull:false,
                primaryKey:true,
                autoIncrement:true
            },
            mDuration:{
                type:DataTypes.INTEGER,
                allowNull:false
            },
            mDescription:{
                type:DataTypes.STRING,
                allowNull:true
            },
            mFile:{
                type:DataTypes.STRING,
                allowNull:false
            },
            mDate:{
                type:DataTypes.DATE,
                allowNull:false
            },
            mProjectId:{
                type:DataTypes.INTEGER,
                allowNull:false,
                references: {
                    model: ProjectModel,
                    key: 'pId'
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