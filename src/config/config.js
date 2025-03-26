const mongoose = require("mongoose");

const db = mongoose.connect(`${process.env.DB_URL}`);
db.then((res) => {
  if (res) {
    console.log("✅ Database connected!");
  }
});
module.exports = { db };
