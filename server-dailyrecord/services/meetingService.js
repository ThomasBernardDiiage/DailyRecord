// Dependencies
const MeetingModel = require('../models/meetingModel');
const CommentService = require('./commentService');
const StampService = require('./stampService');
const LogService = require('../services/logService');
const Config = require('../config');
const Sequelize = require('sequelize');
const { request } = require('express');

const sequelize = new Sequelize(Config.databaseName,Config.databaseUser,Config.databasePassword,{
    host:Config.databaseIPAddress,
    dialect:Config.databaseDialect
})

class MeetingService{
    async getMeetings(projectId){ // Get all the meetings for the parameter project
        const meetings = await MeetingModel.findAll({
            where:{
                projectId: projectId
            }
        });

        return meetings;
    }

    async getMeeting(meetingId){ // Get the meeting related of the parameter id
        const meeting = await MeetingModel.findByPk(meetingId);
        const comments = await CommentService.getComments(meetingId);
        const stamps = await StampService.getStamps(meetingId);

        meeting.dataValues.comments = comments; // add the tab comment in meeting
        meeting.dataValues.stamps = stamps;

        
        return meeting;
    }

    async createMeeting(description, file, date, projectId){ // Add one meeting with the parameters informations
        try{
            //const result = await uploadAudio(nameFile, blob);
            const result = await MeetingModel.create({description, file, date, projectId});

            return result;
        } catch{
            return false;
        }
    }

    async setMeeting(id, description, file, date){ // Set the meeting that correspond to the id parameter
        try{
            const result = await MeetingModel.update({
                description: description,
                file: file,
                date: date
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

    async uploadAudio(nameFile, blob){
        try{
            const audioObject = JSON.parse(blob);

            const audio = new Thing({
                ...audioObject,
                audioUrl: `html://localhost/recordings/${nameFile}.mp3` // 10.4.10.2
            });

            audio.save();

            return true;
        } catch{
            return false;
        }
    }
}

module.exports = new MeetingService();