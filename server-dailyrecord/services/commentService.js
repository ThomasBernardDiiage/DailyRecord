const Sequelize = require('sequelize');

const sequelize = new Sequelize('DbDailyRecord','root','Azerty@123',{
    host:'localhost',
    dialect:'mysql'
})

class CommentService {
    // create a comment for a meeting
    async createComment(meetingId, idCreator, text, creationDate){

    }

    // Get all comments of a meeting
    async getComments(meetingId){
        return await sequelize.query(""); 
    }
}

module.exports = new CommentService();