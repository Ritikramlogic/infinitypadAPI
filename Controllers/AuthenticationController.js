const Authentication = require("../models/Authentication");

module.exports = {
  SignupController: function (req, res) {
    const { email, password } = req.body;
    console.log(email, password);
    const newAuthentication = new Authentication({
      email,
      password,
    });
    newAuthentication
      .save()
      .then(() => {
        res.status(200).json({
          message: "Authentication created successfully!",
        });
      })
      .catch((err) => {
        res.status(400).json({
          error: err,
        });
      });
  },
  LoginController: function (req, res) {
    const { email, password } = req.body;
    console.log(email, password);
    Authentication.findOne({ email, password })
      .then((authentication) => {
        if (!authentication) {
          return res.status(404).json({
            message: "Authentication not found!",
          });
        }
        res.status(200).json({
          message: "Authentication found!",
          authentication,
        });
      })
      .catch((err) => {
        res.status(400).json({
          error: err,
        });
      });
  },
  ForgotController: function (req, res) {
    const { email, password } = req.body;
    Authentication.findOneAndUpdate(
      { email: email },
      {
        password: password,
      },
      { useFindAndModify: false }
    )
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Authentication not found!`,
            status: false,
          });
        } else res.send({ message: "Authentication updated", status: true });
      })
      .catch((err) => {
        res.status(500).send({
          message: `Error updating Authentication`,
          status: false,
        });
      });
    // res.status(200).json({
    //   message: "Authentication found!",
    //   authentication,
    // });
    //   })
    //   .catch((err) => {
    //     res.status(400).json({
    //       error: err,
    //     });
    //   });
  },
};
