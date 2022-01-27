import React, { useState, useEffect } from "react";
import Navbar2 from "../Navbar2";

function StudentScreen() {
  const [course, setCourse] = useState([]);
  const getCourses = async () => {
    const response = await fetch("/api/course/getCourses");
    console.log(response);
    setCourse(await response.json());
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getCourses();
  }, []);
  console.log(course);

  return (
    <div>
      <Navbar2 />
      <div>
        <div className="flex justify-center font-extrabold text-4xl underline px-8 py-8">
          <h1>COURSES</h1>
        </div>

        <div className="flex justify-around px-3 py-3">
          {course.map((items) => {
            return (
              <>
                <div className="border-4 px-5 py-6 h-60 w-64 flex flex-col  text-xl border-black bg-blue-300 rounded-lg shadow-xl shadow-black hover:bg-indigo-50 ">
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
                  <button
                      className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-2 "
                    >
                     <a href="/question">
                       Take quiz
                     </a>
                    </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StudentScreen;
