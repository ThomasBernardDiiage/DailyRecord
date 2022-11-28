//#region all imports
import ApiService from '../services/apiService';
//#endregion


export default class CommentService {

    async createComment(projectId, meetingId, text){
        return await ApiService.sendPostWithToken('project/' + projectId + '/meeting/' + meetingId + '/comment', {text}, true);
    }
}