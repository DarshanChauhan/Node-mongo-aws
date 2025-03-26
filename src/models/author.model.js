const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    name: { type: String },
    authorCity: { type: String },
    books: [
      { type: mongoose.Schema.ObjectId, ref: "Book" },
      { type: mongoose.Schema.ObjectId, ref: "ComicBook" },
    ],
  },
  { timestamps: true }
);
authorSchema.index({ name: 1 }); 
const Author = mongoose.model("Author", authorSchema);
module.exports = Author;
