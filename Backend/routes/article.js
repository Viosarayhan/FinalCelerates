const express = require('express');
const router = express.Router();
const db = require('../database'); // Ensure correct database connection import

// Endpoint to get all articles
router.get('/', (req, res) => {
  const query = 'SELECT * FROM articles';
  db.query(query, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error retrieving articles' });
    } else {
      res.json(result);
    }
  });
});

// Endpoint to add a new article
router.post('/', (req, res) => {
  const { judul, description, isi, category, img, slug, count, id } = req.body;

  // Ensure count and slug are passed or use default values
  const articleCount = count || 1;
  const articleSlug = slug || judul.toLowerCase().replace(/\s+/g, '_'); // Default slug (slugify title)

  const query = `
    INSERT INTO articles (judul, description, isi, categori, img, slug, count)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [judul, description, isi, category, img, articleSlug, articleCount], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error adding article' });
    } else {
      res.status(201).json({ message: 'Article added successfully', articleId: result.insertId });
    }
  });
});

// Endpoint to update an existing article
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { judul, description, isi, category, img, slug, count } = req.body;

  // Construct query to update article
  const query = `
    UPDATE articles
    SET judul = ?, description = ?, isi = ?, categori = ?, img = ?, slug = ?, count = ?
    WHERE id = ?
  `;

  db.query(query, [judul, description, isi, category, img, slug, count, id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error updating article' });
    } else {
      res.status(200).json({ message: 'Article updated successfully' });
    }
  });
});

// Endpoint to delete an article
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM articles WHERE id = ?';

  db.query(query, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error deleting article' });
    } else {
      if (result.affectedRows > 0) {
        res.status(200).json({ message: 'Article deleted successfully' });
      } else {
        res.status(404).json({ message: 'Article not found' });
      }
    }
  });
});

module.exports = router;
