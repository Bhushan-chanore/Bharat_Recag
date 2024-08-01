import React, { useState } from "react";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import { Link } from "react-router-dom";

const ProfilePopup = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const toggleModal = (modal) => {
    setModalIsOpen(true);
    setActiveModal(modal);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setActiveModal(null);
  };

  const handleLogin = () => {
    // Add logic to handle user login
    setIsLoggedIn(true);
    closeModal();
  };

  const handleLogout = () => {
    // Add logic to handle user logout
    setIsLoggedIn(false);
  };

  return (
    <div
      className="dropdown-menu absolute z-[9999]"
      style={{
        display: "block",
        inset: "0px 0px auto auto",
        transform: "translate(-4px, 39px)",
        color: "white",
      }}
    >
      <div className="dropdown-content rounded-md border-transparent p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 mt-px w-56 bg-theme-1 text-white">
        <div className="p-2 font-medium">
          <div>Tom Cruise</div>
          <div className="mt-0.5 text-xs text-white/70 dark:text-slate-500">
            DevOps Engineer
          </div>
        </div>
        <div className="h-px my-2 -mx-2 bg-slate-200/60 dark:bg-darkmode-400 bg-white/[0.08]"></div>
        <Link className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:hover:bg-darkmode-400 hover:bg-white/5 text-white" to="/dashboard">
          <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user mr-1.5">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          Profile
        </Link>
        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:hover:bg-darkmode-400 hover:bg-white/5 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-plus mr-1.5">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="19" x2="19" y1="8" y2="14" />
            <line x1="22" x2="16" y1="11" y2="11" />
          </svg>
          Add Account
        </a>
        <Link className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:hover:bg-darkmode-400 hover:bg-white/5 text-white" to="/forgetpassword">
          <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-key-round mr-1.5">
            <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
          </svg>
          Reset Password
        </Link>
        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:hover:bg-darkmode-400 hover:bg-white/5 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle-question mr-1.5">
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
          Help
        </a>
        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:hover:bg-darkmode-400 hover:bg-white/5 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out mr-1.5">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" x2="9" y1="12" y2="12" />
          </svg>
          {isLoggedIn ? (
            <span onClick={handleLogout}>Logout</span>
          ) : (
            <span onClick={() => toggleModal("login")}>Login</span>
          )}
        </a>
      </div>
      <Login
        isOpen={modalIsOpen && activeModal === "login"}
        onRequestClose={closeModal}
        onLogin={handleLogin}
        openSignup={() => toggleModal("signup")}
      />
      <Signup
        isOpen={modalIsOpen && activeModal === "signup"}
        onRequestClose={closeModal}
        openLogin={() => toggleModal("login")}
      />
    </div>
  );
};

export default ProfilePopup;
