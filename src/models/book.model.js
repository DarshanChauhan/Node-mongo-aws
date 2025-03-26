const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    name: { type: String },
    authorId: {
      type: mongoose.Schema.ObjectId,
      ref: "Author",
      required: true,
    },
    bookPublishDate: { type: Date },
  },
  { timestamps: true }
);
bookSchema.index({ name: 1 }); 
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
