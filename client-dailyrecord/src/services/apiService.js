//#region all imports
    import Axios from 'axios';
    import Config from '../../config';
//#endregion

export default class ApiService{

    // return a json content or false
    static async sendGetWithToken(url, useToken){
        try{
            if(useToken){
                return await Axios.get(Config.serverUrl + url, {
                    headers:{
                        Authorization: localStorage.getItem("JsonWebToken")
                    }
                });
            }
        }
        catch {
            return false;
        }
    }

    static async sendPostWithToken(url, body, useToken){
        try{
            if(useToken){
                return await Axios.post(Config.serverUrl + url, body, {
                    headers:{
                        Authorization: localStorage.getItem("JsonWebToken")
                    }
                })
            }
            else{
                return await Axios.post(Config.serverUrl + url, body);
            }
        }
        catch {
            return false;
        }
        
    }
}