const Sequelize = require('sequelize');
const ProjectModel = require('../models/projectModel');
const UserModel = require('../models/userModel');
const UserProjectModel = require('../models/userProjectModel');
const LogService = require('../services/logService');
const Config = require('../config');


const sequelize = new Sequelize(Config.databaseName, Config.databaseUser,Config.databasePassword,{
    host:Config.databaseIPAddress,
    dialect: Config.databaseDialect
})

class ProjectService{

    async getProjects(userId){

        let result = {};

        const projects = await sequelize.query("SELECT Projects.id, Projects.name, Projects.description FROM Projects INNER JOIN Works ON Projects.id = Works.projectId WHERE Works.userId = " + userId);
        const user = await sequelize.query("SELECT Users.firstname, Users.lastname, Users.mail FROM Users WHERE Users.id = " + userId);
        result.projects = projects[0];
        result.user = user[0][0];

        LogService.writeLog("User " + userId + " get " + result.projects.length + " projects");

        return result;
    }

    async getProject(userId, projectId){
        // Get the project with this id

        // Check if the user have access to this project

        // return the project with all dailys
        try{
            let project = await sequelize.query("SELECT Projects.id, Projects.name, Projects.description FROM Projects WHERE Projects.id = " + projectId);
            project = project[0][0];
            const meetings = await sequelize.query("SELECT Meetings.id, Meetings.description, Meetings.duration FROM Meetings WHERE projectId = " + projectId);
            const users = await sequelize.query("SELECT Users.id, Users.firstname, Users.lastname, Users.mail FROM Users INNER JOIN Works On Users.id = Works.userId WHERE Works.projectId = " + projectId);
            project.meetings = meetings[0];
            project.users = users[0];

            LogService.writeLog("User " + userId + " get " + project.meetings.length + " meetings from project " + projectId);


            return project;
        }
        catch{
            return false;
        }
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
                LogService.writeLog("User " + userId + " create the project " + result.dataValues.name  + " with id : " + projectId);

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
            LogService.writeLog("User " + userId + " try to create a new project but database return an error");
            return false;
        }
    }

    async assignUserToProject(userId,projectId){

        //assign a user to a specific project
        if(await UserProjectModel.findOne({where:{userId,projectId}})){
            return false;
        }
        try{
            UserProjectModel.create({userId,projectId});
            return true;
        }
        catch{
            return false;
        }
    } 
}

module.exports = new ProjectService();