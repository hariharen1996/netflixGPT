import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { LOGO } from "../utils/constants";
import { toggleSearchView } from "../redux/searchSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../redux/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.authuser);
  const search = useSelector((store) => store.search.showSearch);

  const showToggleSearch = () => {
    dispatch(toggleSearchView());
  };

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          const { uid, email, displayName } = user;
          dispatch(
            addUser({ uid: uid, email: email, displayName: displayName })
          );
          navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      },
      []
    );

    return () => unSubscribe();
  }, []);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full sm:px-8 sm:py-2 bg-gradient-to-b from-black z-30">
      <div className="flex flex-col md:flex-row justify-between items-center mx-2 my-2">
        <img className="w-36 md:w-44" src={LOGO} alt="logo" />
        {user && (
          <div className="flex items-center">
            <select
              className="p-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lg) => (
                <option key={lg.identifier} value={lg.identifier}>
                  {lg.name}
                </option>
              ))}
            </select>
            <button
              className="bg-gray-900 p-2 hover:bg-[#e50914] hover:bg-opacity-70 m-2 text-white rounded-md"
              onClick={showToggleSearch}
            >
              {!search ? "SearchMovies" : "HomePage"}
            </button>
            <button
              onClick={handleSignout}
              className="bg-gray-900 p-2 hover:bg-[#e50914] hover:bg-opacity-70 text-white  rounded-md"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
