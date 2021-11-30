// Dependencies
const MeetingModel = require('../models/meetingModel');

const Sequelize = require('sequelize');
const { request } = require('express');

const sequelize = new Sequelize('DbDailyRecord','root','Azerty@123',{
    host:'localhost',
    dialect:'mysql'
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
        const comments = await sequelize.query("SELECT Comments.id, Comments.text, Users.id, Users.firstname, Users.lastname FROM Comments INNER JOIN Users ON Comments.userId = Users.id WHERE Comments.meetingId = " + meetingId);

        meeting.dataValues.comments = comments[0];
        console.log(meeting);

        return meeting;
    }

    async createMeeting(duration, description, file, date, projectId, blob, nameFile){ // Add one meeting with the parameters informations
        try{
            //const result = await uploadAudio(nameFile, blob);
            const result = await MeetingModel.create({duration, description, file, date, projectId});

            return result;
        } catch{
            return false;
        }
    }

    async setMeeting(id, duration, description, file, date){ // Set the meeting that correspond to the id parameter
        try{
            const result = await MeetingModel.update({
                duration: duration,
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
                audioUrl: `html://localhost/audio/${nameFile}.mp3` // 10.4.10.2
            });

            audio.save();

            return true;
        } catch{
            return false;
        }
    }
}

module.exports = new MeetingService();