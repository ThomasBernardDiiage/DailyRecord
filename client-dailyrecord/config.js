

export default class Config {

    static serverIpAddress = 'localhost';
    static serverPort = 3000;
    static serverUrl = 'http://' + this.serverIpAddress + ':' + this.serverPort + '/';


    static clientIpAddress = 'localhost';
    static clientPort = '8080'
    static clientUrl = 'http://' + this.clientIpAddress + ':' + this.clientPort + '/';

}