const mongoose = require('mongoose');

// 1. Embedded Question Schema (Fixes the 500 CastError)
const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctOptionIndex: { type: Number, required: true, default: 0 }
});

// 2. Subtopic Schema
const subtopicSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  duration: { type: String },
  completed: { type: Boolean, default: false }, 
  // Store questions directly inside the subtopic:
  questions: [questionSchema]
});

// 3. Topic Schema
const topicSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  subtopics: [subtopicSchema]
});

// 4. Chapter Schema
const chapterSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  topics: [topicSchema]
});

// 5. Main Course Schema
const courseSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  chapters: [chapterSchema]
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;