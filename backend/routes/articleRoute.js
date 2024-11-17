const express = require('express');
const router = express.Router();
const Article = require('../models/Article');


// Article.findOne({ category: "climate-change" }).then(console.log).catch(console.error);

// Endpoint to get category data
router.get('/categories', async (req, res) => {
  try {
    const categories = await Article.find({}, 'category title content sections').exec();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching categories', error });
  }
});


// GET article by category
router.get('/:category', async (req, res) => {
  let { category } = req.params;
  try {
    const article = await Article.findOne({ category });
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching article' });
  }
});

module.exports = router;
