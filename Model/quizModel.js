const mongoose = require("mongoose");

const quizSchema = mongoose.Schema({
  Quiz_name: { type: String, require },
  courseId: { type: String, require },
  quiz_id: { type: String, require },
});

const QuizModel = mongoose.model("Quiz", quizSchema);
module.exports = QuizModel;