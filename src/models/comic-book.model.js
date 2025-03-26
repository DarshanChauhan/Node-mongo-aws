const mongoose = require("mongoose");

const comicBookSchema = new mongoose.Schema(
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
comicBookSchema.index({ name: 1 });
const ComicBook = mongoose.model("ComicBook", comicBookSchema);
module.exports = ComicBook;
