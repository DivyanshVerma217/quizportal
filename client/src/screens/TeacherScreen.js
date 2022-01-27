import React, { useState, useEffect } from "react";
import Navbar2 from "../Navbar2";
import axios from "axios";
import { deleteCourses, getAllCourses } from '../actions/courseAction';


function TeacherScreen() {
  const [course, setCourse] = useState([]);
  const getCourses = async () => {
    const response = await fetch("/api/course/getCourses");
    console.log(response);
    setCourse(await response.json());
  
  };

  useEffect(() => {
    getCourses();
  }, []);
  console.log(course);

 

  async function delCourse(_id) {
    console.log(_id)
    try {
      const response = await axios.post("/api/course/delete", { _id });
      
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    window.location.href="/teacherscreen"
  }

  return (
    <div>
      <Navbar2 />
      <div>
        <div className="flex px-8 py-8 items-center justify-between">
          <a
            href="/teacherlogin/create"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded flex "
            data-bs-toggle="modal"
            data-bs-target="#exampleModalScrollable"
          >
            Create Course
          </a>
        </div>
        <div className="flex justify-around px-3 py-3">
          {course.map((items) => {
            console.log(items)
            return (
              <>
                <div className="border-4 px-5 py-6 h-auto w-64 flex flex-col  text-xl border-black bg-blue-300 rounded-lg shadow-xl shadow-black hover:bg-indigo-50 ">
                  <h1>
                    <span className="font-bold underline"> Subject:</span>{" "}
                    {items.name}
                  </h1>
                  <h1>
                    <span className="font-bold underline "> Description:</span>{" "}
                    {items.desc}
                  </h1>
                  <h1>
                    <span className="font-bold underline "> Teacher:</span>{" "}
                    {items.teacher}
                  </h1>
                  <div className="flex flex-col px-3 py-3 m-2">
                    <button
                      onClick={(e) => {
                        delCourse(items._id);
                      }}
                      className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-2 "
                    >
                      Delete
                    </button>
                    {/* <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-2  ">
                      <a href={`/update/${items.courseId}`}>
                        EDIT
                      </a>
                    </button> */}
                    <button  className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-2 ">
                      <a href={`/createQuiz/${items.courseId}`}>
                        Create Quiz/ADD question
                      </a>
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TeacherScreen;
