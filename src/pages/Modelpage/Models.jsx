import React, { useContext, useState } from "react";
import "./Models.css";
import { MdOutlineInsights } from "react-icons/md";
import img1 from "../../assets/model-img1.svg";
import img2 from "../../assets/cardimg-audio.svg";
import img3 from "../../assets/cardimg-pose.svg";
import img4 from "../../assets/cardimg-resolution.svg";
import img5 from "../../assets/cardimg-processing.svg";
import img6 from "../../assets/cardimg-detection.svg";
import img7 from "../../assets/cardimg-other.svg";
import img8 from "../../assets/cardimg-generation.svg";
import { SearchBar } from "../SearchBar";
import { ImagelessCard } from "../ImagelessCard";
import { AnimatedCard } from "../AnimatedCard";
import { AppContext } from "../context/context";

import "../css/vendors/tippy.css";
import "../css/vendors/litepicker.css";
import "../css/vendors/tiny-slider.css";
import "../css/themes/rubick/side-nav.css";
import "../css/vendors/leaflet.css";
import "../css/vendors/simplebar.css";
import "../css/components/mobile-menu.css";
import Mobilemenu from "../Dashboard/Mobilemenu";
import Simplemenu from "../Dashboard/Simplemenu";
import profile4 from "../image/fakers/profile-4.jpg";
import {  BellRing } from "lucide-react";
import Hugcard from "../Hugcard";
import { FaPlus } from "react-icons/fa";

import NotificationPopup from "../../components/notification-popup.component";
import ProfilePopup from "../../components/profile-popup.component";

export default function Models() {
  

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

 
  
  const data = [
    {
      id: 1,
      title: "All models",
    },
    {
      id: 2,
      title: "Computer Science",
    },
    {
      id: 3,
      title: "Education",
    },
    {
      id: 4,
      title: "Classification",
    },
    {
      id: 5,
      title: "Computer Vision",
    },
    {
      id: 6,
      title: "NLP",
    },
    {
      id: 7,
      title: "Data Visualization",
    },
    {
      id: 8,
      title: "Pre-Trained Model",
    },
  ];

  const recentData = [
    {
      id: 1,
      title: "microsoft/orca-math-word-problems-200k",
      days: "7",
      download: "1.76k",
      likes: "25",
    },
    {
      id: 2,
      title: "microsoft/orca-math-word-problems-200k",
      days: "7",
      download: "1.76k",
      likes: "25",
    },
    {
      id: 3,
      title: "microsoft/orca-math-word-problems-200k",
      days: "7",
      download: "1.76k",
      likes: "25",
    },
    {
      id: 4,
      title: "microsoft/orca-math-word-problems-200k",
      days: "7",
      download: "1.76k",
      likes: "25",
    },
    {
      id: 5,
      title: "microsoft/orca-math-word-problems-200k",
      days: "7",
      download: "1.76k",
      likes: "25",
    },
    {
      id: 6,
      title: "microsoft/orca-math-word-problems-200k",
      days: "7",
      download: "1.76k",
      likes: "25",
    },
    {
      id: 7,
      title: "microsoft/orca-math-word-problems-200k",
      days: "7",
      download: "1.76k",
      likes: "25",
    },
    {
      id: 8,
      title: "microsoft/orca-math-word-problems-200k",
      days: "7",
      download: "1.76k",
      likes: "25",
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
        <Simplemenu style={{ color: "#fff" }} />
        <section
          className={`model das`}
          style={{
            overflowY: 'scroll',
            height: "70rem",
            width: "100vw",
            backgroundColor: "#ffffff",
            borderRadius: "30px",
            padding: "0 2rem",
          }}
        >
          <div className="container p-1">
            <div className="model-section">
              <div className="top-section">
                {/* <!-- BEGIN: Top Bar --> */}
                <div
                  className="relative flex h-[67px] items-center border-b border-slate-200"
                  style={{ marginTop: "-37px", zIndex: 0 }}
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
                        <a href="/model">Model</a>
                      </li>
                    </ol>
                  </div>
                  {/* <!-- BEGIN: Search --> */}
                 
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

                <div className="model-details">
                  <div className="model-content">
                    <h1 className="main-title">Models</h1>
                    <p className="model-para">
                      Search and discover hundreds of trained, ready-to-deploy
                      machine learning models in one place.
                    </p>

                    <div className="flex flex-row gap-[1rem]">
                      <button
                        className="bg-darkblue-100 hover:bg-blue-600 text-white font-[600]  flex"
                        onClick={toggleModal}
                        style={{
                          borderRadius: "20px",
                          padding: "8px 16px 8px 12px",
                        }}
                      >
                        <FaPlus className="plus-icon" />{" "}
                        <span className="ml-2 text-[14px]">Add Model</span>
                      </button>
                      {isOpen && (
                        <div
                          className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-50 transition-opacity duration-300"
                          onClick={toggleModal}
                        >
                          <div
                            className="relative p-6 w-full max-w-lg rounded-lg shadow-lg dark:bg-gray-800 transition-transform transform scale-95 duration-300"
                            onClick={(e) => e.stopPropagation()}
                            style={{backgroundColor:"#ffffff"}}

                          >
                            {/* Modal header */}
                            <div className="flex items-center justify-between border-b pb-3">
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Create New Model
                              </h3>
                              <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={toggleModal}
                              >
                                <svg
                                  className="w-4 h-4"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 14 14"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                                  />
                                </svg>
                                <span className="sr-only">Close modal</span>
                              </button>
                            </div>
                            {/* Modal body */}
                            <form className="mt-4 space-y-4">
                              <div>
                                <label
                                  htmlFor="name"
                                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Name
                                </label>
                                <input
                                  type="text"
                                  name="name"
                                  id="name"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                  placeholder="Type Model name"
                                  required
                                />
                              </div>
                              <div>
                                <label
                                  htmlFor="link"
                                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Link
                                </label>
                                <input
                                  type="url"
                                  name="link"
                                  id="link"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                  placeholder="Type or paste a URL"
                                />
                              </div>

                              <div>
                                <label
                                  htmlFor="category"
                                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Category
                                </label>
                                <select
                                  id="category"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                >
                                  <option>Select category</option>
                                  <option value="TV">TV/Monitors</option>
                                  <option value="PC">PC</option>
                                  <option value="GA">Gaming/Console</option>
                                  <option value="PH">Phones</option>
                                </select>
                              </div>
                              <div>
                                <label
                                  htmlFor="files"
                                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Upload Files
                                </label>
                                <input
                                  type="file"
                                  id="files"
                                  name="files"
                                  multiple
                                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                />
                              </div>
                              <div>
                                <label
                                  htmlFor="description"
                                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                  Model Description
                                </label>
                                <textarea
                                  id="description"
                                  rows="4"
                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                  placeholder="Write Model description here"
                                ></textarea>
                              </div>
                              <button
                                type="submit"
                                className="w-full text-white gradient-button focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-300"
                              >
                                <svg
                                  className="inline-block w-5 h-5 mr-2"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                                Add New Model
                              </button>
                            </form>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="models-image">
                    <img src={img1} alt="models" width={220} height={170} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="trending-models">
              {/* search with category */}
              <div className="outer-section flex mb-[3rem]">
              <form className="max-w-lg ml-auto">
                <div className="flex items-center">
                  {/* Dropdown Button */}
                  <div className="relative inline-block text-left">
                    <button
                      type="button"
                      className="flex z-10 items-center rounded-tl-[20px] rounded-bl-[20px] justify-center py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 transition-colors duration-300"
                      onClick={toggleDropdown}
                    >
                      {selectedCategory || "All categories"}
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
                      <div className="absolute z-10 mt-1 w-44 bg-[#ffffff] divide-y divide-gray-100 rounded-b-lg shadow-lg dark:bg-gray-700 transition-opacity duration-300 opacity-100">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                          {data.map((item) => (
                            <li key={item.id}>
                              <button
                                type="button"
                                className="w-full px-4 py-2 text-left hover:bg-[#e2e8f0] dark:hover:bg-gray-600 dark:hover:text-white"
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
                      className={`block py-2.5 pl-3 pr-16 text-sm text-gray-900 bg-transparent border border-gray-300 rounded-tr-[20px] rounded-br-[20px] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 transition-all duration-300 ${
                        isSearchBarActive ? "w-[21rem]" : "w-[18rem]"
                      }`}
                      placeholder="Search for Model here..."
                      onFocus={activateSearchBar}
                      onBlur={deactivateSearchBar}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)} 
                      required
                    />

                    <button
                      type="submit"
                      className="absolute top-0 right-0 flex items-center justify-center w-12 h-full text-white bg-blue-700 rounded-tr-[20px] rounded-br-[20px] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors duration-300"
                    >
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



              <div className="top-trending">
                <div className="trending-logo">
                  <MdOutlineInsights className="timeline-icon" />
                  <h1 className="trending-title">Trending Models</h1>
                </div>
                <div className="trending-side-data">See All</div>
              </div>

              <div className="trending-cards grid4">
                <ImagelessCard />
                <ImagelessCard />
                <ImagelessCard />
                <ImagelessCard />
              </div>
            </div>
          </div>

          <div className="trending-section">
            <div className="top-trending">
              <div className="trending-logo">
                <MdOutlineInsights className="timeline-icon" />
                <h1 className="trending-title">Top Required Models</h1>
              </div>
              <div className="trending-side-data">
                <a href="/model/trending-model">See All</a>
              </div>
            </div>
            <div className="hugc flex flex-row flex-wrap justify-evenly">
              {recentData.map((data) => {
                return <Hugcard key={data.id} {...data} />;
              })}
            </div>
          </div>

          <div className="model-explore-section">
            <div className="explore-title">
              Didn&apos;t find what you were looking for?
            </div>
            <p className="explore-para">
              Explore Recag-curated Models from organizations like Google
              Research, Deepmind, and more
            </p>
            <div
              className="explore-button"
              style={{ backgroundColor: "#1e40ad" }}
            >
              <div className="button-content">View all organization models</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
