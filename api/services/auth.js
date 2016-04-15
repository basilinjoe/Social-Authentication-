var jwt = require('jwt-simple');
var moment = require('moment');

module.exports = {
  createJWT:function createJWT(user) {
    var payload = {
      sub: user.id,
      iat: moment().unix(),
      exp: moment().add(14, 'days').unix()
    };
    return jwt.encode(payload, sails.config.globals.TOKEN_SECRET);
  }
}
