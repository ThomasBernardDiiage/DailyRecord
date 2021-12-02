const express = require('express');
const multer = require('multer');
const router = express.Router();
const Multer = require('multer');
const path = require('path');

var appDirectory = path.dirname(__dirname)
var fileName=String(Date.now()+'_'+(Math.floor(Math.random()*1000000))+'.ogg'); //generate first name for first meeting upload
const storage = Multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null,'recordings/')
    },
    filename: (req, file, callback) => {
        callback(null,fileName)
    }
})

const upload = multer({storage:storage}).single('audio');

router.post('/', upload, (req, res)=>{
    completeFilePath=appDirectory+"/recordings/"+fileName   //produce file path
    console.log('file named : ',fileName);                  //Logging...
    console.log('expected file path:'+completeFilePath)
    var OldFileName=fileName             
    fileName=String(Date.now()+'_'+(Math.floor(Math.random()*1000000))+'.ogg'); //Generate new name for next meeting upload
    res.status(200).send(OldFileName)                  //Sending file path back to client to have it sent to client. the client will then request an SQL row's creation using it.
})



module.exports=router;