// models/Quiz.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true },
  answer: { type: String, required: true },
});

const quizSchema = new mongoose.Schema({
  category: { type: String, required: true },
  categoryId: { type: String, required: true },
  title: { type: String, required: true },
  questions: [questionSchema],
});

module.exports = mongoose.model('Quiz', quizSchema);
