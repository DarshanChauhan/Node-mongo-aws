const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema(
  {
    userId: { type: String },
    token: { type: String },
  },
  { timestamps: true }
);
const Session = mongoose.model("Session", sessionSchema);
module.exports = Session;
