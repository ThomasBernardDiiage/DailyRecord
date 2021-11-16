const { Sequelize, DataTypes, Model } = require('sequelize'); // import all packages
const bcrypt = require('bcrypt');


class ProjectModel extends Model{

    static async init(sequelizeInstance){
        super.init({
            pId:{
                type:DataTypes.INTEGER,
                allowNull:false,
                primaryKey:true,
                autoIncrement:true
            },
            pName:{
                type:DataTypes.STRING,
                allowNull:false
            },
            pDescription:{
                type:DataTypes.STRING,
                allowNull:true
            },
            pStartDate:{
                type:DataTypes.DATEONLY,
                allowNull:false
            },
            pEndDate:{
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