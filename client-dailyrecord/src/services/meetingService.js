//#region all imports
    import ApiService from '../services/apiService';
    import Config from '../../config';
//#endregion

export default class MeetingService{

    async createSharedMeeting(meetingId){
        const result = await ApiService.sendPostWithToken('sharedMeeting', {meetingId}, false);

        return result.data
    }

    async getSharedMeeting(sharedMeetingId){
        try {
            const result = await ApiService.sendGetWithToken('sharedMeeting/' + sharedMeetingId + '/', true);
            return result.data;
        }
        catch{
            return false;
        }
    }

    
    async createMeeting(name, audioBlob, date, projectId){

        
        if(audioBlob===undefined)
        {   alert("Record something first!")
            return false
        }
        const formData = new FormData()
        formData.append('audio', audioBlob);
        
        var filePath;

        await fetch(Config.serverUrl + 'multer/',{
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


        if(filePath){
            var resultCall = await ApiService.sendPostWithToken('project/' + projectId + '/meeting', {
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
        

        return resultCall;
    }

    async getMeeting(projectId, meetingId){
        const resultCall = await ApiService.sendGetWithToken('project/' + projectId + '/meeting/' + meetingId, true);
        return resultCall.data;
    }

    async getRecording(meetingId){
        var output
        await fetch(Config.serverUrl+'multer/getFile/'+meetingId,{
            method: 'GET'
        })
        
        return output;
    }
}