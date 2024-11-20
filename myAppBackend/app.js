const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const auth = require('./routes/auth');
const dotenv = require('dotenv');
const chartRoutes = require('./routes/charts'); 

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Use CORS middleware
app.use(cors());

// Middleware for parsing JSON
app.use(express.json());

// Use the auth routes
app.use('/api/auth', auth.router);

// Use the chart routes 
app.use('/api/charts', chartRoutes);

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});