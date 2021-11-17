const { Sequelize, DataTypes, Model } = require('sequelize'); // import all packages
const bcrypt = require('bcrypt');
const MeetingModel = require('./meetingModel');


class StampModel extends Model{

    static async init(sequelizeInstance){
        super.init({
            id:{
                type:DataTypes.INTEGER,
                allowNull:false,
                primaryKey:true,
                autoIncrement:true
            },
            location:{
                type:DataTypes.INTEGER,
                allowNull:false
            },
            name:{
                type:DataTypes.STRING,
                allowNull:false
            },
            meetingId:{
                type:DataTypes.INTEGER,
                allowNull:false,
                references: {
                    model: MeetingModel,
                    key: 'id'
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