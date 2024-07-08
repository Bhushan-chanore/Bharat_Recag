import React, { useState } from 'react';
import Modal from 'react-modal';
import logo from "../../Images/recaglogo.png";
import signup from "../../Images/signup-img.svg";

const Signup = ({ isOpen, onRequestClose, openLogin}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [focusedField, setFocusedField] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Username:", username);
  };


  const usernamePattern = /^[a-zA-Z0-9_]{3,16}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const isFieldValid = (field, value) => {
    switch (field) {
      case 'username':
        return usernamePattern.test(value) && isUsernameUnique(value);
      case 'email':
        return emailPattern.test(value);
      case 'password':
        return passwordPattern.test(value);
      case 'confirmpassword':
        return value === password;
      default:
        return true;
    }
  };

  // Placeholder function for checking username uniqueness
  const isUsernameUnique = (username) => {
    // Replace this with an actual API call to check username uniqueness
    const existingUsernames = ['user1', 'user2', 'user3'];
    return !existingUsernames.includes(username);
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Sign Up Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <section
          className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-900"
          style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        >
          <div className="max-w-screen-md w-full bg-white shadow-lg rounded-lg flex flex-col lg:flex-row overflow-hidden">
            <div className="lg:w-1/2 xl:w-5/12 w-[20rem] p-6 sm:p-10 flex flex-col items-center">
              <h1 className="text-4xl xl:text-6xl font-extrabold">
                Sign Up
              </h1>

              <button
                onClick={onRequestClose}
                className="absolute text-[28px] right-[28px] sm:hidden text-gray-700 hover:text-gray-900 transition duration-300 p-2"
              >
                &times;
              </button>
              <div className="w-full mt-6 flex flex-col items-center">
                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-2 bg-gray-800 text-white flex items-center justify-center transition duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mb-3">
                  <div className="bg-white p-1 rounded-full">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 text-gray-800"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.372 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.82-.26.82-.577 0-.285-.011-1.04-.017-2.04-3.338.728-4.042-1.61-4.042-1.61-.545-1.387-1.333-1.758-1.333-1.758-1.09-.746.082-.731.082-.731 1.205.085 1.84 1.237 1.84 1.237 1.07 1.832 2.808 1.302 3.492.996.108-.776.418-1.302.762-1.602-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.468-2.381 1.235-3.221-.123-.305-.536-1.53.117-3.188 0 0 1.008-.322 3.301 1.231.957-.266 1.984-.399 3.005-.404 1.02.005 2.048.138 3.006.404 2.29-1.553 3.296-1.231 3.296-1.231.654 1.659.241 2.884.118 3.188.77.84 1.234 1.911 1.234 3.221 0 4.609-2.804 5.622-5.475 5.921.43.37.814 1.1.814 2.215 0 1.599-.014 2.888-.014 3.282 0 .32.218.694.824.576C20.565 21.796 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <span className="ml-2">Sign Up with GitHub</span>
                </button>
                <div className="my-4 border-b text-center w-full">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Or
                  </div>
                </div>
                <div className="mx-auto w-full max-w-xs">
                  <div className="relative mb-3">
                    <input
                      className={`w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border ${focusedField === 'username' && !isFieldValid('username', username) ? 'border-red-600' : 'border-gray-200'} placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white transition duration-300 ease-in-out`}
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      onFocus={() => setFocusedField('username')}
                      onBlur={() => setFocusedField(null)}
                    />
                    {focusedField === 'username' && !isFieldValid('username', username) && (
                      <p className="text-red-600 text-xs mt-1">Username must be 3-16 characters, contain letters, numbers, and underscores, and be unique.</p>
                    )}
                  </div>
                  <div className="relative mb-3">
                    <input
                      className={`w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border ${focusedField === 'email' && !isFieldValid('email', email) ? 'border-red-600' : 'border-gray-200'} placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white transition duration-300 ease-in-out`}
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                    />
                    {focusedField === 'email' && !isFieldValid('email', email) && (
                      <p className="text-red-600 text-xs mt-1">Please enter a valid email address.</p>
                    )}
                  </div>
                  <div className="relative mb-4">
                    <input
                      className={`w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border ${focusedField === 'password' && !isFieldValid('password', password) ? 'border-red-600' : 'border-gray-200'} placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white transition duration-300 ease-in-out`}
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setFocusedField('password')}
                      onBlur={() => setFocusedField(null)}
                    />
                    {focusedField === 'password' && !isFieldValid('password', password) && (
                      <p className="text-red-600 text-xs mt-1">Password must be at least 8 characters long, and contain at least one uppercase letter, one lowercase letter, and one number.</p>
                    )}
                  </div>
                  <div className="relative mb-4">
                    <input
                      className={`w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border ${focusedField === 'confirmpassword' && !isFieldValid('confirmpassword', confirmpassword) ? 'border-red-600' : 'border-gray-200'} placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white transition duration-300 ease-in-out`}
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmpassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      onFocus={() => setFocusedField('confirmpassword')}
                      onBlur={() => setFocusedField(null)}
                    />
                    {focusedField === 'confirmpassword' && !isFieldValid('confirmpassword', confirmpassword) && (
                      <p className="text-red-600 text-xs mt-1">Passwords do not match.</p>
                    )}
                  </div>
                  <button
                    className="tracking-wide font-semibold bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    type="submit"
                    onClick={handleClick}
                  >
                    <svg
                      className="w-5 h-5 -ml-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-2">Sign Up</span>
                  </button>
                  <p className="mt-4 text-xs text-gray-600 text-center">
                    I agree to
                    <a
                      href="#"
                      className="border-b mx-1 text-blue-500 border-blue-500 border-solid"
                    >
                      Terms of Service
                    </a>
                    and
                    <a
                      href="#"
                      className="border-b mx-1 text-blue-500 border-blue-500 border-solid"
                    >
                      Privacy Policy
                    </a>
                  </p>
                  <p className="mt-4 text-xs text-gray-600 text-center">
                    Already have an
                    <a
                      href="#"
                      className="mx-1 text-blue-500 font-semibold transition duration-300 hover:border-b hover:border-blue-500 hover:text-blue-700"
                    >
                      Account?
                    </a>
                    <span
                      className="cursor-pointer mx-1 text-blue-500 font-semibold transition duration-300 hover:text-blue-700 hover:border-b hover:border-blue-500 hover:border-solid"
                      onClick={openLogin}
                    >
                      Sign In !!
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex lg:w-1/2 xl:w-7/12 flex-col items-center justify-center bg-blue-100 p-10">
              <img
                src={logo}
                className="w-13 max-w-[50%] lg:w-17 mb-4 animate-bounce"
                alt="logo"
              />
              <div
                className="bg-contain bg-center bg-no-repeat w-full h-full transform hover:scale-105 transition duration-300 ease-in-out"
                style={{
                  backgroundImage: `url(${signup})`,
                }}
              >
              </div>
            </div>
          </div>
        </section>
      </Modal>
    </div>
  );
};

export default Signup;
