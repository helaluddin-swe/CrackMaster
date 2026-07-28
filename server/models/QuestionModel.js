const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },
    options: {
      type: [String],
      required: true,
      validate: {
        validator: function (value) {
          return value.length >= 4;
        },
        message: "Options must have at least 4 items",
      },
    },
    answer: {
      type: String,
      required: true,
      trim: true,
    },
    prevExams: {
      type: [String],
      trim: true,
    },
    explanation: { 
      type: String, 
      trim: true 
    },
    topic: { 
      type: [String], 
      required: true, 
      trim: true 
    },
    
    // Exam categorization
    examAppearances: [
      {
        examCategory: String, // e.g., "bcs"
        specificExam: String, // e.g., "45th BCS"
        year: String,
      },
    ],

    // NEW: Related Questions mapping
    relatedQuestions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Questions",
      }
    ],

    // NEW: Track users who have bookmarked/saved this question
    bookmarkedBy: [
      {
        type: Schema.Types.ObjectId,
        ref: "User", 
      }
    ]
  },
  { timestamps: true }
);

const Question = mongoose.model("Questions", QuestionSchema);
module.exports = Question;