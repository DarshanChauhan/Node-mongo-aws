const jwt = require("jsonwebtoken");
const message = require("../constants/constants");

const authMiddleware = (req, res, next) => {
  if (req.url.startsWith(message.ROUTE_PREFIX)) return next();

  const authToken = req.headers.authorization?.split(" ")[1];
  if (!authToken) {
    return res.status(401).json({ message: message.UNAUTHORIZED, status: 401 });
  }

  try {
    const payload = jwt.verify(authToken, process.env.SECRET_KEY);
    req.userId = payload.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: message.TOKEN_EXPIRE, status: 401 });
  }
};

module.exports = authMiddleware;
