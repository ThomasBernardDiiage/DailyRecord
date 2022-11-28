const jwt_decode = require('jwt-decode');


class TokenService{

    getUserId(token){
        try{
            const decodedToken = jwt_decode(token);

            return decodedToken.sub;
        }
        catch{
            return false;
        }
    }
}

module.exports = new TokenService();