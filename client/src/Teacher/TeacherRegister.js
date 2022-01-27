import React, { useState } from "react";
import "../Navbar";
import {useDispatch} from "react-redux"
import { registerUser } from "../actions/userAction";


function TeacherRegister() {

  const dispatch = useDispatch()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("")

  function register(){
    if (password!==cpassword){
      alert("Password not same!!!!")
    }
    else{
      const user={
        name:name,
        email:email,
        password:password,
        role:"teacher"

      }
      console.log(user)
      dispatch(registerUser(user))
    }
  }



  return (
    <>
     <div className="nav_black">
          <div className="nav_contents">
            <a href="/">
              <h1 className="text-white text-7xl flex flex-grow px-3 py-3">
                Quiz Portal
              </h1>
            </a>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-center min-h-fit  bg-gray-100">
            <div class="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
              <div class="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-20 h-20 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-center">Join us</h3>
              <form action="">
                <div class="mt-4">
                  <div>
                    <label class="block" for="Name">
                      Name
                    </label>
                    <input
                      value={name}
                      required
                      onChange={(e)=>{setName(e.target.value)}}
                      type="text"
                      placeholder="Name"
                      class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div class="mt-4">
                  <div>
                    <label class="block" for="email">
                      Email
                    </label>
                    <input
                      required
                      value={email}
                      onChange={(e)=>{setEmail(e.target.value)}}
                      type="email"
                      placeholder="Email"
                      class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div class="mt-4">
                  <div>
                    <label class="block">Password</label>
                    <input
                      value={password}
                      required
                      onChange={(e)=>{setPassword(e.target.value)}}
                      type="password"
                      placeholder="Password"
                      class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div class="mt-4">
                  <div>
                    <label class="block">Confirm Password</label>
                    <input
                      value={cpassword}
                      required
                      onChange={(e)=>{setCpassword(e.target.value)}}
                      type="password"
                      placeholder="Password"
                      class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div class="flex">
                  <button onClick={register} class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                    Create Account
                  </button>
                </div>
                <div class="mt-6 text-grey-dark">
                  Already have an account?
                  <a class="text-blue-600 hover:underline" href="/teacherlogin">
                    Log in
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
    </>
  );
}

export default TeacherRegister;
