//#region all imports
    import Axios from 'axios';
    import Router from '../router/index'; // Import router for navigation
//#endregion


export default class AuthenticationService{

    // This method allow to login a user
    // Take email and password in parameters
    // Return a bool
    async login(email, password){
        try{
            const callResult = await Axios.post('http://localhost:3000/authentication/login', {email, password}) // Make the api call
            localStorage.setItem('JsonWebToken',callResult.data);
            return true;
        }
        catch{
            return false;
        }
    }

    async register(email, password, firstname, lastname){
        try{
            await Axios.post('http://localhost:3000/authentication/register', {email, password, firstname, lastname}); // Make the api call
            return true;
        }catch{
            return false;
        }
    }

    // Remove the webtoken from memory
    // And go to the loginpage
    async logout(){
        localStorage.removeItem('JsonWebToken'); // remove the token in memory
        Router.push('/'); // go to loginPage

    }
}
