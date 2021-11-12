//#region all imports
    // import Axios from 'axios';
//#endregion


class AuthenticationService{

    // This method allow to login a user
    // Take email and password in parameters
    // Return a bool
    login(email, password){
        console.log('try login with ' + email + password); // Call the API with the email adress and the password
    }

    register(email, password, firstName, LastName){
        console.log('try register with ' + email + password + firstName + LastName);
    }
}

module.exports = new AuthenticationService(); // register a new singleton