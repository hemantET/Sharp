const UserModel = require("./auth/auth.model");
const AgendaModel = require("./agenda/agenda.model")
const AgendaService = require("./agenda/agenda.service")
const AuthService = require("./auth/auth.service");
const UserService = require("./user/user.service");


module.exports = {
  authService: new AuthService(UserModel),
  userService: new UserService(UserModel),
  agendaService: new AgendaService(AgendaModel)
  
};
