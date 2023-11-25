import React from "react";
import { LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute w-full sm:px-8 sm:py-2 bg-gradient-to-b from-black z-30">
      <div className="flex justify-between items-center mx-2 my-2">
        <img className="w-28 md:w-44" src={LOGO} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
