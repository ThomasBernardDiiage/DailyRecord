const express = require('express');
const multer = require('multer');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const MeetingService = require('../services/meetingService')
const Config = require('../config')


var appDirectory = path.dirname(__dirname)
var fileName=String(Date.now()+'_'+(Math.floor(Math.random()*1000000))+'.ogg'); //generate first name for first meeting upload
const storage = multer.diskStorage({
    destination: (req,file,callback) => {
        if(!fs.existsSync('./recordings'))
            fs.mkdirSync('./recordings')
        callback(null,'recordings/')
    },
    filename: (req, file, callback) => {
        callback(null,fileName)
    }
})

const upload = multer({storage:storage}).single('audio');

router.post('/', upload, (req, res)=>{
    completeFilePath=appDirectory+"/recordings/"+fileName   //produce file path
    
    var OldFileName=fileName             
    fileName=String(Date.now()+'_'+(Math.floor(Math.random()*1000000))+'.ogg'); //Generate new name for next meeting upload
    res.status(200).send(OldFileName)                  //Sending file path back to client to have it sent to client. the client will then request an SQL row's creation using it.
})

router.get('/getFile/:id', async function(req,res,next) {
    try{
        let meetingFile = await MeetingService.getMeeting(req.params.id)
        const meetingFileName = meetingFile.file;
    
        var options = {
            root: path.join(__dirname,'/../recordings/')
    }

    
        res.status(200).sendFile(meetingFileName,options)
    }
    catch{
        res.status(418).send();
    }
})




module.exports=router;