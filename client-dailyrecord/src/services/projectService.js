//#region all imports
    import ApiService from '../services/apiService';
//#endregion


export default class ProjectService{

    async getProjects(){

        const resultCall = await ApiService.sendGetWithToken('project', true);
        return resultCall.data;
    }
}