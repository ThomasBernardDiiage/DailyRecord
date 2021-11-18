const TokenService = require('../services/tokenService');
const ProjectService = require('../services/projectService');

class ProjectController {


    // get projects for one user
    async getProjects(request, response){
       
        const userId = TokenService.getUserId(request.headers.authorization); // Get the user id

        const projects = await ProjectService.getProjects(userId); // Call the method in project services
        response.status(200).send(projects);
    }

    async getProject(request, response){
        const projectId = 1;
        const userId = TokenService.getUserId(request.headers.authorization);

        const project = await ProjectService.getProject(userId, projectId);
        response.status(200).send(project);
    }

    async createProject(request, response){
        response.status(200).send();
    }

    async addMemberProject(request, response){
        
    }
}


module.exports = new ProjectController(); // new singleton