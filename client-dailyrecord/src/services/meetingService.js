//#region all imports
    //import { post } from '../../../server-dailyrecord/routes';
import ApiService from '../services/apiService';
//#endregion

export default class MeetingService{
    
    async createMeeting(duration, name, audioBlob, date, projectId){
        
        console.log('audio blob is:',audioBlob)
        if(audioBlob===undefined)
        {   alert("Record something first!")
            return false
        }
        const formData = new FormData()
        formData.append('audio', audioBlob);
        
        var filePath;

        await fetch('http://localhost:3000/multer/',{
            method: 'POST',
            body:formData,
        })
            .then(data => 
                data.text().then( result =>
                    filePath=result
                )
        )   .catch(error => 
                alert(error)
        );

        console.log('file path:',filePath)

        if(filePath){
            console.log(filePath);
            var resultCall = await ApiService.sendPostWithToken('project/' + projectId + '/meeting', {
                duration,
                name,
                file:filePath,
                date,
                projectId
            }, true);
        }
        else{
            console.error('filePath invalid, no data was committed to DB.');
            return false
        }


        // var formData = new FormData();
        // formData.append('audio', audioBlob, 'recording.mp3')

        // const url = ApiService.baseUrl + 'project/' + projectId + '/meeting';
        
        // const result = await fetch(url, {
        //     method: 'POST',
        //     body: formData
        // });

        console.log(resultCall);

        

        return resultCall;
    }


    async getMeeting(projectId, meetingId){
        const resultCall = await ApiService.sendGetWithToken('project/' + projectId + '/meeting/' + meetingId, true);
        return resultCall.data;
    }

}