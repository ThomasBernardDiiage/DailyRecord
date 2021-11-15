class ProjectController {

    // get projects for one user
    async getProjects(request, response){
        response.status(200).send();
    }

    async createProject(request, response){
        response.status(200).send();

    }
}


module.exports = new ProjectController(); // new singleton