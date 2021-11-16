const TokenService = require('../services/tokenService');

class ProjectController {


    // get projects for one user
    async getProjects(request, response){
       
        const token  = request.headers.authorization; // We get the token

        const result = [
            {
                id:1,
                name:"BossSimulator",
                numberOfDaily: 4
            },
            {
                id:2,
                name:"SmartCity",
                numberOfDaily: 7
            }
        ];

        response.status(200).send(result);
    }

    async createProject(request, response){
        response.status(200).send();

    }
}


module.exports = new ProjectController(); // new singleton