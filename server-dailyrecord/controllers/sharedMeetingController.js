const SharedMeetingService = require('../services/sharedMeetingService');

class SharedMeetingController{

    async createSharedMeeting(request, response){

        try{

            const id = Math.floor(Math.random()*1000000);
            const meetingId = request.body.meetingId;
            const expirationDate = '2021-12-08';

            const sharedMeetingCreated = await SharedMeetingService.createSharedMeeting(id, meetingId, expirationDate);

            if(sharedMeetingCreated){
                response.status(200).send(id.toString());
            }
            else{
                response.status(405).send();
            }
        }

        catch {
            response.status(404).send();
        }
    }


    async getSharedMeeting(request, response){
        try{
            console.log("++++++++++++++++++++");
            const sharedMeetingId = request.params.sharedMeetingId;
            console.log("===============================");


            const result = await SharedMeetingService.getSharedMeeting(sharedMeetingId);

            console.log("===============================");
            console.log(result);

            response.status(200).send(result);
        }

        catch {

            response.status(404).send();
        }
    }
}


module.exports = new SharedMeetingController();