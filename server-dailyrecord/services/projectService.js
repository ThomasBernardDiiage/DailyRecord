const { createProject } = require('../controllers/projectController');
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

        const project = {
            name:"Boss simulator",
            dailyMeetings:[{
                    id:1,
                    name:"English daily",
                    timestamp: "4"
                },
                {
                    id:2,
                    name:"Espagnol daily",
                    timestamp: "9"
                },
                {
                    id:3,
                    name:"Italian daily",
                    timestamp: "9"
                }
            ]
        }

        return project;
    }

    async createProject(userId, name, description, startDate, endDate){

        // Insert the project
        try{
            const result = await ProjectModel.create({
                //name	description	startDate	endDate	
                name:name,
                description:description,
                startDate,
                endDate
            });

            // Insert into Works
            const projectId = result.dataValues.id;
            if (await this.assignUserToProject(userId, projectId)){
                // Return bool
                return true;
            }
            else
            {
                // Return bool
                return false;
            }

        }
        catch{
            // Return bool
            return false;
        }
    }

    async assignUserToProject(userId,projectId){

        //assign a user to a specific project
        try{
            UserProjectModel.create({
                userId,
                projectId
            });
            return true;
        }
        catch{
            return false;
        }
    } 
}

module.exports = new ProjectService();