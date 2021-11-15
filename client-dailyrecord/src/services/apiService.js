//#region all imports
    import Axios from 'axios';
//#endregion

export default class ApiService{

    static baseUrl = 'http://localhost:3000/';

    // return a json content or false
    static async sendGetWithToken(url, useToken){
        try{
            if(useToken){
                return await Axios.get(this.baseUrl + url);
            }
        }
        catch {
            return false;
        }
    }

    static async sendPostWithToken(url, body, useToken){
        try{
            if(useToken){
                return await Axios.post(this.baseUrl + url, body, {
                    headers:{
                        Authorization: "Bearer " + localStorage.getItem("JsonWebToken")
                    }
                })
            }
            else{
                return await Axios.post(this.baseUrl + url, body);
            }
        }
        catch {
            return false;
        }
        
    }
}