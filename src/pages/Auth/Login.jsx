import React, { useState } from "react";
import logo from "../../Images/recaglogo.png";
import signin from "../../Images/signin_img.svg";
import "./Login.css";
import Modal from 'react-modal';

const Login = ({ isOpen, onRequestClose, openSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Login Modal"
        className="modal"
        overlayClassName="overlay"
      >



        <section
          className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-900"
          style={{ backgroundColor: "rgb(0, 0, 0, 0)" }}
        >

          <div className="max-w-screen-md w-full bg-white shadow-lg rounded-lg flex flex-col lg:flex-row overflow-hidden bg-opacity-50">
            <div className="lg:w-1/2 xl:w-5/12  w-[20rem] p-6 sm:p-10 flex flex-col items-center">
              {/* <img
            src={logo}
            className="w-20 lg:w-24 mb-4 animate-bounce"
            alt="logo"
          /> */}
              <h1 class="text-4xl xl:text-6xl font-extrabold">
                Sign In
              </h1>

              <button
                onClick={onRequestClose}
                className="absolute text-[28px] right-[28px] sm:hidden text-gray-700 hover:text-gray-900 transition duration-300 p-2"
              >
                &times;
              </button>
              <div className="w-full mt-6 flex flex-col items-center">
                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-2 bg-[#df4930] text-white flex items-center justify-center transition duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mb-3">
                  <div className="bg-white p-1 rounded-full">
                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  <span className="ml-2">Sign In with Google</span>
                </button>
                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-2 bg-purple-700 text-white flex items-center justify-center transition duration-300 ease-in-out focus:outline-none hover:bg-purple-800 hover:shadow focus:shadow-sm focus:shadow-outline mb-3">
                  <div className="bg-white p-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-4 text-purple-700"
                      fill="currentColor"
                    >
                      <path d="M12 1C5.373 1 0 6.373 0 13s5.373 12 12 12 12-5.373 12-12S18.627 1 12 1zm0 22c-5.514 0-10-4.486-10-10S6.486 3 12 3s10 4.486 10 10-4.486 10-10 10zM9.5 8c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zM16.5 8c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zM12 15.5c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-7c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z" />
                    </svg>
                  </div>
                  <span className="ml-2">Sign In with Discord</span>
                </button>

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
                  <span className="ml-2">Sign In with GitHub</span>
                </button>
                <div className="my-4 border-b text-center w-full">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Or
                  </div>
                </div>
                <div className="mx-auto w-full max-w-xs">
                  <input
                    className="w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-3 transition duration-300 ease-in-out"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="w-full px-4 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-4 transition duration-300 ease-in-out"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
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
                    <span className="ml-2">Sign In</span>
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
                    New to
                    <a
                      href="#"
                      className="mx-1 text-blue-500 font-semibold transition duration-300 hover:border-b hover:border-blue-500 hover:text-blue-700"
                    >
                      Recag?
                    </a>
                    <span

                      className="cursor-pointer mx-1 text-blue-500 font-semibold transition duration-300 hover:text-blue-700 hover:border-b hover:border-blue-500 hover:border-solid"
                      onClick={openSignup} // Add onClick handler to open signup modal
                    >
                      Sign Up Now !!
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex lg:w-1/2 xl:w-7/12 items-center flex-col justify-center bg-blue-100 p-10">
              <button
                onClick={onRequestClose}
                className="absolute text-[28px] top-[120px] right-[30px] text-gray-700 hover:text-gray-900 transition duration-300 p-2"
              >
                &times;
              </button>
              <img
                src={logo}
                className="w-13 max-w-[50%] lg:w-17 mb-4 animate-bounce"
                alt="logo"
              />
              <div
                className="bg-contain bg-center bg-no-repeat w-full h-full transform hover:scale-105 transition duration-300 ease-in-out"
                style={{
                  backgroundImage: `url(${signin})`,
                }}
              ></div>
            </div>
          </div>
        </section>
      </Modal>
    </div>
  );
}
export default Login