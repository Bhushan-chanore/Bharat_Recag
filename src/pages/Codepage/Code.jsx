import React, { useContext, useState } from "react";
import "./Code.css";

import img1 from "../../assets/code-img1.svg";
import { Cards } from "../Cards";

import { MdOutlineInsights } from "react-icons/md";
import { GoTag } from "react-icons/go";

import img2 from "../../assets/code-img2.jpeg";
import img3 from "../../assets/code-img3.png";
import img4 from "../../assets/code-img4.png";
import img5 from "../../assets/code-img5.png";
import img6 from "../../assets/exercisedataset-img1.png";
import img7 from "../../assets/exercisedataset-img2.jpg";
import img8 from "../../assets/exercisedataset-img4.jpeg";

import "../css/vendors/tippy.css";
import "../css/vendors/litepicker.css";
import "../css/vendors/tiny-slider.css";
import "../css/themes/rubick/side-nav.css";
import "../css/vendors/leaflet.css";
import "../css/vendors/simplebar.css";
import "../css/components/mobile-menu.css";
import "../css/app.css";

import Simplemenu from "../Dashboard/Simplemenu";
import Mobilemenu from "../Dashboard/Mobilemenu";
import profile4 from "../image/fakers/profile-4.jpg";
import {  BellRing } from "lucide-react";
import { FaPlus } from "react-icons/fa";
import NotificationPopup from "../../components/notification-popup.component";
import ProfilePopup from "../../components/profile-popup.component";

function Code() {
 
  const data = [
    {
      id: 1,
      title: "All notebooks",
    },
    {
      id: 2,
      title: "Recently Viewed",
    },
    {
      id: 3,
      title: "Python",
    },
    {
      id: 4,
      title: "R",
    },
    {
      id: 5,
      title: "Beginner",
    },
    {
      id: 6,
      title: "NLP",
    },
    {
      id: 7,
      title: "Random Forest",
    },
    {
      id: 8,
      title: "GPU",
    },
    {
      id: 9,
      title: "TPU",
    },
    {
      id: 10,
      title: "Competition notebook",
    },
    {
      id: 11,
      title: "Scheduled notebook",
    },
  ];
  const trendingCode = [
    {
      id: 1,
      rating: 18,
      image: img2,
      title: "Crime",
      desc1: "Updated 9 hours ago",
      use: "Crime in Los Angeles Data from 2020 to Present",
    },
    {
      id: 2,
      rating: 18,
      image: img3,
      title: "Crime",
      desc1: "Updated 9 hours ago",
      use: "Crime in Los Angeles Data from 2020 to Present",
    },
    {
      id: 3,
      rating: 12,
      image: img4,
      title: "Crime",
      desc1: "Updated 9 hours ago",
      use: "Crime in Los Angeles Data from 2020 to Present",
    },
    {
      id: 4,
      rating: 18,
      image: img5,
      title: "Crime",
      desc1: "Updated 9 hours ago",
      use: "Crime in Los Angeles Data from 2020 to Present",
    },
  ];
  const exerciseData = [
    {
      id: 1,
      rating: 8,
      image: img6,
      title: "Factors influencing US House Prices",
      desc1: "Jyotsna Gurjar",
      time: "Updated a day ago",
      use: "Usability 7.6",
      size: "8 kB",
      desc3: "1 File (CSV)",
    },
    {
      id: 2,
      rating: 18,
      image: img7,
      title: "Online Retail Transaction Records",
      desc1: "The Devastator",
      time: "Updated 2 days ago",
      use: "Usability 7.1",
      size: "9 MB",
      desc3: "1 File (CSV)",
    },
    {
      id: 3,
      rating: 12,
      image: img7,
      title: "SXSW 2019 Schedule Dataset",
      desc1: "The Devastator",
      time: "Updated 4 days ago",
      use: "Usability 10.0",
      size: "2 MB",
      desc3: "3 File (CSV,other)",
    },
    {
      id: 4,
      rating: 18,
      image: img8,
      title: "Heart Failure Prediction",
      desc1: "Bhavik Jikadara",
      time: "Updated 4 days ago",
      use: "Usability 8.8",
      size: "4 kB",
      desc3: "1 File (CSV)",
    },
  ];

 

  const [isNotificationPopupVisible, setIsNotificationPopupVisible] =
    useState(false);
  const [isProfilePopupVisible, setIsProfilePopupVisible] = useState(false);

  
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


  // search bar with category containt
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [isSearchBarActive, setSearchBarActive] = useState(false);


  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setDropdownOpen(false);
    setInputValue(category);
    // Trigger search
    console.log(`Search started for category: ${category}`);
  };

  const activateSearchBar = () => {
    setSearchBarActive(true);
  };

  const deactivateSearchBar = () => {
    setSearchBarActive(false);
  };


  return (
    <div>
      <Mobilemenu />
      <div className="flex sm:my-[1rem] sm:mx-[1.3rem] m-2">
        {/* <div className="flex"> */}
        <Simplemenu style={{ color: "#fff" }} />
        <section
          className={`code das`}
          style={{
            overflowY: "scroll",
            height: "70rem",
            width: "100vw",
            background: "#ffffff",
            borderRadius: "30px",
            
          }}
        >
          {/* <Header /> */}
          <div className="container">
            <div className="code-section">
              <div className="top-section">
                {/* <!-- BEGIN: Top Bar --> */}
                <div
                  className="relative z-[51] sm:flex hidden h-[67px] items-center border-b border-slate-200"
                  style={{ marginTop: "-47px" }}
                >
                  <div
                    aria-label="breadcrumb"
                    className=" -intro-x mr-auto hidden sm:flex"
                  >
                    <ol className="flex items-center text-theme-1 dark:text-slate-300">
                      <li className="">
                        <a href="/">Application</a>
                      </li>
                      <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-black before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white text-slate-800 cursor-text dark:text-slate-400">
                        <a href="/code">Code</a>
                      </li>
                    </ol>
                  </div>
                 
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

                <div className="code-details">
                  <div className="code-content">
                    <h1 className="main-title">Code</h1>
                    <p className="code-para">
                      Explore, analyze, and share quality data. Learn more about
                      data types, creating, and collaborating.
                    </p>
                    <div className="flex flex-row gap-4">
                      <div>
                        {/* <FaPlus className='plus-icon' /> */}
                        <button
                          className="bg-darkblue-100 hover:bg-blue-600 text-white font-[600]  flex"
                          style={{
                            borderRadius: "20px",
                            padding: "8px 16px 8px 12px",
                          }}
                        >
                          <FaPlus className="plus-icon" />{" "}
                          <span className="ml-2 text-[14px]">New Notebook</span>
                        </button>
                      </div>
                      <div
                        className=""
                        style={{
                          borderRadius: "20px",
                          padding: "8px 16px 8px 12px",
                          border: "1px solid black",
                        }}
                      >
                        <div className=" text-[14px]">Your Work</div>
                      </div>
                    </div>
                  </div>
                  <div className="code-image">
                    <img src={img1} alt="logo-1" width={220} height={170} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="trending-section">

              {/* search with category */}
              
              <div className="outer-section flex mb-12">
  <form className="w-full max-w-lg ml-auto sm:px-4 px-0 md:px-0">
    <div className="flex flex-row items-center">
      {/* Dropdown Button */}
      <div className="relative inline-block text-left mt-2 mb-2 md:mb-0">
        <button
          type="button"
          className="flex z-10 items-center justify-center h-full py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg md:rounded-tl-[20px] md:rounded-bl-[20px] hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 transition-colors duration-300 w-full md:w-auto"
          onClick={toggleDropdown}
          style={{borderRadius:"25px 0 0 25px"}}
        >
 {selectedCategory ? selectedCategory.slice(0, 10) : "Codes"}  
          <svg
            className="w-2.5 h-2.5 ml-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {/* Dropdown Content */}
        {isDropdownOpen && (
          <div className="absolute z-10 mt-1 w-44 bg-white divide-y divide-gray-100 rounded-b-lg shadow-lg dark:bg-gray-700 transition-opacity duration-300 opacity-100">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              {data.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className="w-full px-4 py-2 text-left hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => handleCategoryClick(item.title)}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* Search Input */}
      <div className="relative flex-grow">
        <input
          type="search"
          className={`block w-full md:w-[18rem] lg:w-[21rem] h-full py-2.5 pl-3 pr-12 text-sm text-gray-900 bg-transparent border border-gray-300 rounded-r-lg md:rounded-tr-[20px] md:rounded-br-[20px] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 transition-all duration-300 ${
            isSearchBarActive ? "w-full md:w-[21rem]" : "w-full md:w-[18rem]"
          }`}
          style={{borderRadius:"0 25px 25px 0"}}
          placeholder="Search for code here..."
          onFocus={activateSearchBar}
          onBlur={deactivateSearchBar}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} 
          required
        />

        <button
          type="submit"
          className="absolute top-0 right-0 flex items-center justify-center w-10 md:w-12 h-full text-white bg-blue-700 rounded-r-lg md:rounded-tr-[20px] md:rounded-br-[20px] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors duration-300"
          style={{borderRadius:"0 25px 25px 0"}}>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </div>
  </form>
</div>  


            <div className="z-[0] flex justify-between mb-4">
                <div className="trending-logo">
                  <MdOutlineInsights className="timeline-icon" />
                  <h1 className="trending-title">Trending</h1>
                </div>
                <div className="trending-side-data">See All</div>
              </div>

              <div className="trending-cards grid4">
                {trendingCode.map((data) => {
                  return <Cards key={data.id} {...data} />;
                })}
              </div>
            </div>
            <div className="exercise-section">
              <div className="top-exercise">
                <div className="exercise-logo">
                  <GoTag className="exercise-icon" />
                  <h1 className="exercise-title">Linear Regression</h1>
                </div>
                <div className="exercise-side-data">See All</div>
              </div>
              <div className="exercise-cards grid4">
                {exerciseData.map((data) => {
                  return <Cards key={data.id} {...data} />;
                })}
              </div>
            </div>
            <div className="finance-section">
              <div className="top-finance">
                <div className="finance-logo">
                  <GoTag className="finance-icon" />
                  <h1 className="finance-title">Global</h1>
                </div>
                <div className="finance-side-data">See All</div>
              </div>
              <div className="finance-cards grid4">
                {exerciseData.map((data) => {
                  return <Cards key={data.id} {...data} />;
                })}
              </div>
            </div>
            <div className="finance-section">
              <div className="top-finance">
                <div className="finance-logo">
                  <GoTag className="finance-icon" />
                  <h1 className="finance-title">PyTorch</h1>
                </div>
                <div className="finance-side-data">See All</div>
              </div>
              <div className="finance-cards grid4">
                {exerciseData.map((data) => {
                  return <Cards key={data.id} {...data} />;
                })}
              </div>
            </div>
            <div className="social-section">
              <div className="top-social">
                <div className="social-logo">
                  <GoTag className="social-icon" />
                  <h1 className="social-title">Competition Notebooks</h1>
                </div>
                <div className="social-side-data">See All</div>
              </div>
              <div className="social-cards grid4">
                {exerciseData.map((data) => {
                  return <Cards key={data.id} {...data} />;
                })}
              </div>
            </div>
            <div className="explore-section">
              <div className="explore-title">
                Didn&apos;t find what you were looking for?
              </div>
              <div className="explore-button bg-darkblue-100">
                <div className="button-content ">
                  Explore all public notebooks
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Code;
