import React, { useState } from "react";
import "../Navbar.css";
import {useDispatch} from "react-redux"
import { registerUser } from "../actions/userAction";



function StudentRegister() {

  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("")

const dispatch = useDispatch()
  
 

  function register(){
    if (password!==cpassword){
      alert("Password not same!!!!")
    }
    else{
      const user={
        name:name,
        email:email,
        password:password,
        role:"student"
        

      }
      console.log(user)
      dispatch(registerUser(user))
    
    }
  }

  return (
    <div>
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
              <h3 className="text-2xl font-bold text-center">Join us</h3>
              <div>
                <div className="mt-4">
                  <div>
                    <label className="block" for="Name">
                      Name
                    </label>
                    <input
                      value={name}
                      required
                      onChange={(e)=>{setName(e.target.value)}}
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div>
                    <label className="block" for="email">
                      Email
                    </label>
                    <input
                      required
                      value={email}
                      onChange={(e)=>{setEmail(e.target.value)}}
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div>
                    <label className="block">Password</label>
                    <input
                      value={password}
                      required
                      onChange={(e)=>{setPassword(e.target.value)}}
                      type="password"
                      placeholder="Password"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div>
                    <label className="block">Confirm Password</label>
                    <input
                      value={cpassword}
                      required
                      onChange={(e)=>{setCpassword(e.target.value)}}
                      type="password"
                      placeholder="Password"
                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div className="flex">
                  <button onClick={register} className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                    Create Account
                  </button>
                </div>
                <div className="mt-6 text-grey-dark">
                  Already have an account?
                  <a className="text-blue-600 hover:underline" href="/studentlogin">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default StudentRegister;
