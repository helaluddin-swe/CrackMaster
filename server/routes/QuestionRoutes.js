const express = require("express");
const router = express.Router();
const { 
  createQuestion, 
  deleteQuestion, 
  getQuestionById, 
  getQuestions, 
  updateQuestion, 
  getTopicCounts,
  toggleBookmark // 1. Import your new controller function
} = require("../controllers/QuestionController.js");
const Question = require("../models/QuestionModel.js");

// 1. GET: Fetch all items (with topic/search filters)
router.get('/', getQuestions);

// 2. GET: Fetch topic counts (Must be before /:id)
router.get('/counts', getTopicCounts);

// 3. GET: Fetch bookmarked questions by user ID (Must be before /:id)
router.get("/bookmarked/:userId", async (req, res) => {
  try {
    const questions = await Question.find({ bookmarkedBy: req.params.userId });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// 4. POST: Toggle bookmark status for a question
router.post('/:id/bookmark', toggleBookmark);

// 5. GET: Fetch by ID
router.get('/:id', getQuestionById);

// 6. POST: Create new question
router.post('/', createQuestion);

// 7. DELETE: Remove by ID
router.delete('/:id', deleteQuestion);

// 8. PUT: Update by ID
router.put('/:id', updateQuestion);

module.exports = router;