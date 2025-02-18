exports.validateSignup = (req, res, next) => {
    const { firstName, email, password, confirmPassword, acceptTerms, userType } = req.body;

    if (!firstName || !email || !password || !confirmPassword || !acceptTerms || !userType) {
        return res.status(400).json({ error: "All fields are required." });
    }

    if (password.length < 6) {
        return res.status(400).json({ error: "Password must be at least 6 characters long." });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match." });
    }

    if (!["candidate", "recruiter"].includes(userType)) {
        return res.status(400).json({ error: "Invalid user type. Must be 'candidate' or 'recruiter'." });
    }

    next(); 
};
