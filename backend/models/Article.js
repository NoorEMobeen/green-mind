const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  category: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  sections: [
    {
      heading: String,
      text: String,
      imageUrl: String, // Optional images for each section
    },
  ],
  tips: [String], // Educational or action-oriented tips
  videoUrl: String, // Optional video URL
  lastUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Article', ArticleSchema);
