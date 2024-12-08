const express = require('express');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const db = require('../database'); // Ensure proper database connection

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'), // Store in uploads folder
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)), // Ensure unique file names
});
const upload = multer({ storage });

// Register User
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  // Save password directly (not recommended)
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(query, [name, email, password], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'User registered successfully' });
  });
});


// Login User
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    const user = results[0];

    // Compare password directly
    if (user.password !== password) {
      return res.status(400).json({ error: 'Invalid password' });
    }

    // Login successful
    res.status(200).json({ message: 'Login successful' });
  });
});

// Get all users
router.get('/users', (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      return res.status(500).json({ error: 'Failed to fetch users' });
    }
    res.status(200).json(results);
  });
});

// Fetch all users
router.get('/users', (req, res) => {
  const query = 'SELECT * FROM users'; // Query to select all users
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      return res.status(500).json({ error: 'Failed to fetch users' });
    }
    res.status(200).json(results);
  });
});

// Delete a user by ID
router.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM users WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error deleting user:', err);
      return res.status(500).json({ error: 'Failed to delete user' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  });
});

// Update a user's information
router.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Please provide all required fields' });
  }

  const query = 'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?';
  db.query(query, [name, email, password, id], (err, result) => {
    if (err) {
      console.error('Error updating user:', err);
      return res.status(500).json({ error: 'Failed to update user' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'User updated successfully' });
  });
});

// Register with Form Data and File Upload for Class Registration
router.post('/register-form', upload.single('file'), (req, res) => {
  const { name, email, phone, mentor, date, time, program } = req.body;
  const filePath = req.file ? req.file.path : null;

  console.log('Received data:', req.body);
  console.log('Uploaded file:', req.file);

  if (!name || !email || !phone || !mentor || !date || !time || !program) {
    return res.status(400).json({ error: 'Please provide all the required fields, including program' });
  }

  const query = `
    INSERT INTO class_registrations (name, email, phone, mentor, date, time, program, file_url)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [name, email, phone, mentor, date, time, program, filePath], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ error: 'Failed to save registration data' });
    }
    res.status(201).json({
      message: 'Registration form data saved successfully',
      data: { id: result.insertId, name, email, phone, mentor, date, time, program, filePath }
    });
  });
});

// Get all class registrations
router.get('/class-registrations', (req, res) => {
  const query = `
    SELECT id, name, email, phone, mentor, date, time, program, file_url
    FROM class_registrations
  `;

  req.db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching class registrations:', err);
      return res.status(500).json({ error: 'Failed to fetch class registrations' });
    }
    res.status(200).json(results);
  });
});

// Update program for a specific registration
router.put('/class-registrations/:id', (req, res) => {
  const { program } = req.body;
  const { id } = req.params;

  if (!program) {
    return res.status(400).json({ error: 'Program cannot be empty' });
  }

  const query = 'UPDATE class_registrations SET program = ? WHERE id = ?';

  db.query(query, [program, id], (err, result) => {
    if (err) {
      console.error('Error updating program:', err);
      return res.status(500).json({ error: 'Failed to update program' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Registration not found' });
    }

    res.status(200).json({ message: 'Program successfully updated' });
  });
});

// Delete a registration
router.delete('/class-registrations/:id', (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM class_registrations WHERE id = ?';

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error deleting registration:', err);
      return res.status(500).json({ error: 'Failed to delete registration' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Registration not found' });
    }

    res.status(200).json({ message: 'Registration successfully deleted' });
  });
});

module.exports = router;
