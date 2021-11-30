//#region all imports
import ApiService from '../services/apiService';
//#endregion


export default class StampService {

    async createStamp(projectId, meetingId, location, name){
        return await ApiService.sendPostWithToken('project/' + projectId + '/meeting/' + meetingId + '/timestamp', {name, location}, true);
    }
}