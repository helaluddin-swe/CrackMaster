const Question = require("../models/QuestionModel.js");

exports.updateQuestion = async (req, res) => {
  try {
    const updatedItem = await Question.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { returnDocument: 'after', runValidators: true }
    ).populate('relatedQuestions'); // Populate on update response

    if (!updatedItem) return res.status(404).json({ message: "Question not found" });
    res.json({ message: 'Updated successfully', data: updatedItem });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

exports.deleteQuestion = async (req, res) => {
  try {
    const deleteQuestion = await Question.findByIdAndDelete(req.params.id);
    if (!deleteQuestion) return res.status(404).json({ message: "Question not found" });
    res.json({ message: "Question successfully deleted" });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting question' });
  }
}

exports.createQuestion = async (req, res) => {
  try {
    const newItem = new Question(req.body); 
    await newItem.save();
    
    // Populate before sending back response so frontend gets full data if needed
    const populatedItem = await Question.findById(newItem._id).populate('relatedQuestions');
    res.status(201).json({ message: "Item added successfully", data: populatedItem });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

exports.getQuestionById = async (req, res) => {
  try {
    const findQ = await Question.findById(req.params.id).populate('relatedQuestions');
    if (!findQ) return res.status(404).json({ message: "Question not found" });
    res.json(findQ);
  } catch (error) {
    res.status(400).json({ message: 'Invalid ID format' });
  }
}

exports.getTopicCounts = async (req, res) => {
  try {
    const counts = await Question.aggregate([
      { $unwind: "$topic" },
      { $group: { _id: "$topic", count: { $sum: 1 } } }
    ]);
    
    const formattedCounts = counts.reduce((acc, curr) => {
      acc[curr._id] = curr.count;
      return acc;
    }, {});

    res.json(formattedCounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getQuestions = async (req, res) => {
  try {
    const { topic, examCategory, specificExam, search } = req.query;
    let query = {};

    if (topic && topic !== "") {
      query.topic = { $in: [topic] }; 
    }

    if (examCategory || specificExam) {
      query.examAppearances = { $elemMatch: {} };
      if (examCategory) query.examAppearances.$elemMatch.examCategory = examCategory;
      if (specificExam) query.examAppearances.$elemMatch.specificExam = specificExam;
    }

    if (search && search.trim() !== "") {
      query.question = { $regex: search.trim(), $options: 'i' };
    }

    // POPULATE RELATED QUESTIONS HERE
    const questions = await Question.find(query)
      .populate('relatedQuestions')
      .limit(50);
      
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error: error.message });
  }
};

exports.toggleBookmark = async (req, res) => {
  try {
    const { id } = req.params; 
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const question = await Question.findById(id);
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    if (!question.bookmarkedBy) {
      question.bookmarkedBy = [];
    }

    const index = question.bookmarkedBy.indexOf(userId);
    if (index > -1) {
      question.bookmarkedBy.splice(index, 1);
    } else {
      question.bookmarkedBy.push(userId);
    }

    await question.save();
    
    // Return populated question so frontend state updates cleanly
    const updatedQuestion = await Question.findById(id).populate('relatedQuestions');
    res.json({ message: "Bookmark updated successfully", data: updatedQuestion });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};