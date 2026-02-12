const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    scores:{
      category:{
        type: Map,
        of: Number, // Indicates that the values in the Map are numbers
      },
      totalScore: { type: Number, default: 0 }
    }
});


module.exports = mongoose.model('User', userSchema);