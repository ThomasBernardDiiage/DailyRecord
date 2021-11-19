// Dependencies
const MeetingModel = require('../models/meetingModel');

class MeetingService{
    async getMeetings(projectId){ // Get all the stamps for the parameter meeting
        const meetings = await MeetingModel.findAll({
            where:{
                projectId: projectId
            }
        });

        return meetings;
    }

    async getMeeting(meetingId){ // Get the stamp related of the parameter id
        const meeting = await MeetingModel.findByPk(meetingId);

        return meeting;
    }

    async createMeeting(id, duration, description, file, date, projectId){ // Add one stamp with the parameters informations
        try{
            const result = await MeetingModel.create({
                id: id,
                duration: duration,
                description: description,
                file: file,
                date: date,
                projectId: projectId
            });

            return true;
        } catch{
            return false;
        }
    }
}

module.exports = new MeetingService();