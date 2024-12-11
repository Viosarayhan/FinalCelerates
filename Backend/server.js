// Backend/server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');

// Memuat variabel lingkungan dari file .env
dotenv.config();

const app = express();

// Setup koneksi database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Middleware untuk meneruskan koneksi database ke req.db
app.use((req, res, next) => {
  req.db = db;
  next();
});

// Import rute
const authRoutes = require('./routes/auth');
const articleRoutes = require('./routes/article'); // Import routes artikel
const paymentRouter = require('./routes/paymentController'); // Ensure the path is correct
const mentorRoutes = require('./routes/mentorRoutes'); // Import mentor routes

// Gunakan rute
app.use('/auth', authRoutes);
app.use('/api/articles', articleRoutes); // Gunakan rute artikel
app.use('/api', paymentRouter); // Correct usage
app.use('/mentors', mentorRoutes); // Gunakan route di path /mentors

// Jalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
