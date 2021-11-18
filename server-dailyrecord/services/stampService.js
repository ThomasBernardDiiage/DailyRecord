// Dependencies
const StampModel = require('../models/stampModel');

class StampService{
    async getStamps(meetingId){ // Get all the stamps for the parameter meeting
        const stamps = await StampModel.findAll({
            where:{
                meetingId: meetingId
            }
        });

        return stamps;
    }

    async getStamp(stampId){ // Get the stamp related of the parameter id
        const stamp = await StampModel.findByPk(stampId);

        return stamp;
    }

    async createStamp(id, location, name, meetingId){ // Add one stamp with the parameters informations
        try{
            const result = await StampModel.create({
                id: id,
                location: location,
                name: name,
                meetingId: meetingId
            });

            return true;
        } catch{
            return false;
        }
    }
}

module.exports = new StampService();