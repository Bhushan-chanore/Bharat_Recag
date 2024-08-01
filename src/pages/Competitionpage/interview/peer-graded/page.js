import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import loader from "../../../../assets/loader.svg";
import Mobilemenu from "../../../Dashboard/Mobilemenu";
import Simplemenu from "../../../Dashboard/Simplemenu";
import ProfilePopup from '../../../../components/profile-popup.component';
import NotificationPopup from '../../../../components/notification-popup.component';
import { BellRing, Search } from 'lucide-react';
import SearchPopup from '../../../../components/search-popup.component';
// import Breadcrumb from '../../../components/breadcrumb.component';
import profile4 from "../../../image/fakers/profile-4.jpg";

const Page = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");

  async function fetchUserInfo() {
    try {
      const response = await axios.get("/api/getUserInfo");
      const data = response.data;
      setUsername(data.name ? data.name : " ");
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  }

  const handleStart = () => {
    if (!isChecked) return;
    setLoading(true);
    setTimeout(() => {
      navigate('/competition/interview/peer-graded/start'); // Use navigate for navigation
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  // above header
  const [isSearchPopupVisible, setIsSearchPopupVisible] = useState(false);
  const [isNotificationPopupVisible, setIsNotificationPopupVisible] =
    useState(false);
  const [isProfilePopupVisible, setIsProfilePopupVisible] = useState(false);

  const toggleSearchPopup = () => {
    closeOtherPopups();
    setIsSearchPopupVisible(!isSearchPopupVisible);
  };

  const toggleNotificationPopup = () => {
    closeOtherPopups();
    setIsNotificationPopupVisible(!isNotificationPopupVisible);
  };

  const toggleProfilePopup = () => {
    closeOtherPopups();
    setIsProfilePopupVisible(!isProfilePopupVisible);
  };

  const closeOtherPopups = () => {
    setIsNotificationPopupVisible(false);
    setIsProfilePopupVisible(false);
  };

  return (
    <>
      <Mobilemenu />
      <div className="flex sm:my-[1rem] sm:mx-[1.3rem] m-2">
        <Simplemenu style={{ color: "#fff" }} />
        <div
          className="das md:max-w-auto min-h-screen min-w-0 max-w-full flex-1 rounded-[30px] bg-slate-100 px-4 pb-10 before:block before:h-px before:w-full before:content-[''] dark:bg-darkmode-700 md:px-[22px]"
          style={{
            overflowY: "scroll",
            height: "70rem",
            overflowX: "hidden",
            width: "100vw",
            backgroundColor: "white",
            borderRadius: "30px",
          }}
        >
          {/* <!-- BEGIN: Top Bar --> */}
          <div className="relative z-[51] sm:flex hidden h-[67px] items-center border-b border-slate-200">
            <div
              aria-label="breadcrumb"
              className=" -intro-x mr-auto hidden sm:flex"
            >
              <ol className="flex items-center text-theme-1 dark:text-slate-300">
                <li className="">
                  <a href="/">Application</a>
                </li>
                <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-black before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white text-slate-800 cursor-text dark:text-slate-400">
                  <a href="/interview">Interview</a>
                </li>
                <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-black before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white text-slate-800 cursor-text dark:text-slate-400">
                  <a href="/interview/peer-grade">Peergrade</a>
                </li>
              </ol>
            </div>
            {/* <!-- BEGIN: Search --> */}
            <div
              className="search intro-x relative mr-3 sm:mr-6"
              style={{ backgroundColor: "transparent" }}
            >
              <div className="relative hidden sm:block">
                <input
                  data-tw-merge=""
                  type="text"
                  placeholder="Search..."
                  className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent ease-in-out text-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-opacity-40 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 w-56 rounded-full border-transparent bg-slate-300/50 pr-8 shadow-none transition-[width] duration-300 focus:w-72 focus:border-transparent dark:bg-darkmode-400/70"
                  onClick={toggleSearchPopup}
                />
                <Search
                  data-tw-merge=""
                  data-lucide="search"
                  className="stroke-1.5 w-5 h-5 absolute inset-y-0 right-0 my-auto mr-3 text-slate-600 dark:text-slate-500"
                />
              </div>
              {isSearchPopupVisible && <SearchPopup />}
            </div>
            {/* <!-- END: Search  --> */}

            {/* <!-- BEGIN: Notifications --> */}
            <div
              data-tw-merge=""
              data-tw-placement="bottom-end"
              className="dropdown relative intro-x mr-auto sm:mr-6"
            >
              <div
                data-tw-toggle="dropdown"
                aria-expanded="false"
                className="cursor-pointer relative block text-slate-600 outline-none before:absolute before:right-0 before:top-[-2px] before:h-[8px] before:w-[8px] before:rounded-full before:bg-danger before:content-['']"
              >
                <i
                  data-tw-merge=""
                  data-lucide="bell"
                  className="stroke-1.5 w-5 h-5 dark:text-slate-500"
                  onClick={toggleNotificationPopup}
                >
                  <BellRing />
                </i>
              </div>
              {isNotificationPopupVisible && <NotificationPopup />}
            </div>
            {/* <!-- END: Notifications  --> */}

            {/* <!-- BEGIN: Profile Menu --> */}
            <div
              data-tw-merge=""
              data-tw-placement="bottom-end"
              className="dropdown relative"
            >
              <button
                data-tw-toggle="dropdown"
                aria-expanded="false"
                className="cursor-pointer image-fit zoom-in intro-x block h-8 w-8 overflow-hidden rounded-full shadow-lg"
                onClick={toggleProfilePopup}
              >
                <img
                  src={profile4}
                  alt="Midone - Tailwind Admin Dashboard Template"
                />
              </button>
              {isProfilePopupVisible && <ProfilePopup />}
            </div>
            {/* <!-- END: Profile Menu --> */}
          </div>
          {/* <!-- END: Top Bar --> */}

          <div className="flex justify-center items-center min-h-[70vh]">
            <div className="max-w-2xl px-10 py-14 flex flex-col justify-center items-center gap-5">
              <h1 className="font-medium sm:text-[2rem] text-[1rem]">
                <span className="text-blue-500 ">{username.split(' ')[0]}</span> Welcome to Peer-graded Interview
              </h1>
              <ol className="pl-4 text-gray-700 my-5 sm:text-[1rem] text-[0.8rem]">
                <li className="list-decimal">
                  To minimize technical difficulties during the interview, please use a computer with a camera and microphone. Also, update to the latest version of Chrome.
                </li>
                <li className="list-decimal">
                  To avoid technical difficulties during the interview, please perform equipment test prior to the interview.
                </li>
                <li className="list-decimal">
                  During the interview, we may collect some data in order to provide you with better online interview services.
                </li>
                <li className="list-decimal">
                  There will be one question and you will be given 90 seconds to speak. It is preferred to answer the question in a brief and meaningful way.
                </li>
              </ol>

              <div className="flex items-center gap-3 cursor-pointer" onClick={() => setIsChecked(prev => !prev)}>
                <input type="checkbox" className="w-4 h-4 rounded-lg" checked={isChecked} onChange={() => { }} />
                <p className={`${!isChecked && 'text-gray-2'}`}>I have carefully read and agree to the above content</p>
              </div>

              <div>
                <button
                  onClick={handleStart}
                  className="w-[200px] bg-darkblue-100 text-white rounded-xl px-3 py-2 disabled:cursor-not-allowed"
                  disabled={!isChecked}
                >
                  {loading ?
                    <img src={loader} className="w-6 h-6 object-contain mx-auto" alt="loader" /> :
                    "Start Interview"
                  }
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
