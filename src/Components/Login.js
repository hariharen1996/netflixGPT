import React, { useState } from "react";
import Header from "./Header";
import { LOGIN_IMAGE } from "../utils/constants";
import Footer from "./Footer";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [show, setShow] = useState(true);
  const [user, setUser] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const showPassword = () => {
    setShow(!show);
  };

  const handleSignUp = () => {
    console.log("signup");
  };

  const handleSignIn = () => {
    console.log("signIn");
  };

  return (
    <>
      <Header />
      <div className="relative min-h-screen">
        <div className="absolute min-h-screen h-full">
          <img
            className="w-screen h-full object-cover"
            src={LOGIN_IMAGE}
            alt="Netflix banner"
          />
        </div>

        <div className="min-h-screen flex items-center justify-center">
          <div className="mt-10 sm:mt-0 absolute text-white bg-black bg-opacity-70 w-[90%] sm:w-[50%] md:w[40%] lg:w-[30%] rounded-lg p-7 sm:p-6">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col py-2"
            >
              <h1 className="font-medium text-xl sm:text-2xl my-1">
                {" "}
                {isSignedIn ? "Sign In" : "Sign Up"}
              </h1>

              {!isSignedIn && (
                <>
                  <input
                    value={user.username}
                    onChange={handleChange}
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="rounded-md my-2 p-2 w-full bg-[#313131]"
                  />
                </>
              )}
              <input
                value={user.email}
                onChange={handleChange}
                type="text"
                name="email"
                placeholder="Email"
                className="rounded-md my-2 p-2 w-full bg-[#313131]"
              />

              <input
                value={user.password}
                onChange={handleChange}
                type={show ? "password" : "text"}
                name="password"
                placeholder="Password"
                className="rounded-md my-2 p-2 w-full bg-[#313131]"
              />
              <button
                onClick={isSignedIn ? handleSignIn : handleSignUp}
                type="submit"
                className="bg-[#e50914] hover:bg-opacity-80 p-2 w-full text-white font-bold my-4 rounded-md"
              >
                {isSignedIn ? "Sign In" : "Sign Up"}
              </button>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="showpassword"
                    className="mr-1 w-4 h-4 bg-gray-700"
                    onClick={showPassword}
                  />
                  <label htmlFor="showpassword" className="text-sm">
                    Show Password
                  </label>
                </div>
                <div className="flex items-center">
                  <p className="text-sm hover:underline cursor-pointer">
                    Need help?
                  </p>
                </div>
              </div>
              <div
                onClick={() => setIsSignedIn(!isSignedIn)}
                className="mt-3 text-sm text-white font-medium cursor-pointer"
              >
                {isSignedIn ? (
                  <p>
                    New to Netflix?
                    <span className="mx-2 underline">Sign Up Now.</span>
                  </p>
                ) : (
                  <p>
                    Already Registered?
                    <span className="mx-2 underline">Sign In Now.</span>
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
