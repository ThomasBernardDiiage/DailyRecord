// Dependencies
const MeetingService = require('../services/meetingService');
const { response } = require('../app');
const { createProject } = require('../services/projectService');
const LogService = require('../services/logService');
const TokenService = require('../services/tokenService');


class MeetingController{
    async getMeetings(request, response){ // Get all the meetings for the parameter project
        const meetings = await MeetingService.getMeetings(request.params.projectId);

        response.status(200).send(meetings);
    }

    async getMeeting(request, response){ // Get the meeting related of the parameter id
        const meeting = await MeetingService.getMeeting(request.params.meetingId);
        
        response.status(200).send(meeting);
    }

    async createMeeting(request, response){ // Add one stamp with the parameters informations

        const duration = request.body.duration;
        const description = request.body.name;
        const blob = request.body.blob;
        const file = request.body.file;
        const nameFile = request.body.nameFile;
        const date = request.body.date;
        const projectId = request.params.id; // Get the id of the project
        const userId = TokenService.getUserId(request.headers.authorization); // get the user id


        const meetingCreated = await MeetingService.createMeeting(duration, description, '', date, projectId, blob, nameFile);

        console.log(meetingCreated);
        LogService.writeLog("User " + userId + " create the meeting " + meetingCreated.dataValues.id + " in the project " + projectId);


        if(meetingCreated){
            response.status(200).send();
        }
        else{
            response.status(418).send("Can't create this meeting");
        }
    }

    async setMeeting(request, response){ // Set the meeting that correspond to the id parameter
        const id = request.body.id;
        const duration = request.body.duration;
        const description = request.body.description;
        const file = request.body.file;
        const date = request.body.date;

        const meetingUpdated = await MeetingService.setMeeting(id, duration, description, file, date);

        if(meetingUpdated){
            response.status(200).send();
        }

        else{
            response.status(418).send();
        }
    }
}

module.exports = new MeetingController