const {Sequelize} = require('sequelize');
const UserModel = require('./userModel');
const ProjectModel = require('./projectModel');
const MeetingModel = require('./meetingModel');
const StampModel = require('./stampModel');
const UserProjectModel = require('./userProjectModel');

class DataBaseConnection {
  constructor() {
    this.sequelize = new Sequelize('DbDailyRecord', 'root', 'Azerty@123',{
      dialect:'mysql',
      host: 'localhost'
    });
  }

  async initialize() {
    this.sequelize.authenticate().then(async () => {
      console.log('connected to db');
      await UserModel.init(this.sequelize);
      await ProjectModel.init(this.sequelize);
      await MeetingModel.init(this.sequelize);
      await StampModel.init(this.sequelize);
      await UserProjectModel.init(this.sequelize);

      // Gestion des associations
      UserModel.belongsToMany(ProjectModel, {
        through: 'UserProjectModel',
        as: 'works',
        foreignKey: 'userId'
      }); // Un projet contient plusieurs utilisateurs

      ProjectModel.belongsToMany(UserModel, {
        through: 'UserProjectModel',
        as: 'works',
        foreignKey: 'projectId'
      }); // Un utilisateur contient plusieurs projets

      ProjectModel.hasMany(MeetingModel, {
        foreignKey: 'projectId'
      }); // Un meeting appartient à un projet

      MeetingModel.hasMany(StampModel, {
        foreignKey: 'metingId'
      }); // Un stamp appartient à un meeting
    });
  }
}

module.exports = new DataBaseConnection();