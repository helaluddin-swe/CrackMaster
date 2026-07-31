const mongoose = require('mongoose');

// Multi-language string – NOT required for every language
const localizedStringSchema = {
  en: { type: String, default: '' },
  bn: { type: String, default: '' },
  fr: { type: String, default: '' },
  es: { type: String, default: '' }
};

// Multi-language array of strings
const localizedArraySchema = {
  en: [{ type: String, default: '' }],
  bn: [{ type: String, default: '' }],
  fr: [{ type: String, default: '' }],
  es: [{ type: String, default: '' }]
};

// 1. Question Schema
const questionSchema = new mongoose.Schema({
  questionText: localizedStringSchema,
  options: localizedArraySchema,
  correctOptionIndex: { type: Number, required: true, default: 0 },
  explanation: localizedStringSchema          // ← added
}, { _id: false });

// 2. Subtopic Schema
const subtopicSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: localizedStringSchema,
  content: localizedStringSchema,
  duration: { type: String, default: '10 min read' },
  completed: { type: Boolean, default: false },
  questions: [questionSchema]
}, { _id: false });

// 3. Topic Schema
const topicSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: localizedStringSchema,
  subtopics: [subtopicSchema]
}, { _id: false });

// 4. Chapter Schema
const chapterSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: localizedStringSchema,
  topics: [topicSchema]
}, { _id: false });

// 5. Main Course Schema
const courseSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: localizedStringSchema,
  chapters: [chapterSchema]
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;