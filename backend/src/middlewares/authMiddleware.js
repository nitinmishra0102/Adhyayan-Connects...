const jwt = require('jsonwebtoken');
const session = require("express-session");
const RedisStore = require("connect-redis").default;
const redisClient = require("../database/redis");
const { verifyToken } = require('../utils/jwtHelper');

const authenticate = async(req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }

        const token = authHeader.split(' ')[1];
        const decoded = verifyToken(token);
        
        if (!decoded) {
            return res.status(403).json({ message: 'Unauthorized: Invalid or expired token' });
        }

         // Check Redis for session validation
         const sessionKey = `session:${decoded.id}`;
         const sessionData = await redisClient.get(sessionKey);
 
         if (!sessionData) {
             return res.status(401).json({ message: 'Session expired. Please log in again.' });
         }

        req.user = decoded; // Store user info in request for later use
        next(); // Proceed to the next middleware
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error during authentication' });
    }
};

module.exports = authenticate;
