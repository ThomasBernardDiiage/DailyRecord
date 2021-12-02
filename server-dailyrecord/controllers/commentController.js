// Dependencies
const TokenService = require('../services/tokenService');
const CommentService = require('../services/commentService');
const LogService = require('../services/logService');




class CommentController{
    async createComment(request, response){
        try{
            const meetingId = request.params.meetingId; // Get the meeting Id in the request URL
            const userId = TokenService.getUserId(request.headers.authorization); // Get the user id
            const text = request.body.text; // Get the text in the body of the request

            const commentCreated = await CommentService.createComment(meetingId, userId, text); // Call the method in Comment Service

            if(commentCreated){ // If the comment is created
                LogService.writeLog("User " + userId + " create the comment " + commentCreated.dataValues.id + " in the meeting " + meetingId);
                response.status(200).send("Comment created"); // return status 200
            }
            else {
                response.status(404).send("Can't create this comment"); // return error
            }
        }
        catch {
            response.status(418).send("Server error"); // return server error
        }
    }

    async getComments(request, response){
        try{
            const meetingId = request.params.meetingId; // Get the meeting Id in the request URL

            const comments = CommentService.getComments(meetingId); // get all comments from services

            if(comments)
                response.status(200).send(comments);
            else 
                response.status(404).send("Can't get comments");
        }
        catch {
            response.status(418).send("Server error in commentController.getComments( )");
        }
    }


}

module.exports = new CommentController