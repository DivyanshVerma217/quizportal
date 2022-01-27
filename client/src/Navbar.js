import React from "react";
import "./Navbar.css";


function Navbar() {


 
  return (
    <div className= "nav_black flex justify-between" >
      <div className="nav_contents">
         <a href="/">
         <h1 className="text-white text-7xl flex flex-grow px-3 py-3">Quiz Portal</h1>
         </a>
          
      </div>
      <div className="flex justify-between">
      <a className="text-white text-3xl items-center flex flex-grow px-3 py-3 hover:text-green-500" href="/studentlogin">
              Student
          </a>
          <a className="text-white items-center text-3xl flex flex-grow px-3 py-3 hover:text-green-500" href="/teacherlogin">
              Teacher
          </a>
      </div>
    </div>
  );
}

export default Navbar;







      