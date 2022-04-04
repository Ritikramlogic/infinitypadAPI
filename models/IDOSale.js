const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    tokenName: { type: String, required: true },
    tokenSymbol: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("IDOSale", schema);
