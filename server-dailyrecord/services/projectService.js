const projectController = require('../controllers/projectController');
const ProjectModel = require('../models/projectModel');
const UserModel = require('../models/userModel');
const UserProjectModel = require('../models/userProjectModel');


class ProjectService{

    async getProjects(userId){
        const projects = await ProjectModel.findAll(); // Must edit this query to return only projet for a user
        return projects;
    }

    async getProject(userId, projectId){
        // Get the project with this id

        // Check if the user have access to this project


        // return the project with all dailys

        return project;
    }

    async createProject(userId, name, description, startDate, endDate){

        // Insert the project


        // Insert into Works


        // Return bool
    }
}

module.exports = new ProjectService();