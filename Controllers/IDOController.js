const IDOSale = require("../models/IDOSale");

module.exports = {
  IDOApplyController: function (req, res) {
    const { tokenName, tokenSymbol } = req.body;
    const idoSale = IDOSale({
      tokenName,
      tokenSymbol,
    });
    idoSale
      .save()
      .then((data) => {
        res.json({ message: "IDO Sale updated successfully" });
      })
      .catch((err) => {
        res.json({ message: "IDO Sale cannot update!" });
      });
  },
};
