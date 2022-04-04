const {
  SignupController,
  LoginController,
  ForgotController,
} = require("../Controllers/AuthenticationController");
const { IDOApplyController } = require("../Controllers/IDOController");
var router = require("express").Router();

module.exports = function (app) {
  // Authentication Controller
  app.post("/auth", SignupController);
  app.post("/auth/login", LoginController);
  app.post("/auth/forgot", ForgotController);

  //IDO Apply Controller
  app.post("/ido/apply", IDOApplyController);
};
