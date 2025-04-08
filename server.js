const express = require("express");
const dotenv = require("dotenv");

const authMiddleware = require("./src/middleware/middleware");
const router = require("./src/routes/routes");

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(authMiddleware);

require("./src/config/config");

app.use(router);

const globalError = require("./src/error/error");
app.use(globalError);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
