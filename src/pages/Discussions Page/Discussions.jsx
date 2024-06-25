import React, { useState } from "react";
import "./Discussions.css";
import img1 from "../../assets/discussion-img1.svg";
import img2 from "../../assets/discussion-img2.svg";
import img3 from "../../assets/discussion-img3.svg";
import img4 from "../../assets/discussion-img4.svg";
import img5 from "../../assets/discussion-img5.svg";
import img6 from "../../assets/discussion-img6.svg";
import img7 from "../../assets/discussion-img7.svg";
import img8 from "../../assets/h-threedots.svg";
import forumImg from "../../assets/discussion-forum.svg";
import groupImg from "../../assets/discussion-group.svg";
import { Link } from "react-router-dom";

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
import {
  BellRing,
  HeartHandshake,
  Dot,
  Eye,
  LibraryBig,
  MessageCircle,
  Search,
  SquareMousePointer,
  ThumbsUp,
} from "lucide-react";
import { FaPlus } from "react-icons/fa";
import NotificationPopup from "../../components/notification-popup.component";
import ProfilePopup from "../../components/profile-popup.component";

export default function Discussions() {
  const [visible, setVisible] = useState(false);
  const [isTitleFocused, setIsTitleFocused] = useState(false);
  const [isProblemFocused, setIsProblemFocused] = useState(false);
  const [isTagsFocused, setIsTagsFocused] = useState(false);



  const data = [
    {
      id: 1,
      title: "# Machine Learning",
    },
    {
      id: 2,
      title: "# Data Science",
    },
    {
      id: 3,
      title: "# NLP",
    },
    {
      id: 4,
      title: "# Data Handling",
    },
    {
      id: 5,
      title: "# Deep Learning",
    },
    {
      id: 6,
      title: "# Nueral Network",
    },
    {
      id: 7,
      title: "Data Visualization",
    },
    {
      id: 8,
      title: "Pre-Trained Model",
    },
    {
      id: 9,
      title: "Nextjs",
    },
    {
      id: 10,
      title: "SSR",
    },
  ];

  const questions = [
    {
      id: 1,
      title:
        "Best practices for data fetching in a Next.js application with Server-Side...",
      tag: [
        {
          tag1: "NEXTJS",
          tag2: "REACT",
        },
      ],
      name: " Mrityunjay Pathak",
      time: "asked 5 month ago",
      votes: "29 Likes",
      answer: "19 answer",
      views: "50 views",
    },
    {
      id: 2,
      title: "Async/Await Function Not Handling Errors Properly",
      tag: [
        {
          tag1: "NEXTJS",
          tag2: "REACT",
        },
      ],
      name: " Mrityunjay Pathak",
      time: "asked 3 month ago",
      votes: "9 Likes",
      answer: "19 answer",
      views: "50 views",
    },
    {
      id: 3,
      title: "Product Feedback",
      tag: [
        {
          tag1: "NEXTJS",
          tag2: "REACT",
        },
      ],
      name: " Mrityunjay Pathak",
      time: "asked 2 month ago",
      votes: "9 Likes",
      answer: "1 answer",
      views: "5 views",
    },
    {
      id: 4,
      title: "Next JS router",
      tag: [
        {
          tag1: "NEXTJS",
          tag2: "REACT",
        },
      ],
      name: " Mrityunjay Pathak",
      time: "asked 1 month ago",
      votes: "29 Likes",
      answer: "29 answer",
      views: "20 views",
    },
    {
      id: 5,
      title: "Competition Hosting",
      tag: [
        {
          tag1: "NEXTJS",
          tag2: "REACT",
        },
      ],
      name: " Mrityunjay Pathak",
      time: "asked 3 month ago",
      votes: "91 Likes",
      answer: "9 answer",
      views: "501 views",
    },
    {
      id: 6,
      title: "Accomplishments",
      tag: [
        {
          tag1: "NEXTJS",
          tag2: "REACT",
        },
      ],
      name: " Mrityunjay Pathak",
      time: "asked 2 month ago",
      votes: "19 Likes",
      answer: "9 answer",
      views: "150 views",
    },
  ];


  const [isNotificationPopupVisible, setIsNotificationPopupVisible] = useState(false);
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

  // if (!visible) return null;

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
          className={`discussion das`}
          style={{
            overflowY: "scroll",
            height: "70rem",
            width: "100vw",
            backgroundColor: "#ffffff",
            borderRadius: "30px",
          }}
        >
          <div className="container">
            <div className="discussion-section">
              <div className="top-section">
                {/* <!-- BEGIN: Top Bar --> */}
                <div
                  className="relative sm:flex hidden h-[67px] items-center border-b border-slate-200"
                  style={{ marginTop: "-47px", zIndex: 0 }}
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
                        <a href="/discussions">Discussions</a>
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

                <div className="discussion-details">
                  <div className="discussion-content">
                    <h1 className="main-title">Discussions</h1>
                    <p className="discussion-para sm:w-[350px] w-full">
                      Discuss the Recag platform & machine learning topics -
                      this includes sharing feedback, asking questions, and
                      more.
                    </p>
                    <Link to="#" className="btn">
                      <div
                        className="w-[155px] justify-center mt-4"
                        style={{
                          borderRadius: "20px",
                          padding: "8px 16px 8px 20px",
                          border: "1px solid black",
                        }}
                      >
                        <div className=" text-[14px] font-medium mx-auto">
                          Your Discussions
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="datasets-image">
                    <img src={img1} alt="logo-1" width={220} height={170} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row flex-wrap justify-between gap-4">
            <div className="flex flex-wrap  gap-4 ">
              <Link to="/discussions/community">
                {" "}
                <button
                  className="bg-darkblue-100 hover:bg-blue-600 text-white font-[600]  flex"
                  style={{ borderRadius: "20px", padding: "8px 16px 8px 12px" }}
                >
                  <span className="ml-2 text-[14px] flex flex-row gap-1">
                    {" "}
                    Community <HeartHandshake size={20} />
                  </span>
                </button>
              </Link>

              <Link to="/discussions/community">
                {" "}
                <button
                  className="bg-darkblue-100 hover:bg-blue-600 text-white font-[600]  flex"
                  style={{ borderRadius: "20px", padding: "8px 16px 8px 12px" }}
                >
                  <span className="ml-2 text-[14px] flex flex-row gap-1">
                    Collections <LibraryBig size={20} />
                  </span>
                </button>
              </Link>

              <Link to="/discussions/community">
                {" "}
                <button
                  className="bg-darkblue-100 hover:bg-blue-600 text-white font-[600]  flex"
                  style={{ borderRadius: "20px", padding: "8px 16px 8px 12px" }}
                >
                  <span className="ml-2 text-[14px] flex flex-row gap-1">
                    Find Jobs <SquareMousePointer size={20} />
                  </span>
                </button>
              </Link>
            </div>



             {/* search with category */}
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
        >
 {selectedCategory ? selectedCategory.slice(0, 10) : "Discussions"}  
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
          placeholder="Search here..."
          onFocus={activateSearchBar}
          onBlur={deactivateSearchBar}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} 
          required
        />

        <button
          type="submit"
          className="absolute top-0 right-0 flex items-center justify-center w-10 md:w-12 h-full text-white bg-blue-700 rounded-r-lg md:rounded-tr-[20px] md:rounded-br-[20px] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors duration-300"
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

          </div>

          {/* stackoverflow part */}

          <div>
            <div className="dis-stack">
              <div className="dis-head flex flex-wrap gap-4">
                <h1 className="main-title text-[2.1rem]">All Questions</h1>
                <button
                  className="bg-darkblue-100 hover:bg-blue-600 text-white font-[600]  flex"
                  onClick={() => setVisible(true)}
                  style={{
                    borderRadius: "20px",
                    padding: "8px 16px 8px 12px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FaPlus className="plus-icon" />{" "}
                  <span className="ml-2 text-[14px]">Ask a Question</span>
                </button>
                {visible && (
                  <div
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-50 transition-opacity duration-300"
                    onClick={() => setVisible(false)}
                  >
                    <div
                      className="relative p-6 w-full max-w-lg rounded-lg shadow-lg bg-[#ffffff] transition-transform transform scale-95 duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center justify-between border-b pb-3">
                        <h3 className="text-xl font-semibold text-gray-900">
                          Ask a Question
                        </h3>
                        <button
                          type="button"
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center"
                          onClick={() => setVisible(false)}
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
                      <form className="mt-4 space-y-4">
                        <div>
                          <label
                            htmlFor="questionTitle"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Question Title
                          </label>
                          <input
                            id="questionTitle"
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                            placeholder="Enter your question title"
                            required
                            onFocus={() => setIsTitleFocused(true)}
                            onBlur={() => setIsTitleFocused(false)}
                          />
                          {isTitleFocused && (
                            <p className="text-xs text-gray-500 mt-1">
                              Be specific and imagine you're asking a question
                              to another person.
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="problemExplanation"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Detail Explanation of Your Problem
                          </label>
                          <textarea
                            id="problemExplanation"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                            rows="4"
                            placeholder="Provide a detailed explanation of your problem"
                            required
                            onFocus={() => setIsProblemFocused(true)}
                            onBlur={() => setIsProblemFocused(false)}
                          ></textarea>
                          {isProblemFocused && (
                            <p className="text-xs text-gray-500 mt-1">
                              Introduce the problem and expand on what you put
                              in the title. Minimum 20 characters.
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="tags"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Tags
                          </label>
                          <input
                            id="tags"
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                            placeholder="Enter tags and press enter"
                            required
                            onFocus={() => setIsTagsFocused(true)}
                            onBlur={() => setIsTagsFocused(false)}
                          />
                          {isTagsFocused && (
                            <p className="text-xs text-gray-500 mt-1">
                              Add up to 3 tags to describe what your question is
                              about. Press enter to add a tag.
                            </p>
                          )}
                        </div>

                        <div className="text-center mt-4">
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
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>

              <div className="dis-search">
                <div
                  className="flex min-h-[56px] items-center gap-4 rounded-[5px] px-8  border border-gray-300"
                  style={{
                    borderRadius: "5px",
                    fontSize: "20px",
                    padding: "5px",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <input
                    className="dis-se flex h-10 w-full rounded-md border-none px-8 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 text-center my-1 bg-white font-medium"
                    placeholder="Search for Questions"
                    type="text"
                    style={{ backgroundColor: "" }}
                  />
                  <div className="pr-6">
                    <Search size={24} />
                  </div>
                </div>
                {/* <input className='dis-sea' type='text' placeholder='Search for Question'/> */}
              </div>

              <div className="dis-question ">
                {questions.map((item) => (
                  <div
                    className=" transform transition-transform duration-300 hover:scale-105"
                    style={{
                      borderRadius: "5px",
                      marginBottom: "30px",
                      backgroundColor: "#f1f5f9",
                    }}
                    key={item.id}
                  >
                    <div
                      className="dis-card"
                      style={{ borderRadius: "5px", marginBottom: "30px" }}
                    >
                      <div className="">
                        <h2 className="dis-card-head pb-1">{item.title}</h2>
                      </div>

                      <div className="dis-card-tag">
                        <div className="dis-card-tag1 text-center">NEXTJS</div>
                        <div className="dis-card-tag1 text-center">SSR</div>
                      </div>

                      <div
                        className="flex flex-wrap"
                        style={{
                          justifyContent: "space-between",
                          marginTop: "10px",
                        }}
                      >
                        <div className="flex">
                          <></>
                          <span style={{ fontSize: "14px", color: "black" }}>
                            {item.name}
                          </span>
                          <Dot />
                          <span>{item.time}</span>
                        </div>

                        <div className="flex">
                          <div className="flex" style={{ marginRight: "10px" }}>
                            <ThumbsUp />
                            <span style={{ marginTop: "5px" }}>
                              {item.votes}
                            </span>
                          </div>

                          <div className="flex" style={{ marginRight: "10px" }}>
                            <MessageCircle />
                            <span style={{ marginTop: "5px" }}>
                              {item.answer}
                            </span>
                          </div>

                          <div className="flex" style={{ marginRight: "10px" }}>
                            <Eye />
                            <span style={{ marginTop: "5px" }}>
                              {item.views}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* end of stack overflow */}

          {/* <div className='container'>
                                <div className="trending-section">
                                    <div className="top-trending top-learning">
                                        <div className="trending-logo">
                                            <img src={forumImg} alt="logo" className="timeline-icon" />
                                            <h1 className="trending-title">Forums</h1>
                                        </div>
                                    </div>
                                </div>
                                {
                                    forumData.map(data => {
                                        return (
                                            <NavLink to="#" key={data.id}>
                                                <ForumList  {...data} />
                                            </NavLink>
                                        )
                                    })
                                }
                            </div>
                            <div className="container">
                                <div className="trending-section second">
                                    <div className="top-trending top-learning">
                                        <div className="trending-logo ">
                                            <div className="discuss-logo">
                                                <img src={groupImg} alt="discussion" /></div>
                                            <h1 className="trending-title">Discussions across BharatAi</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="outer-section">
                                <div className="filter-section">
                                    <FilterSearchBar btnData={btnData[0]} />
                                    <div className="option-section">
                                        {
                                            data.map((data) => {
                                                return (
                                                    <NavLink to="#" key={data.id}>
                                                        <div className="options">{data.title}
                                                        </div>
                                                    </NavLink>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                {
                                    discussData.map(data => {
                                        return (
                                            <NavLink to="#" key={data.id}>
                                                <DiscussionList {...data} />
                                            </NavLink>
                                        )
                                    })
                                }
                            </div> */}
        </section>
      </div>
    </div>
  );
}
