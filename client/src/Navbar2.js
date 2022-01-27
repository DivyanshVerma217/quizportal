import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "./actions/userAction";
import "./Navbar.css";

function Navbar2() {
  const dispatch = useDispatch();

  return (
    <div className="nav_black flex justify-between">
      <div className="nav_contents">
        <h1 className="text-white text-7xl flex flex-grow px-3 py-3">
          Quiz Portal
        </h1>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => {
            dispatch(logout);
          }}
          className="text-white text-3xl items-center flex flex-grow px-3 py-3 hover:text-green-500"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar2;
