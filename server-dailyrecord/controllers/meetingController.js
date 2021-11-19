// Dependencies
const MeetingService = require('../services/meetingService');
const { response } = require('../app');

class MeetingController{
    async getMeetings(request, response){ // Get all the stamps for the parameter meeting
        const meetings = await MeetingService.getMeetings(request.params.projectId);

        response.status(200).send(meetings);
    }

    async getMeeting(request, response){ // Get the stamp related of the parameter id
        const meeting = await MeetingService.getMeeting(request.params.meetingId);
        
        response.status(200).send(meeting);
    }

    async createMeeting(request, response){ // Add one stamp with the parameters informations
        const id = request.body.id;
        const duration = request.body.duration;
        const description = request.body.description;
        const file = request.body.file;
        const date = request.body.date;
        const projectId = request.body.projectId;

        const meetingCreated = await MeetingService.createMeeting(id, duration, description, file, date, projectId);

        if(meetingCreated){
            response.status(200).send();
        }

        else{
            response.status(418).send();
        }
    }
}

module.exports = new MeetingController