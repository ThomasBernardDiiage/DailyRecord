const {Sequelize} = require('sequelize');
const UserModel = require('./userModel')

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

    });
  }
}

module.exports = new DataBaseConnection();