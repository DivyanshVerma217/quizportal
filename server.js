const path = require("path");
const express = require("express");
const db = require("./db.js");

const app = express();


app.use(express.json());

const userRoute = require("./routes/userRoute");
const courseRoute = require("./routes/courseRoute")
const quesRoute  = require("./routes/quesRoute")
const quizRoute = require("./routes/quizRoute")

app.use("/api/users/", userRoute);
app.use("/api/course/",courseRoute);
app.use("/api/question/", quesRoute);
app.use("/api/quiz/", quizRoute);


app.get("/", (req, res) => {
  res.send("server working");
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log("Server is running on port", port));
