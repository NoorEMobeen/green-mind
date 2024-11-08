// routes/quizRoutes.js
const express = require('express');
const router = express.Router();
const { getQuizByCategory } = require('../controllers/quizController');

router.get('/', () => {
    console.log("Route is working");
    next();
});
// Route to get a quiz by category
router.get('/:categoryId', getQuizByCategory);

module.exports = router;
