const { Sequelize, DataTypes, Model } = require('sequelize'); // import all packages
const bcrypt = require('bcrypt');


class ProjectModel extends Model{

    static async init(sequelizeInstance){
        super.init({
            projectId:{
                type:DataTypes.INTEGER,
                allowNull:false,
                primaryKey:true,
                autoIncrement:true
            },
            projectName:{
                type:DataTypes.STRING,
                allowNull:false
            },
            projectDescription:{
                type:DataTypes.STRING,
                allowNull:true
            },
            projectStartDate:{
                type:DataTypes.DATEONLY,
                allowNull:false
            },
            projectEndDate:{
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