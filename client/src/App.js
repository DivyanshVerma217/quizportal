import "./App.css";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loginscreen from "./screens/Loginscreen";
import Registration from "./screens/Registration";
import StudentRegister from "./Student/StudentRegister";
import StudentLogin from "./Student/StudentLogin";
import TeacherLogin from "./Teacher/TeacherLogin";
import TeacherRegister from "./Teacher/TeacherRegister";
import TeacherScreen from "./screens/TeacherScreen";
import StudentScreen from "./screens/StudentScreen";
import Createcourse from "./screens/Createcourse";
import CreateQuiz from "./screens/CreateQuiz";
import UpdateCourse from "./screens/UpdateCourse";
import Question from "./screens/Question";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Homescreen />} />
          <Route path="/login" exact element={<Loginscreen />} />
          <Route path="/register" exact element={<Registration />} />
          <Route path="/studentregister" exact element={<StudentRegister />} />
          <Route path="/studentlogin" exact element={<StudentLogin />} />
          <Route path="/teacherregister" exact element={<TeacherRegister />} />
          <Route path="/teacherlogin" exact element={<TeacherLogin />} />
          <Route path="/teacherscreen" exact element={<TeacherScreen />} />
          <Route path="/studentscreen" exact element={<StudentScreen />} />
          <Route path="/teacherlogin/create" exact element={<Createcourse />} />
          <Route path="/createquiz/:courseId" exact element={<CreateQuiz/>} />
          <Route path="/update/:courseId" exact element={<UpdateCourse/>} />
          <Route path="/question" exact element={<Question/>} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
