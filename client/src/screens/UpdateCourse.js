import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import Navbar2 from "../Navbar2";

function UpdateCourse() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  var courseId = useParams().courseId;
  console.log(courseId)
  useEffect(() => {
    async function fetchByid() {
      try {
        const response = await axios.post("/api/course/getbyid", {
          _id: courseId,
        });
        console.log(response);
        setName(response.data.name);
        setDesc(response.data.desc);
      } catch (error) {
        console.log("error occured in fetching" + error);
      }
    }

    fetchByid();
  });
  async function handleEdit() {
    if (name === "" || desc === "") {
      alert("Enter the course Name and details");
    } else {
      try {
        
        const response = await axios.post("/api/course/update", {
          id: courseId,
          name,
          desc,
        });
        console.log(response)
      } catch (error) {
        console.log("error is coming" + error);
      }
    }
  }
  
  return (
    <>
    <Navbar2/>
    <div className="flex justify-center mt-16">
      <div className="flex flex-col px-4 justify-center text-center border-2 ">
        <h1>Edit</h1>
        <label className="mb-2">Course Name:</label>
        <input
          
          placeholder="Course Name"
          className="border-2 px-2 py-2"
          required
          name="course"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          
        />
        <label className="mb-2">Course Description</label>
        <textarea
          required
          className="border-2 px-2 py-2 "
          value={desc}
          name="description"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        ></textarea>
        <div className="flex">
          <button
            className="border-2 mt-4 w-40"
            variant="info"
            onClick={handleEdit}
          >
            Update course
          </button>
          
        </div>
      </div>
    </div></>
  );
}

export default UpdateCourse;
