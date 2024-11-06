// middleware/authenticate.js
import jwt from "jsonwebtoken";

// Secret key for JWT verification (same as used during token creation)
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "your_secret_key";

export const authenticate = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET_KEY); // Decode the token
    req.user = decoded; // Attach the decoded user data to the request object
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
