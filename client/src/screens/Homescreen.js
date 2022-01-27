import React from "react";
import Navbar from "../Navbar";

function Homescreen() {
  return (
    <div>
      <Navbar />

      <div className="flex justify-between">
        <img
          className="object-fill"
          src="https://image.shutterstock.com/image-vector/quiz-comic-pop-art-style-260nw-1506580442.jpg"
          alt=""
        />

        <div className="px-8 py-8 mt-20 m-20 text-7xl items-center font-bold ">
          <p>Welcom to our quiz portal. All the best!!!</p>
        </div>
      </div>
    </div>
  );
}

export default Homescreen;
