const Sequelize = require('sequelize');
const CommentModel = require('../models/commentModel');
const Config = require('../config');

const sequelize = new Sequelize(Config.databaseName,Config.databaseUser,Config.databasePassword,{
    host: Config.databaseIPAddress,
    dialect: Config.databaseDialect
})

class CommentService {
    // create a comment for a meeting
    async createComment(meetingId, userId, text){

        try {
            const result = await CommentModel.create({meetingId, userId, text}); // Insert the comment in the Db
            return result; // return the comment
        }
        catch {
            return false; // return false
        }
    }

    // Get all comments of a meeting
    async getComments(meetingId){
        const comments = await sequelize.query("SELECT Comments.id, Comments.text, Users.firstname, Users.lastname, Comments.createdAt FROM Comments INNER JOIN Users ON Comments.userId = Users.id WHERE Comments.meetingId = " + meetingId + " ORDER BY Comments.createdAt");
        return comments[0]; // return list of all comments
    }
}

module.exports = new CommentService();