import React from "react";

const Loader = () => {
  return (
    <div className="bg-[#000] flex justify-center items-center h-screen w-full text-white">
      <div className="lds-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
