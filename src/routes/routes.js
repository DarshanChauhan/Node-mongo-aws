const router = require("express").Router();
const authRoutes = require("./auth.routes");
const authorRoutes = require("./author.routes");
const bookRoutes = require("./book.routes");
const comicBookRoutes = require("./comic-book.routes");
const userRoute = require("./user.routes");
router.use("/user", userRoute);
router.use("/", (req, res) => {
  res.status(200).json({ Message: "Hello Darshan 👑" });
});
router.use("/auth", authRoutes);
router.use("/author", authorRoutes);
router.use("/book", bookRoutes);
router.use("/comic-book", comicBookRoutes);
module.exports = router;
