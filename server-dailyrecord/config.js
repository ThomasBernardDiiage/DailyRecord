

class Config {

    // //#region  database informations
    // static databaseIPAddress = '192.168.10.2';
    // static databaseName = 'DbDailyRecord';
    // static databaseUser = 'dailyrecord';
    // static databasePassword = 'Azerty@123';
    // static databaseDialect = 'mysql'
    // //#endregion

    //#region  database informations
    static databaseIPAddress = 'localhost';
    static databaseName = 'DbDailyRecord';
    static databaseUser = 'root';
    static databasePassword = 'Azerty@123';
    static databaseDialect = 'mysql'
    //#endregion
}

module.exports = Config;