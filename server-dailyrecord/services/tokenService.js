const jwt_decode = require('jwt-decode');


class TokenService{

    getUserId(token){
        const decodedToken = jwt_decode(token);

        return decodedToken.sub;
    }
}

module.exports = new TokenService();