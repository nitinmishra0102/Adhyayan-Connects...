const jwt = require('jsonwebtoken');
const { jwtToken } = require('../database/env'); 

// ✅ Generate JWT Token
exports.generateToken = (user) => {
    return jwt.sign(
        {
            id: user.id,
            email: user.email, 
            role: user.role || "user" // Add role-based access if needed
        },
        jwtToken,
        { expiresIn: '1h' } // Token expires in 1 hour
    );
};

// ✅ Verify JWT Token
exports.verifyToken = (token) => {
    try {
        return jwt.verify(token, jwtToken);
    } catch (error) {
        console.error("JWT verification failed:", error.message);
        return null;  // Return null if token is invalid or expired
    }
};

// ✅ Middleware for Protected Routes (Optional)
exports.authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unauthorized: No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = exports.verifyToken(token);

    if (!decoded) {
        return res.status(403).json({ error: "Unauthorized: Invalid or expired token" });
    }

    req.user = decoded; // Attach user data to request
    next(); // Proceed to the next middleware
};
