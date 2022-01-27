const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const quiz = require("../model/quizModel");
const course = require("../model/courseModel");
const NewQuestion = require('../model/quesModel')

router.post("/createquiz", async (req, res) => {
  const { quiz_id, Quiz_name, } = req.body;
  var courseId = req.body.id.courseId;
  const NewQuiz = new quiz({ Quiz_name,quiz_id,courseId });
  try {
    NewQuiz.save();
    res.send("NewQuiz");
    const response = await course.findOne({ _id:course_id });
    response.quiz.push(quiz_id);
    response.save();
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});


router.post("/getquizid", async (req, res) => {
    var course_id = req.body.id.courseId;
    console.log(course_id);
    try {
      const response = await NewQuestion.find({ courseId:course_id });
      res.send(response);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  });

module.exports = router