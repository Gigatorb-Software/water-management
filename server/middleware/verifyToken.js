// import jwt from "jsonwebtoken";
const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    try {
        // Retrieve token from cookies
        const token = req.cookies.token;
        
        if (!token) {
            return res.status(403).json({
                message: "User not authenticated",
                success: false,
            });
        }

        // Verify the token
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        if (!decode) {
            return res.status(401).json({
                message: "Invalid token",
                success: false
            });
        }

        // Attach user id to request object
        req.id = decode.id;
        next();
    } catch (error) {
        return res.status(500).json({ message: 'Token verification failed', success: false });
    }
}

module.exports = verifyToken;


// const verifyToken = (req, res, next) => {
//     const token = req.headers['authorization'];
  
//     if (!token) {
//       return res.status(403).json({ message: 'No token provided' });
//     }
  
//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//       if (err) {
//         return res.status(401).json({ message: 'Unauthorized access' });
//       }
  
//       req.userId = decoded.id;
//       next();
//     });
//   };
  
//   module.exports = verifyToken;
  