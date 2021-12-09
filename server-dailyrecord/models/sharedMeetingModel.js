const { Sequelize, DataTypes, Model } = require('sequelize'); // import all packages
const MeetingModel = require('./meetingModel');

class SharedMeetingModel extends Model{


    static async init(sequelizeInstance){
        super.init({
            id:{
                type:DataTypes.INTEGER,
                allowNull:false,
                primaryKey:true
            },
            meetingId:{
                type: DataTypes.INTEGER,
                allowNull: false,
                references:{
                    model:MeetingModel,
                    key:'id'
                }
            },
            expirationDate:{
                type: DataTypes.DATE,
                allowNull:true
            }
        },
        {
            sequelize: sequelizeInstance,
            modelName:'SharedMeetings'
        }
        );
        await super.sync();
    }
}

module.exports = SharedMeetingModel;