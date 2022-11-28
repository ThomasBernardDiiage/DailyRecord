const { Sequelize, DataTypes, Model } = require('sequelize'); // import all packages
const bcrypt = require('bcrypt');


class ProjectModel extends Model{

    static async init(sequelizeInstance){
        super.init({
            id:{
                type:DataTypes.INTEGER,
                allowNull:false,
                primaryKey:true,
                autoIncrement:true
            },
            name:{
                type:DataTypes.STRING,
                allowNull:false
            },
            description:{
                type:DataTypes.STRING,
                allowNull:true
            },
            startDate:{
                type:DataTypes.DATEONLY,
                allowNull:false
            },
            endDate:{
                type:DataTypes.DATEONLY,
                allowNull:true
            }
        },
        {
            sequelize:sequelizeInstance,
            modelName:'Projects'
        });
        await super.sync(); // sync changes
    }
}

module.exports = ProjectModel;