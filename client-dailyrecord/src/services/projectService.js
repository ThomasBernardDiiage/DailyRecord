//#region all imports
    import ApiService from '../services/apiService';
//#endregion


export default class ProjectService{

    async getProjects(){
        const resultCall = await ApiService.sendGetWithToken('project', true);
        return resultCall.data;
    }

    async getProject(id){
        const resultCall = await ApiService.sendGetWithToken('project/' + id, true);
        console.log(resultCall.data);
        return resultCall.data;
    }

    async createProject(name,description,startDate,endDate){
        const resultCall = await ApiService.sendPostWithToken('project', { name, description, startDate, endDate }, true);

        if(resultCall){
            return true
        }
        return false;
    }
    
    async addUserToProject(mail, projectId){
        await ApiService.sendPostWithToken('project/' + projectId + '/member', {mail}, true);
    }

    
}