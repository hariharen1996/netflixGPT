import React from "react";
import { Link } from "react-router-dom";
import { LOGO } from "../../utils/constants";

const SubHeader = () => {
  return (
    <div className="absolute w-full sm:px-8 sm:py-2 bg-gradient-to-b from-black z-30">
      <div className="flex flex-col md:flex-row justify-between items-center mx-2 my-2">
        <img className="w-36 md:w-44" src={LOGO} alt="logo" />
        <Link to="/browse">
          <button className="bg-gray-900 p-2 text-sm  hover:bg-[#e50914] hover:bg-opacity-70 text-white rounded-md">
            HomePage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SubHeader;
