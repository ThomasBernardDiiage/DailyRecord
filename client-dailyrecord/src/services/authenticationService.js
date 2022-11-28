//#region all imports
    import Router from '../router/index'; // Import router for navigation
    import ApiService from '../services/apiService'; // Import the service
//#endregion


export default class AuthenticationService{

    // This method allow to login a user
    // Take email and password in parameters
    // Return a bool
    async login(email, password){

        const callResult = await ApiService.sendPostWithToken('authentication/login', {email, password}, false);

        if(callResult){
            localStorage.setItem('JsonWebToken',callResult.data);
            return true;
        } 
        else {
            return false;
        }
    }

    async register(email, password, firstname, lastname){
        const resultCall = await ApiService.sendPostWithToken('authentication/register', {email, password, firstname, lastname}, false); // Make the api call

        if(resultCall){
            return true;
        } else {
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
