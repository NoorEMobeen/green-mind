const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // scores: { 
    //     type: Map, // Storing scores as category: score pairs
    //     of: Number, 
    //     default: {} 
    //   },
    // totalScore: { type: Number, default: 0 }
    scores:{
      category:{
        type: Map,
        of: Number, // Indicates that the values in the Map are numbers
      },
      totalScore: { type: Number, default: 0 }
    }
});


module.exports = mongoose.model('User', userSchema);