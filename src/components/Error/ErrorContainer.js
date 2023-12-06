import React from "react";
import { ERROR_IMAGE } from "../../utils/constants";
import { Link } from "react-router-dom";

const ErrorContainer = () => {
  return (
    <div className="font-serif bg-gray-700 overflow-y-scroll h-screen w-full text-white">
      <div className="fixed left-0 top-12 right-0 flex flex-col justify-center items-center">
        <h1 className="text-xl lg:text-3xl  text-center">Page Not Found!</h1>
        <img
          src={ERROR_IMAGE}
          alt="error"
          className="w-48 lg:w-64 text-center my-5"
        />
        <Link
          to="/browse"
          className="bg-cyan-700 mx-3 py-2 p-2 rounded-md cursor-pointer"
        >
          HomePage
        </Link>
      </div>
    </div>
  );
};

export default ErrorContainer;
