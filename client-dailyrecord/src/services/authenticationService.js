//#region all imports
    import Axios from 'axios';
//#endregion


export default class AuthenticationService{

    // This method allow to login a user
    // Take email and password in parameters
    // Return a bool
    async login(email, password){
        console.log('try login with ' + email + password); // Call the API with the email adress and the password

        await Axios.post('http://localhost:3000/authentication/login', {email, password})
    }

    register(email, password, firstName, LastName){
        console.log('try register with ' + email + password + firstName + LastName);
    }
}
