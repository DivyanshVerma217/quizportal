const express = require("express");
const router = express.Router();
const NewQuestion = require("../model/quesModel");

router.post("/addquestion",async (req, res) => {
  console.log(req.body)
  const {
    question,
    questionId,
    quizId,
    option1,
    option2,
    option3,
    option4,
    answer,
  } = req.body;
  var courseId = req.body.courseId.courseId;
  // console.log(courseid);
  const newquestion = new NewQuestion({
    question,
    questionId,
    quizId,
    option1,
    option2,
    option3,
    option4,
    answer,
    courseId,
  });
  try {
   await newquestion.save();
    res.send("question created");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/getallquestions", async (req, res) => {
  var courseId = req.body.id.courseId;
  console.log(courseId);
  try {
    const response = await NewQuestion.find({ courseId });
    res.send(response);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/getallques", async (req, res) => {
  var courseId = req.body.id.courseId;
  console.log(courseId);
  try {
    const response = await NewQuestion.find({ courseId });
    res.send(response);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});
module.exports = router;


