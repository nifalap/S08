// routes/charts.js
const express = require('express');
const router = express.Router();
const authRouter = require('./auth'); // Import the entire auth router
const authenticateToken = authRouter.authenticateToken; // Get the authenticateToken function

// Chart data based on the clean energy article
router.get('/solar-efficiency', authenticateToken, (req, res) => {
    const data = [
        { year: 2020, efficiency: 22 },
        { year: 2021, efficiency: 24 },
        { year: 2022, efficiency: 25 },
        { year: 2023, efficiency: 27 },
        { year: 2024, efficiency: 45 } // projected
    ];
    res.json(data);
});

router.get('/global-solar-adoption', authenticateToken, (req, res) => {
    const data = [
        { year: 2020, percentage: 2.3 },
        { year: 2021, percentage: 3.1 },
        { year: 2022, percentage: 4.5 },
        { year: 2023, percentage: 5.2 },
        { year: 2024, percentage: 6.0 } // projected
    ];
    res.json(data);
});

module.exports = router;