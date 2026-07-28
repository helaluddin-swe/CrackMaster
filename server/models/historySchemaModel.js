const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historySchema = new Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true,
    index: true // Optimized for fetching personal history
  },
  userName: { 
    type: String, 
    required: true 
  },
  topic: { 
    type: String, 
    required: true,
    default: 'General'
  },
  correct: { type: Number, default: 0 },
  incorrect: { type: Number, default: 0 },
  unanswered: { type: Number, default: 0 },
  total: { type: Number, default: 0 },
  percentage: { type: Number, default: 0 },
  points: { type: Number, default: 0 },
  timeSpentSeconds: { type: Number, default: 0 },
  timestamp: { 
    type: Date, 
    default: Date.now,
    index: true // Optimized for Daily/Weekly leaderboards
  },
  link: { type: String } // Optional: To link back to specific test review
});

// Compound Index: Speeds up "Best score in the last 7 days" queries
historySchema.index({ timestamp: -1, points: -1 });

const History = mongoose.model('History', historySchema);
module.exports = History;