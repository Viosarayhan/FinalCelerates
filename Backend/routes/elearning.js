const express = require('express');
const router = express.Router();

// Endpoint untuk mendapatkan data video
router.get('/videos', (req, res) => {
  const query = 'SELECT * FROM videos';
  req.db.query(query, (err, results) => { // Gunakan req.db
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json(results);
  });
});

// Endpoint untuk mengupdate data video
router.put('/videos/:id', (req, res) => {
  const { id } = req.params;
  const { title, mentor, category } = req.body;
  const query = 'UPDATE videos SET title = ?, mentor = ?, category = ? WHERE id = ?';
  req.db.query(query, [title, mentor, category, id], (err) => { // Gunakan req.db
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json({ message: 'Video updated successfully' });
  });
});

// Endpoint untuk menghapus data video
router.delete('/videos/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM videos WHERE id = ?';
  req.db.query(query, [id], (err) => { // Gunakan req.db
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json({ message: 'Video deleted successfully' });
  });
});

module.exports = router;
