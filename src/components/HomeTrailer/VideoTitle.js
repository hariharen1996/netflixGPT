import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-40 sm:pt-48 px-12 absolute text-white bg-gradient-to-r from-black w-screen h-screen">
      {!title ? (
        <div className="bg-[#171721] animate-pulse rounded-md p-2 w-32"></div>
      ) : (
        <h1 className="sm:text-start sm:text-left text-xl xl:text-4xl px-26 font-bold">
          {title}
        </h1>
      )}
      {!overview ? (
        <div className="bg-[#171721] animate-pulse rounded-md p-2 w-32 h-32 mt-3"></div>
      ) : (
        <>
          <p className="py-2 lg:py-6 lg:px-26 lg:w-6/12 text-sm md:text-md ">
            {overview}
          </p>
        </>
      )}

      <div className="my-4 flex">
        <button className="rounded-md px-4 py-2 sm:px-10 py-2 text-xs sm:text-sm  bg-white bg-opacity-90 hover:bg-opacity-80 text-black cursor-pointer font-medium">
          Play
        </button>
        <button className="rounded-md px-4 py-2 sm:px-10 py-2 text-xs sm:text-sm  bg-gray-500 bg-opacity-60 hover:bg-opacity-80 mx-2 text-white cursor-pointer font-medium">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
