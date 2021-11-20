//#region all imports
    import ApiService from '../services/apiService';
//#endregion

export default class MeetingService{
    
    async createMeeting(duration, name, filePath, date, projectId){
        const resultCall = await ApiService.sendPostWithToken('project/' + projectId + '/meeting', {
            duration,
            name,
            filePath,
            date,
            projectId
        }, true);

        return resultCall;
    }
}