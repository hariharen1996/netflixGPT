import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.authuser);

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
          console.log(user);
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

  return (
    <div className="absolute w-full sm:px-8 sm:py-2 bg-gradient-to-b from-black z-30">
      <div className="flex justify-between items-center mx-2 my-2">
        <img className="w-28 md:w-44" src={LOGO} alt="logo" />
        {user && (
          <button
            onClick={handleSignout}
            className="bg-[#e50914] px-2 py-2 w-24 text-white font-bold rounded-md hover:bg-opacity-80"
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
