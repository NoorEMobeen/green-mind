// controllers/quizController.js
const Quiz = require('../models/Quiz');

// Controller function to get quiz by category
exports.getQuizByCategory = async (req, res) => {
  let { categoryId } = req.params;

  try {
    const quiz = await Quiz.findOne({ categoryId });

    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    res.status(200).json({
      categoryId: quiz.categoryId, // The slug (e.g., "water-conservation")
      category: quiz.category, // The readable name (e.g., "Water Conservation Quiz")
      questions: quiz.questions,
    });
  } catch (error) {
    console.error('Error fetching quiz:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
