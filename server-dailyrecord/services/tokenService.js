const jwt_decode = require('jwt-decode');


class TokenService{

    getUserId(token){
        const decodedToken = jwt_decode(token);
        console.log(decodedToken);
    }
}

module.exports = new TokenService();