const {User, UserSchema} = require('./user.model');


function setupModels(_sequelize) {
  User.init(UserSchema, User.config(_sequelize))

}

module.exports = setupModels;
