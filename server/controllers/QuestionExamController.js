const PrevExamQuestion = require("../models/QuestionModelExam.js");

// GET: Fetch all items (with topic filter)
exports.getPrevExamQuestion= async (req, res) => {
  try {
    const { topic } = req.query;
    let query = {};
    if (topic) {
      query = { topic: { $in: [topic] } };
    }
    const questions = await PrevExamQuestion.find(query);
    res.json(questions);
  } catch (error) {
    console.error("Backend Error:", error);
    res.status(500).json({ message: "Error fetching data", error: error.message });
  }
};

// GET: Fetch by ID
exports.getPrevExamQuestionById= async (req, res) => {
  try {
    const findQ = await PrevExamQuestion.findById(req.params.id);
    if (!findQ) return res.status(404).json({ message: "Question not found" });
    res.json(findQ);
  } catch (error) {
    res.status(500).json({ message: 'Invalid id format' });
  }
}

// POST: Create new question
exports.postPrevExamQuestion= async (req, res) => {
  try {
    const { question, options, answer, prevExams, explanation1,explanation2,hints, topic } = req.body;
    const newItem = new PrevExamQuestion({
      question, options, answer, prevExams,
      explanation1: explanation1 || 'No explanation provided',
      explanation2: explanation2 || 'No explanation provided',
      hints: hints || 'No hints provided',
      topic
    });
    await newItem.save();
    res.status(201).json({ message: "Item added successfully", data: newItem });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// DELETE: Remove by ID
exports.deletePrevExamQuestion= async (req, res) => {
  try {
    const deleteQuestion = await PrevExamQuestion.findByIdAndDelete(req.params.id);
    if (!deleteQuestion) return res.status(404).json({ message: "Question not found" });
    res.json({ message: "Question successfully deleted", deleteQuestion });
  } catch (error) {
    res.status(500).json({ message: 'Invalid id format' });
  }
}

// PUT: Update by ID
exports.putPrevExamQuestion= async (req, res) => {
  try {
    const updatedItem = await PrevExamQuestion.findByIdAndUpdate(req.params.id, req.body, { returnDocument:'after', runValidators: true });
    res.status(201).json({ message: 'Updated successfully', data: updatedItem });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}