const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Get token from 'Authorization' header
    if (!token) return res.status(401).json({ message: 'Access denied' });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified; // Attach the decoded token to the request object
        next();
    } catch (error) {
        res.status(403).json({ message: 'Invalid token' });
    }
};

// POST /login route for authentication
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Simple check for hardcoded credentials
    if (username === 'saad' && password === 'saad') {
        // Generate a JWT token
        const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.json({ token });
    } else {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Protected route
router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: `Hello ${req.user.username}, you have access to this protected route!` });
});

module.exports = router;
