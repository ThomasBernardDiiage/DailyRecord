const Sequelize = require('sequelize');
const CommentModel = require('../models/commentModel');

const sequelize = new Sequelize('DbDailyRecord','root','Azerty@123',{
    host:'localhost',
    dialect:'mysql'
})

class CommentService {
    // create a comment for a meeting
    async createComment(meetingId, userId, text){
        return await CommentModel.create({meetingId, userId, text});


    }

    // Get all comments of a meeting
    async getComments(meetingId){
        return await sequelize.query(""); 
    }
}

module.exports = new CommentService();