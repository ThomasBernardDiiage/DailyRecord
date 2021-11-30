// Dependencies
const TokenService = require('../services/tokenService');
const CommentService = require('../services/commentService');



class CommentController{
    async createComment(request, response){

    }

    async getComments(request, response){
        const meetingId = request.params.meetingId;
        const userId = TokenService.getUserId(request.headers.authorization); // Get the user id

        const comments = CommentService.getComments(meetingId);

        if(comments)
            response.status(200).send(comments);
        else 
            response.status(404).send();
    }


}

module.exports = new CommentController