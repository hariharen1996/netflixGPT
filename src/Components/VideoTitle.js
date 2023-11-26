import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-48 px-12 absolute text-white bg-gradient-to-r from-black w-screen h-screen">
      <h1 className="text-center sm:text-start text-xl xl:text-4xl px-26 font-bold">
        {title}
      </h1>
      <p className="text-center sm:text-start py-2 lg:py-6 lg:px-26 lg:w-6/12 text-sm md:text-md">
        {overview}
      </p>
      <div className="my-4 flex justify-center sm:justify-start items-center">
        <button className="rounded-md px-6 py-2 md:px-10 py-2 text-sm  bg-white bg-opacity-90 hover:bg-opacity-80 text-black cursor-pointer font-medium">
          Play
        </button>
        <button className="rounded-md px-6 py-2 md:px-10 py-2 text-sm  bg-gray-500 bg-opacity-60 hover:bg-opacity-80 mx-2 text-white cursor-pointer font-medium">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
