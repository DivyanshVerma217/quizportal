import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import axios from 'axios';

import { getallcourse } from "../actions/courseAction";

import { addquestions } from "../actions/quizAction";
import { useParams } from "react-router-dom";
import Question from './Question';
import Navbar2 from '../Navbar2';


const { v4: uuidv4 } = require("uuid");



function CreateQuiz() {

  const [quizName, setQuizName] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [questions, setQuestion] = useState("")

  const [quizId, setQuizId] = useState("")

  const courseId = useParams()
  console.log(courseId)
  const dispatch = useDispatch()




  var id = useParams();
  
  async function addques() {
    if (
      option1 === "" ||
      option2 === "" ||
      option3 === "" ||
      option4 === "" ||
      answer1 === ""
    ) {
      alert("Enter your options and answer correctly");
    } else {
      var questionId = uuidv4();
      console.log(id);
      var question = {
        question: questions,
        questionId,
        quizId,
        option1: option1,
        option2: option2,
        option3: option3,
        option4: option4,
        answer: answer1,
        courseId,
      };
      dispatch(addquestions(question));
      alert("Question Added!!!")
    }
  }


  // async function getquizid() {
  //   console.log(id);
  //   try {
  //     const response = await axios.post("/api/quiz/getquizid", { id });
  //     quiz__id = await response.data[0].quiz_id;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async function callquestionfunctions() {


    addques();
  }

  


  async function create() {
    try {
      setQuizId(uuidv4())
      const response = await axios.post("/api/quiz/createquiz", {
        
        quiz_id: quizId,
        Quiz_name: quizName,
        id:courseId
        
      });
      
      console.log(response);
      alert("Quiz created")
    } catch (error) {
      console.log(error);
    }
    
  }
  return <div>
    <Navbar2/>

    <div>
    <div>
        <div className="flex items-center justify-center min-h-fit  bg-gray-100">
          <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-center">QUIZ</h3>
            <div>
              <div className="mt-4">
                <div>
                  <label className="block" for="Name">
                    Subject
                  </label>
                  <input
                    value={quizName}
                    required
                    onChange={(e) => {
                      setQuizName(e.target.value);
                    }}
                    type="text"
                    placeholder="Subject name"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </div>
             
              <div className="flex">
                <button
                  onClick={create}
                  className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                >
                  Create Quiz
                </button>

                


              </div>
            </div>
          </div>
        </div>

        <h1 className=' text-center text-3xl  '>or</h1>
        
        <div className="flex items-center justify-center min-h-fit  bg-gray-100">
          <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-center">ADD QUESTION</h3>
            <div>
              <div className="mt-4">
                <div>
                  <label className="block" for="Name">
                    Question
                  </label>
                  <input
                    value={questions}
                    required
                    onChange={(e) => {
                      setQuestion(e.target.value);
                    }}
                    type="text"
                    placeholder="Question"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block" for="Name">
                    OPTION 1
                  </label>
                  <input
                    value={option1}
                    required
                    onChange={(e) => {
                      setOption1(e.target.value);
                    }}
                    type="text"
                    placeholder="Option"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block" for="Name">
                    OPTION 2
                  </label>
                  <input
                    value={option2}
                    required
                    onChange={(e) => {
                      setOption2(e.target.value);
                    }}
                    type="text"
                    placeholder="Option"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block" for="Name">
                    OPTION 3
                  </label>
                  <input
                    value={option3}
                    required
                    onChange={(e) => {
                      setOption3(e.target.value);
                    }}
                    type="text"
                    placeholder="Option"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block" for="Name">
                    OPTION 4
                  </label>
                  <input
                    value={option4}
                    required
                    onChange={(e) => {
                      setOption4(e.target.value);
                    }}
                    type="text"
                    placeholder="Option"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block" for="Name">
                    CORRECT ANS
                  </label>
                  <input
                    value={answer1}
                    required
                    onChange={(e) => {
                      setAnswer1(e.target.value);
                    }}
                    type="text"
                    placeholder="Option"
                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </div>
             
              <div className="flex">
                <button
                  onClick={callquestionfunctions}
                  className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                >
                  Add
                </button>

                


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default CreateQuiz;


