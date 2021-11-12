class AuthenticationService{
    login(email, password){
        console.log('Log in with the mail : ' + email + ' and the password : ' + password);
    }

    register(email, password, firstname, lastname){
        console.log('Register with email : ' + email + ' password : ' + password + ' firstname : ' + firstname + ' lastname : ' + lastname);
    }
}


module.exports = new AuthenticationService();