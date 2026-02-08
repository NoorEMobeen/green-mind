// routes/quizRoutes.js
const express = require('express');
const router = express.Router();
const { getQuizByCategory } = require('../controllers/quizController');

router.get('/', (req, res) => {
    res.send("Quiz routes are working");
});
// Route to get a quiz by category
router.get('/:categoryId', getQuizByCategory);

module.exports = router;
