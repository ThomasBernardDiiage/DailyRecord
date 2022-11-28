const SharedMeetingModel = require('../models/sharedMeetingModel');
const MeetingService = require('../services/meetingService');


class SharedMeetingService{


    async createSharedMeeting(id, meetingId, expirationDate){
        try{
            await SharedMeetingModel.create({
                id,
                meetingId,
                expirationDate
            });

            return true;
        }
        catch {
            return false;
        }
    }

    async getSharedMeeting(id){

        try{
            const sharedMeeting = await SharedMeetingModel.findOne({
                where:{id}
            });
            
    
            const result =  await MeetingService.getMeeting(sharedMeeting.dataValues.meetingId);
    
            return result
        }
        catch{
            return false
        }
        
    }
}


module.exports = new SharedMeetingService();