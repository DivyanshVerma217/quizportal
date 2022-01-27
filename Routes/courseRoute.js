const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const Course = require("../model/courseModel");
const { v4: uuidv4 } = require('uuid');

router.post("/courseRegister", async (req, res) => {
  const { name, desc, teacher } = req.body;

  const newCourse = new Course({ name, desc, teacher, courseId:uuidv4() });

  try {
    newCourse.save();
    res.send("Registerd");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});


router.get('/getCourses', async (req, res) => {
  try {
      const courses = await Course.find({});
      res.send(courses);
  } catch (err) {
      console.log(err);
      res.status(404).json({ message: err });
  }
})

router.post("/getbyid", async (req, res) => {
  var course_id = req.body._id;
  
  try {
    const course = await Newcourse.findOne({ _id:course_id });
    res.send(course);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/update", async (req, res) => {
  const { name, desc } = req.body;
  var course_id = req.body._id;

  try {
    const response = await Newcourse.findOne({
      _id:course_id ,
    });
    console.log(response);
    response.name = name;
    response.desc= desc;
    response.save();
    res.send("Successfully updated");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post('/delete', async (req, res) => {
  var course_id =req.body._id;
  console.log(req.body)
  try {
      const response = await Course.deleteOne({_id:course_id});
      res.send(response);
  } catch (err) {
      console.log(err);
      res.status(404).json({ message: err });
  }
});

module.exports = router;

