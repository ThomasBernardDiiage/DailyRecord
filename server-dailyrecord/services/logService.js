const FileStream = require('fs'); // require the module filestream

class LogService {
    static filePath = '../dailyrecord.log';

    constructor(){
        FileStream.appendFile(LogService.filePath, '=========== DailyRecord Logs ===========', error => console.log(error));
    }


    async writeLog(content){
        try{
            let today = new Date();
            const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' '+ today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
            FileStream.appendFileSync(LogService.filePath, '\n' + date  + ' ' + content);

            return true;
        }
        catch {
            return false;
        }
    }


}


module.exports = new LogService();