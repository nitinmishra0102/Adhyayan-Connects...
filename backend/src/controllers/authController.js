// const bcrypt = require("bcryptjs");
// const jwtHelper = require('../utils/jwtHelper');
// const db = require("../database/db")
// const User = require("../models/user");


// exports.signup = async (req, res) => {
//   try {
//     console.log("Signup request:", req.body);

//     const { firstName, lastName, email, schoolEmail, phone, gender, password, userType, acceptTerms } = req.body;
//     const emailField = userType === "recruiter" ? schoolEmail : email;

//     if (!firstName || !emailField || !password || !acceptTerms) {
//       return res.status(400).json({ error: "All required fields must be filled." });
//     }

//     console.log("Email to check:", emailField);

//     const existingUser = await User.findUserByEmail(emailField).catch(err => {
//       console.error("Error finding user by email:", err);
//       throw new Error("Database query failed");
//     });

//     if (existingUser) {
//       return res.status(400).json({ error: "User already exists." });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     await User.createUser({ firstName, lastName, email, schoolEmail, phone, gender, password: hashedPassword, userType });

//     res.status(201).json({ message: "User registered successfully!" });
//   } catch (error) {
//     console.error("Signup error:", error);
//     res.status(500).json({ error: "Server error. Please try again later." });
//   }
// };


// exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     pool.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
//       if (err || results.length === 0) {
//         return res.status(401).json({ error: 'Invalid credentials' });
//       }
//       const user = results[0];
//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) {
//         return res.status(401).json({ error: 'Invalid credentials' });
//       }
//       const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//       res.json({ token });
//     });
//   } catch (error) {
//     res.status(500).json({ error: 'Server error' });
//   }
// };





const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../database/db");
const { jwtToken } = require("../database/env");
const User = require("../models/user");
const redisClient = require("../database/redis")
const { generateToken } = require("../utils/jwtHelper"); // Import your existing JWT function

const generateOTP = ()=> Math.floor(100000 + Math.random() * 900000).toString();

exports.signup = async (req, res) => {
  try {
    const { firstName, lastName, email, schoolEmail, phone, gender, password, userType, acceptTerms } = req.body;
    const emailField = userType === "recruiter" ? schoolEmail : email;

    if (!firstName || !emailField || !password || !acceptTerms) {
      return res.status(400).json({ error: "All required fields must be filled." });
    }

    // Check if user exists based on userType
    const existingUser = await User.findUserByEmail(emailField, userType); // Modify findUserByEmail to accept userType
    if (existingUser) {
      return res.status(400).json({ error: "User already exists." });
    }

    // Hash password and create user
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.createUser({
      firstName, lastName, email, schoolEmail, phone, gender, password: hashedPassword, userType
    });

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, userType, password } = req.body;
    console.log(req.body)

    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    if (!userType || typeof userType !== 'string') {
      return res.status(400).json({ message: 'User type is required and must be a string' });
    }

    const validUserTypes = ['candidate', 'recruiter'];
    const normalizedUserType = userType.toLowerCase();
    
    if (!userType || !validUserTypes.includes(userType.toLowerCase())) {
      return res.status(400).json({ message: 'Invalid or missing user type' });
    }
    

    // Find user by email and userType
    const user = await User.findUserByEmail(email.toLowerCase(), normalizedUserType);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.PASSWORD);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.ID, userType: normalizedUserType }, jwtToken, { expiresIn: '1h' });

    return res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user.ID,
        email: user.EMAIL,
        userType: normalizedUserType
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
};



// Send OTP

exports.verifyOtp = async (req, res) => {
  const { identifier, otp } = req.body;

  if (!identifier || !otp) {
      return res.status(400).json({ error: "Email/Mobile and OTP are required" });
  }

  const cacheKey = `OTP:${identifier}`;
  const storedOtp = await redisClient.get(cacheKey);

  if (!storedOtp || storedOtp !== otp) {
      return res.status(400).json({ error: "Invalid or expired OTP" });
  }

  await redisClient.del(cacheKey); // Remove OTP after successful verification

  // ✅ Fetch user details based on email or mobile from DB
  const user = await getUserByIdentifier(identifier); // Implement this function in your user model

  if (!user) {
      return res.status(404).json({ error: "User not found" });
  }

  // ✅ Generate JWT Token using existing logic
  const token = generateToken({ id: user.id, email: user.email, mobile: user.mobile });

  res.json({ message: "OTP verified successfully", token });
};