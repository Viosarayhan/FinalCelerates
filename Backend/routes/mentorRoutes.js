const express = require('express');
const router = express.Router();
const db = require('../database');

// Middleware untuk memastikan koneksi database
router.use((req, res, next) => {
    req.db = db; // Pastikan database diimport dengan benar
    if (!req.db) {
        return res.status(500).send('Database connection not found');
    }
    next();
});

// Create Mentor Table
router.get('/createTable', (req, res) => {
    const query = `
        CREATE TABLE IF NOT EXISTS mentors (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            job VARCHAR(255) NOT NULL,
            date DATE NOT NULL,
            time TIME NOT NULL,
            zoomLink VARCHAR(255) NOT NULL,
            classType VARCHAR(255) NOT NULL
        )
    `;
    req.db.query(query, (err, result) => {
        if (err) {
            return res.status(500).send('Error creating table: ' + err.message);
        }
        res.send('Mentors table created!');
    });
});

// Save new mentor data
router.post('/', (req, res) => {
    const { name, job, date, time, zoomLink, classType } = req.body;

    // Validasi data
    if (!name || !job || !date || !time || !zoomLink || !classType) {
        return res.status(400).send("All fields are required");
    }

    const query = "INSERT INTO mentors (name, job, date, time, zoomLink, classType) VALUES (?, ?, ?, ?, ?, ?)";
    req.db.query(query, [name, job, date, time, zoomLink, classType], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Error saving data: " + err.message });
        }
        res.status(201).json({ id: result.insertId, ...req.body });
    });
});

// Get all mentors
router.get('/', (req, res) => {
    const query = 'SELECT * FROM mentors';
    req.db.query(query, (err, result) => {
        if (err) {
            return res.status(500).send('Error retrieving mentors: ' + err.message);
        }
        res.status(200).json(result);
    });
});

module.exports = router;
