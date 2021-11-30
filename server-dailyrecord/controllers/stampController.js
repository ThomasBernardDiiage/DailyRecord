// Dependencies
const StampService = require('../services/stampService');
const { response } = require('../app');

class StampController{
    async getStamps(request, response){ // Get all the stamps for the parameter meeting
        try {
            const stamps = await StampService.getStamps(request.params.meetingId);
            response.status(200).send(stamps);
        }
        catch {
            response.status(418).send();
        }

    }

    async getStamp(request, response){ // Get the stamp related of the parameter id
        const stamp = await StampService.getStamp(request.params.stampId);
        
        response.status(200).send(stamp);
    }

    async createStamp(request, response){ // Add one stamp with the parameters informations
        const location = request.body.location;
        const name = request.body.name;
        const meetingId = request.params.meetingId;



        const stampCreated = await StampService.createStamp(location, name, meetingId);

        if(stampCreated){
            response.status(200).send();
        }

        else{
            response.status(418).send();
        }
    }

    async setStamp(request, response){ // Set the stamp that correspond to the id parameter
        const id = request.body.id;
        const location = request.body.location;
        const name = request.body.name;

        const stampUpdated = await StampService.setStamp(id, location, name);

        if(stampUpdated){
            response.status(200).send();
        }
        else{
            response.status(418).send();
        }
    }
}

module.exports = new StampController