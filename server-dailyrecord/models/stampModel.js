const { Sequelize, DataTypes, Model } = require('sequelize'); // import all packages
const bcrypt = require('bcrypt');
const MeetingModel = require('./meetingModel');


class StampModel extends Model{

    static async init(sequelizeInstance){
        super.init({
            sId:{
                type:DataTypes.INTEGER,
                allowNull:false,
                primaryKey:true,
                autoIncrement:true
            },
            sLocation:{
                type:DataTypes.INTEGER,
                allowNull:false
            },
            sName:{
                type:DataTypes.STRING,
                allowNull:false
            },
            sMeetingId:{
                type:DataTypes.INTEGER,
                allowNull:false,
                references: {
                    model: MeetingModel,
                    key: 'mId'
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