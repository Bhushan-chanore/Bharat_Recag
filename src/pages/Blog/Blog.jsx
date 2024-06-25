import React, { useState } from "react";
import "./Blog.css";
import { NavLink } from "react-router-dom";
import img1 from "../../assets/mainblog-img1.svg";
import img2 from "../../assets/blog-img1.png";
import img3 from "../../assets/blog-img2.png";
import img4 from "../../assets/blog-search.svg";
import img5 from "../../assets/blog-twitter.svg";
import img6 from "../../assets/blog-fb.svg";
import img7 from "../../assets/blog-img7.png";
import img8 from "../../assets/blog-img8.jpg";
import img9 from "../../assets/blog-img9.jpg";
import img10 from "../../assets/blog-img10.jpg";
import img11 from "../../assets/blog-img11.jpg";
import img12 from "../../assets/blog-img12.jpg";
import img13 from "../../assets/blog-img13.jpg";
import img14 from "../../assets/blog-img14.png";
import img15 from "../../assets/blog-img155.jpg";

import "../css/vendors/tippy.css";
import "../css/vendors/litepicker.css";
import "../css/vendors/tiny-slider.css";
import "../css/themes/rubick/side-nav.css";
import "../css/vendors/leaflet.css";
import "../css/vendors/simplebar.css";
import "../css/components/mobile-menu.css";
import Mobilemenu from "../Dashboard/Mobilemenu";
import Simplemenu from "../Dashboard/Simplemenu";
import { BellRing, Search } from "lucide-react";
import profile4 from "../image/fakers/profile-4.jpg";
import { FaPlus } from "react-icons/fa";
import SearchPopup from "../../components/search-popup.component";
import NotificationPopup from "../../components/notification-popup.component";
import ProfilePopup from "../../components/profile-popup.component";

const BlogsListData = [
  {
    id: 1,
    title:
      "When his hobbies went on hiatus, this Recagr made fighting COVID-19 with data his mission",
    desc: "With sports (and everything else) cancelled, Recagr David Mezzetti finds purpose in Recag's CORD-19 Challenges",
    image: img8,
    date: "July 30,2020",
    time: "8 min",
  },
  {
    id: 2,
    title:
      "Gaining a sense of control over the COVID-19 pandemic | A Winner's Interview with Daniel Wolffram",
    desc: "How one Recagr took top marks across multiple Covid-related challenges.",
    image: img9,
    date: "July 23,2020",
    time: "8 min",
  },
  {
    id: 3,
    title:
      "Top Marks for Student Recagr in Bengali.AI | A Winner's Interview with Linsho Kaku",
    desc: "Recagr, deoxy takes 1st place and sets the stage for his next competition.",
    image: img10,
    date: "April 21,2020",
    time: "4 min",
  },
  {
    id: 4,
    title:
      "First-time Competitor to Recag Grandmaster Within a Year | A Winner's Interview with Limerobot",
    desc: "Join us in congratulating Sanghoon Kim aka Limerobot on his third place finish in Booz Allen Hamilton’s 2019 Data Science Bowl.",
    image: img11,
    date: "March 24,2020",
    time: "7 min",
  },
  {
    id: 5,
    title:
      "“The 3 ingredients to our success.” Winners dish on their solution to Google's QUEST Labeling",
    desc: "First place foursome, ‘Bibimorph’ share their winning approach to the Quest Q&A Labeling competition by Google, and more!",
    image: img12,
    date: "March 4,2020",
    time: "10 min",
  },
  {
    id: 6,
    title:
      "Uni Friends Team Up & Give Back to Education — Making Everyone a Winner | Recag Interview",
    desc: "Congratulations to the winningest duo of the 2019 Data Science Bowl, ‘Zr’, and Ouyang Xuan (Shawn), who took first place and split 100K",
    image: img13,
    date: "Feb 27,2020",
    time: "4 min",
  },
  {
    id: 7,
    title:
      "From Football Newbies to NFL (data) Champions | A Winner’s Interview with The Zoo",
    desc: "In our first winner’s interview of 2020, we’d like to congratulate The Zoo on their first place win in the NFL Big Data Bowl competition…",
    image: img13,
    date: "Jan 28,2020",
    time: "16 min",
  },
  {
    id: 8,
    title:
      "Instacart Market Basket Analysis Book Special Oriented Data Must Preserved",
    desc: "Winner’s Interview: 2nd place, Kazuki Onodera",
    image: img14,
    date: "Jan 8,2020",
    time: "11 min",
  },
];

export default function Blog() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  

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

  const [inputValue, setInputValue] = useState("");
  const [isSearchBarActive, setSearchBarActive] = useState(false);


 

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
          className={`blog das`}
          style={{
            overflowY: "scroll",
            height: "70rem",
            width: "100vw",
            backgroundColor: "#ffffff",
            borderRadius: "30px",
            padding: "2rem 0.4rem",
          }}
        >
          {/* <!-- BEGIN: Top Bar --> */}
          <div
            className="relative z-[51] sm:flex hidden h-[67px] px-6 items-center border-b border-slate-200"
            style={{ marginTop: "-30px" }}
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
                  <a href="/blog">Blog</a>
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

          <div className="hero-container">
            <div className="dataset-details mb-4">
              <div className="dataset-content p-4">
                <h1 className="main-title">Blogs</h1>
                <p className="dataset-para">
                  Explore, analyze, and share quality content. Learn more about
                  data types, creating, and collaborating.
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
                    <span className="ml-2 text-[14px]">Write Blog</span>
                  </button>
                  {isOpen && (
                    <div
                      className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto bg-black bg-opacity-50 transition-opacity duration-300"
                      onClick={toggleModal}
                    >
                      <div
                        className="relative p-6 w-full max-w-lg bg-white rounded-lg shadow-lg dark:bg-gray-800 transition-transform transform scale-95 duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* Modal header */}
                        <div className="flex items-center justify-between border-b pb-3">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Create New Blog
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
                              placeholder="Type blog heading"
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
                              Blog Description
                            </label>
                            <textarea
                              id="description"
                              rows="4"
                              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              placeholder="Write blog description here"
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
                            Add New Blog
                          </button>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="datasets-image pr-4">
                <img src={img1} alt="logo-1" width={220} height={170} />
              </div>
            </div>

            <div className="blog-main">
              <div className="blog-main-image">
                <img src={img3} alt="main" />
              </div>
              <div className="blog-main-content">
                <div className="main-title">
                  I trained a model. What is next?
                </div>
                <div className="main-description">
                  This post was written by Vladimir Iglovikov, and is filled
                  with advice that he wishes someone had shared when he was
                  active on Recage.
                </div>
                <div className="bottom-caption">
                  <img src={img7} alt="user-logo" />
                  <div className="caption-data">
                    <div className="title">Recage Team</div>
                    <div className="date">Sept 10,2020 {" . "} 11 min read</div>
                  </div>
                </div>
              </div>
            </div>


             {/* search with category */}
             <div className="outer-section flex my-[3rem]">
              <form className="max-w-lg ml-auto">
                <div className="flex items-center">
                  
                   
                 
                  {/* Search Input */}
                  <div className="relative flex-grow">
                    <input
                      type="search"
                      className={`block py-2.5 pl-3 pr-16 text-sm text-gray-900 bg-transparent border border-gray-300 rounded-[20px]  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 transition-all duration-300 ${
                        isSearchBarActive ? "w-[21rem]" : "w-[18rem]"
                      }`}
                      placeholder="Search for Blog here..."
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
            <div className="grid3">
              {BlogsListData.map((data) => {
                return (
                  <NavLink to={"/"} className="bloglist" key={data.id}>
                    <BlogsList {...data} />
                  </NavLink>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const BlogsList = (data) => {
  const { title, desc, time, date, image } = data;
  return (
    <div className="blog-list transform transition-transform duration-300 hover:scale-105">
      <div className="bloglist-image">
        <img src={image} alt="img8" />
      </div>

      <div className="bloglist-title">
        <div className="date">
          <div>{date}</div>{" "}
          <div>
            {" . "} {time} read
          </div>{" "}
        </div>
        <div className="bottom-caption flex items-center mb-4">
          <img src={img7} alt="user-logo" />
          <div className="caption-data">
            <div className="title text-[1rem] ">Recag Team</div>
            {/* <div className="date pl-1">{date} {" . "} {time} read</div> */}
          </div>
        </div>
        {`${title}`.slice(0, 50)}...
      </div>
      <div className="bloglist-para">{`${desc}`.slice(0, 50)}...</div>
    </div>
  );
};
