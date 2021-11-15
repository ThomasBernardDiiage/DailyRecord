//#region all imports
    import ApiService from '../services/apiService';
//#endregion


export default class ProjectService{

    async getProjects(){

        return await ApiService.sendGetWithToken('projects', true);

    }
}