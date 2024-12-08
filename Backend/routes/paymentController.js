const express = require('express');
const router = express.Router();
const db = require('../database'); // Adjust path if necessary

// Endpoint to save payment data
router.post('/payment', (req, res) => {
    const { orderId, date, email, phone, paymentMethod, paymentStatus } = req.body;

    // Validate input fields
    if (!orderId || !date || !email || !phone || !paymentMethod) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const status = paymentStatus || 'belum bayar';
    const query = 'INSERT INTO payments (order_id, date, email, phone, payment_method, payment_status) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [orderId, date, email, phone, paymentMethod, status];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Error inserting payment data:', err.message);
            return res.status(500).json({ message: 'Error saving payment data' });
        }
        res.status(201).json({ message: 'Payment data saved successfully', id: result.insertId });
    });
});

// Endpoint to retrieve payment data
router.get('/payments', (req, res) => {
    const query = `
      SELECT
    order_id,
    DATE_FORMAT(date, '%d-%m-%Y') AS date,
    email,
    phone,
    payment_method,
    payment_status
FROM payments

    `;

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching payment data:', err.message);
            return res.status(500).json({ message: 'Error retrieving payment data' });
        }
        res.status(200).json(results);
    });
});


// Endpoint to update payment status
router.put('/payments/:id', (req, res) => {
    const { id } = req.params; // `order_id` from URL
    const { payment_status } = req.body; // `payment_status` from request body

    if (!payment_status) {
        return res.status(400).json({ message: 'Payment status is required' });
    }

    const validStatuses = ['berhasil', 'belum bayar']; // Valid payment statuses
    if (!validStatuses.includes(payment_status.toLowerCase())) {
        return res.status(400).json({ message: 'Invalid payment status' });
    }

    const query = 'UPDATE payments SET payment_status = ? WHERE order_id = ?';
    db.query(query, [payment_status, id], (err, results) => {
        if (err) {
            console.error('Error updating payment status:', err.message);
            return res.status(500).json({ message: 'Error updating payment status' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Payment data not found' });
        }
        res.status(200).json({ message: 'Payment status updated successfully' });
    });
});


// Endpoint to delete payment data
router.delete('/payment/:id', (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM payments WHERE order_id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting payment data:', err.message);
            return res.status(500).json({ message: 'Error deleting payment data' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Payment data not found' });
        }
        res.status(200).json({ message: 'Payment data deleted successfully' });
    });
});

module.exports = router;
