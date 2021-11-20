// Dependencies
const MeetingModel = require('../models/meetingModel');
const Sequelize = require('sequelize');
const { request } = require('express');

const sequelize = new Sequelize('DbDailyRecord','root','Azerty@123',{
    host:'localhost',
    dialect:'mysql'
})

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

    async createMeeting(duration, description, file, date, projectId){ // Add one stamp with the parameters informations
        try{

            const result = await MeetingModel.create({
                duration: duration,
                description: description,
                file: file,
                date: date,
                projectId: projectId
            });
            console.log("==============");
            console.log(result);

            return result;
        } catch{
            return false;
        }
    }
}

module.exports = new MeetingService();