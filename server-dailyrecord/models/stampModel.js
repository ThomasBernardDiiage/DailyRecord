const { Sequelize, DataTypes, Model } = require('sequelize'); // import all packages
const bcrypt = require('bcrypt');
const MeetingModel = require('./meetingModel');


class StampModel extends Model{

    static async init(sequelizeInstance){
        super.init({
            stampId:{
                type:DataTypes.INTEGER,
                allowNull:false,
                primaryKey:true,
                autoIncrement:true
            },
            stampLocation:{
                type:DataTypes.INTEGER,
                allowNull:false
            },
            stampName:{
                type:DataTypes.STRING,
                allowNull:false
            },
            stampMeetingId:{
                type:DataTypes.INTEGER,
                allowNull:false,
                references: {
                    model: MeetingModel,
                    key: 'meetingId'
                }
            }
        },
        {
            sequelize:sequelizeInstance,
            modelName:'Stamps'
        });
        await super.sync(); // sync changes
    }
}

module.exports = StampModel;