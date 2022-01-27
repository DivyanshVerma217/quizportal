const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  question: { type: String, require },
  questionId: { type: String, require },
  quizId: { type: String, require },
 
  option1: { type: String, require },
  option2: { type: String, require },
  option3: { type: String, require },
  option4: { type: String, require },

  answer: { type: String, require },
  courseId: { type: String, require },
});

const QuestionModel = mongoose.model("Question", questionSchema);
module.exports = QuestionModel;
