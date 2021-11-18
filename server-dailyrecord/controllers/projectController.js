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
        
        const userId = TokenService.getUserId(request.headers.authorization);
        const name = request.body.name;
        const description = request.body.description;
        const startDate = request.body.startDate;
        const endDate = request.body.endDate;

        const projectCreated = await ProjectService.createProject(userId,name,description,startDate,endDate);
        if(projectCreated){
            response.status(200).send();
        }
        else{
            response.status(418).send();
        }
    }

    async addMemberProject(request, response){
        
    }
}


module.exports = new ProjectController(); // new singleton