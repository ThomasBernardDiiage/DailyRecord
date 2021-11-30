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

    async createStamp(location, name, meetingId){ // Add one stamp with the parameters informations
        try{
            const result = await StampModel.create({
                location: location,
                name: name,
                meetingId: meetingId
            });

            return true;
        } catch{
            return false;
        }
    }

    async setStamp(id, location, name){ // Set the stamp that correspond to the id parameter
        try{
            const result = await StampModel.update({
                id: id,
                location: location,
                name: name
            },{
                where: {
                    id: id
                }
            });

            return true;
        } catch{
            return false;
        }
    }
}

module.exports = new StampService();