import { useState } from "react";
import { addUser } from "../redux/userSlice";
import { checkValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const useForm = () => {
  const [signInError, setSignInError] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [authError, setAuthError] = useState("");
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    error: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSignIn = () => {
    if (isSignedIn) {
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          // Signed in
          let credentials = userCredential.user;
          console.log(credentials);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.log(errorCode);
          // console.log(errorMessage);

          if (!user.email) {
            setAuthError("Please enter your email");
          } else if (errorCode === "auth/invalid-email") {
            setAuthError("Your email id is not valid");
          } else if (errorCode === "auth/missing-password") {
            setAuthError("Please enter your password");
          } else if (errorCode === "auth/invalid-login-credentials") {
            setAuthError("Invalid Login Cerdentials");
          }
        });
    }
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed up
        let users = userCredential.user;
        console.log(users);
        updateProfile(users, {
          displayName: user.username,
        })
          .then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(
              addUser({ uid: uid, email: email, displayName: displayName })
            );
            navigate("/browse");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        let errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);

        if (errorCode === "auth/email-already-in-use") {
          setUser({ ...user, error: "Email Already Registered" });
        } else {
          setSignInError(checkValidate(user));
        }
      });
  };

  return {
    user,
    handleChange,
    signInError,
    setSignInError,
    authError,
    handleSignIn,
    handleSignUp,
    isSignedIn,
    setIsSignedIn,
  };
};

export default useForm;
