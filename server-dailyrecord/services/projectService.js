const Sequelize = require('sequelize');
const ProjectModel = require('../models/projectModel');
const UserModel = require('../models/userModel');
const UserProjectModel = require('../models/userProjectModel');

const sequelize = new Sequelize('DbDailyRecord','root','Azerty@123',{
    host:'localhost',
    dialect:'mysql'
})

class ProjectService{

    async getProjects(userId){
        let result = {};

        const projects = await sequelize.query("SELECT Projects.id, Projects.name, Projects.description FROM Projects INNER JOIN Works ON Projects.id = Works.projectId WHERE Works.userId = " + userId);
        const user = await sequelize.query("SELECT Users.firstname, Users.lastname, Users.mail FROM Users WHERE Users.id = " + userId);
        result.projects = projects[0];
        result.user = user[0][0];

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