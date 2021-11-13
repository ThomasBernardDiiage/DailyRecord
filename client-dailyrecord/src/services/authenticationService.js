//#region all imports
    import Axios from 'axios';
//#endregion


export default class AuthenticationService{

    // This method allow to login a user
    // Take email and password in parameters
    // Return a bool
    async login(email, password){

        await Axios.post('http://localhost:3000/authentication/login', {email, password}) // Make the api call
    }

    async register(email, password, firstname, lastname){
        try{
            await Axios.post('http://localhost:3000/authentication/register', {email, password, firstname, lastname}); // Make the api call
            return true;
        }catch{
            return false;
        }
    }
}
