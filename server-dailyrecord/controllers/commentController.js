// Dependencies
const TokenService = require('../services/tokenService');
const CommentService = require('../services/commentService');



class CommentController{
    async createComment(request, response){
        try{
            const meetingId = request.params.meetingId;
            const userId = TokenService.getUserId(request.headers.authorization); // Get the user id
            const text = request.body.text;

            const commentCreated = await CommentService.createComment(meetingId, userId, text);

            if(commentCreated){
                response.status(200).send();
            }
            else {
                response.status(404).send();
            }
        }
        catch {
            response.status(418).send();
        }
    }

    async getComments(request, response){
        try{
            const meetingId = request.params.meetingId;
            //const userId = TokenService.getUserId(request.headers.authorization); // Get the user id

            const comments = CommentService.getComments(meetingId);

        if(comments)
            response.status(200).send(comments);
        else 
            response.status(404).send();
        }
        catch {
            response.status(418).send();
        }
    }


}

module.exports = new CommentController