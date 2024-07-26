import React, { useEffect, useState } from "react";
import "../css/vendors/tippy.css";
import "../css/vendors/litepicker.css";
import "../css/vendors/tiny-slider.css";
import "../css/themes/rubick/side-nav.css";
import "../css/vendors/leaflet.css";
import "../css/vendors/simplebar.css";
import "../css/components/mobile-menu.css";

import profile15 from "../image/fakers/profile-15.jpg";
import profile8 from "../image/fakers/profile-8.jpg";
import profile14 from "../image/fakers/profile-14.jpg";
import profile12 from "../image/fakers/profile-12.jpg";
import preview15 from "../image/fakers/preview-15.jpg";
import preview1 from "../image/fakers/preview-1.jpg";
import preview2 from "../image/fakers/preview-2.jpg";
import preview12 from "../image/fakers/preview-12.jpg";
import profile4 from "../image/fakers/profile-4.jpg";
import profile9 from "../image/fakers/profile-9.jpg";
import profile5 from "../image/fakers/profile-5.jpg";
import profile11 from "../image/fakers/profile-11.jpg";
import profile3 from "../image/fakers/profile-3.jpg";
import preview6 from "../image/fakers/preview-6.jpg";
import profile6 from "../image/fakers/profile-6.jpg";
import preview3 from "../image/fakers/preview-3.jpg";
import profile13 from "../image/fakers/profile-13.jpg";
import profile10 from "../image/fakers/profile-10.jpg";
import profile2 from "../image/fakers/profile-2.jpg";

import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Search,
  BellRing,
  RefreshCcw,
  ShoppingCart,
  CreditCard,
  Monitor,
  User,
} from "lucide-react";

import Mobilemenu from "./Mobilemenu.jsx";
import Simplemenu from "./Simplemenu.jsx";
import "./dashb.css";
import Chart from "chart.js/auto";
import Carousel from "react-multi-carousel";

import SalesReport from "../../components/sales-report.component.jsx";
import ReportBox from "../../components/report-box.component.jsx";
import WeeklyTop from "../../components/weekly-top.component.jsx";
import SalesReport2 from "../../components/sales-report2.component.jsx";

import OfficialStoresMap from "../../components/official-stores-map.component.jsx";
import WeeklyBestSellersCard from "../../components/weekly-best-sellers-card.component.jsx";

import GeneralReportCard1 from "../../components/general-report-card1.component.jsx";
import GeneralReportCard2 from "../../components/general-report-card2.component.jsx";

import WeeklyTopProductsData from "../../components/weekly-top-products-card.component.jsx";
import ImportantNotesSlider from "../../components/important-notes-slider.component.jsx";
import TransactionsCard from "../../components/transactions-card.component.jsx";
import RecentActivitiesCard from "../../components/recent-activities-card.component.jsx";
import SearchPopup from "../../components/search-popup.component.jsx";
import NotificationPopup from "../../components/notification-popup.component.jsx";
import ProfilePopup from "../../components/profile-popup.component.jsx";
import Breadcrumb from "../../components/breadcrumb.component.jsx";
import axios from "axios";
import { Link } from "react-router-dom";



function Dashboard() {
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

  // closeOtherPopups();

  // 
  const [data, setData] = useState({});

  async function fetchUserInfo() {
    try {
      const response = await axios.get("/api/getUserInfo");
      const data = response.data;
      setData(data);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  }

  useEffect(() => {

    fetchUserInfo();
  }, []);

  const [userInfo, setUserInfo] = useState({
    username: "sultan",
    rankings: {
      problems: {
        total: 50,
        solved: 30,
        easy: {
          total: 20,
          solved: 15,
        },
        medium: {
          total: 20,
          solved: 10,
        },
        tough: {
          total: 10,
          solved: 5,
        },
      },
    },
    badges: [
      { name: "Guardian", image: "/guardian.jpeg" },
      { name: "January", image: "/january.jpg" },
      { name: "June", image: "/june.png" },
      { name: "July", image: "/july.png" },
      { name: "Knight", image: "/knight_badge.png" },
      { name: "Soldier", image: "/soldier.png" },
    ],
    age: 20,
    gender: "Male",
    college: "IIT Bombay",
    city: "Mumbai",
    country: "India",
    skills: {
      Advanced: [
        { name: "Dynamic Programming ", count: 1 },
        { name: "Divide and Conquer ", count: 1 },
      ],
      Intermediate: [
        { name: "Hash Table ", count: 2 },
        { name: "Math ", count: 2 },
        { name: "Depth-First Search ", count: 3 },
      ],
      Fundamental: [
        { name: "Array ", count: 4 },
        { name: "String ", count: 2 },
        { name: "Sorting ", count: 1 },
      ],
    },
  });

  useEffect(() => {
    renderLineChart();
  }, []);

  const renderLineChart = () => {
    const ratingsData = [
      1500, 1550, 1600, 1650, 1630, 1700, 1750, 1778, 1800, 1900, 2000,
    ];

    const chartData = {
      labels: ratingsData.map((_, index) => index + 1),
      datasets: [
        {
          label: "Contest Ratings",
          data: ratingsData,
          borderColor: "rgba(59, 130, 246, 1)",
          tension: 0.4,
          backgroundColor: 'rgba(59, 130, 246, 0.3)',
          fill: true,
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      aspectRatio: 1.8,
      scales: {
        x: {
          title: {
            display: true,
            text: "Contest Number",
            color: 'rgb(107, 114, 128)'
          },
          ticks: {
            color: 'rgb(107, 114, 128)'
          },
          grid: {
            color: "rgba(107, 114, 128, 0.3)"
          },
        },
        y: {
          title: {
            display: true,
            text: "Contest Rating",
            color: 'rgb(107, 114, 128)'
          },
          ticks: {
            color: 'rgb(107, 114, 128)'
          },
          grid: {
            color: 'rgba(107, 114, 128, 0.3)'
          }
        },
      },
    };

    const ctx = document.getElementById("contestRatingChart");
    if (ctx) {
      const existingChart = Chart.getChart(ctx);
      if (existingChart) {
        existingChart.destroy();
      }

      new Chart(ctx, {
        type: "line",
        data: chartData,
        options: chartOptions,
      });
    }
  };


  return (
    <div>
      {/* style={{padding:"20px 30px"}} */}

      <Mobilemenu className="block sm:hidden" />

      <div className=" flex sm:my-[1rem] sm:mx-[1.3rem] m-2">
        <Simplemenu style={{ color: "#fff" }} />

        {/* <!-- BEGIN: Content --> */}
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
            <Breadcrumb />

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

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 2xl:col-span-9">
              <div className="grid grid-cols-12 gap-6">
                {/* <!-- BEGIN: General Report --> */}
                <div className="col-span-12 mt-8">
                  <div className="intro-y flex h-10 items-center">
                    <h2 className="mr-5 truncate text-lg font-medium">
                      General Report
                    </h2>
                    <a
                      className="ml-auto flex items-center text-primary"
                      href="/"
                    >
                      <i
                        data-tw-merge=""
                        data-lucide="refresh-ccw"
                        className="stroke-1.5 mr-3 h-4 w-4"
                      >
                        <RefreshCcw
                          style={{
                            marginRight: "2px",
                            height: "15px",
                            width: "30px",
                          }}
                        />
                      </i>
                      Reload Data
                    </a>
                  </div>
                  <div className="mt-5 grid grid-cols-12 gap-6">
                    <div className="intro-y col-span-12 sm:col-span-6 xl:col-span-3">
                      <div className="relative zoom-in before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']">
                        <div className="box p-4">
                          <div className="flex">
                            <i
                              data-tw-merge=""
                              data-lucide="shopping-cart"
                              className="stroke-1.5 h-[28px] w-[28px] text-primary"
                            >
                              <ShoppingCart width={28} height={28} />
                            </i>
                            <div className="ml-auto">
                              <div
                                data-placement="top"
                                title="33% Higher than last month"
                                className="cursor-pointer flex items-center rounded-full bg-success py-[3 px] pl-2 pr-1 text-xs font-medium text-white"
                              >
                                33%
                                <i
                                  data-tw-merge=""
                                  data-lucide="chevron-up"
                                  className="stroke-1.5 ml-0.5 h-4 w-4 mt-1"
                                >
                                  <ChevronUp
                                    style={{
                                      marginTop: "-6px",
                                      marginLeft: "-2px",
                                    }}
                                  />
                                </i>
                              </div>
                            </div>
                          </div>
                          <div className="mt-6 text-3xl font-medium leading-8">
                            4.710
                          </div>
                          <div className="mt-1 text-base text-slate-500">
                            Item Sales
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="intro-y col-span-12 sm:col-span-6 xl:col-span-3">
                      <div className="relative zoom-in before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']">
                        <div className="box p-4">
                          <div className="flex">
                            <i
                              data-tw-merge=""
                              data-lucide="credit-card"
                              className="stroke-1.5 h-[28px] w-[28px] text-pending"
                            >
                              <CreditCard width={28} height={28} />
                            </i>
                            <div className="ml-auto">
                              <div
                                data-placement="top"
                                title="2% Lower than last month"
                                className=" cursor-pointer flex items-center rounded-full bg-danger py-[3px] pl-2 pr-1 text-xs font-medium text-white"
                              >
                                2%
                                <i
                                  data-tw-merge=""
                                  data-lucide="chevron-down"
                                  className="stroke-1.5 ml-0.5 h-4 w-4"
                                >
                                  <ChevronDown
                                    style={{
                                      marginTop: "-5px",
                                      marginLeft: "-3px",
                                    }}
                                  />
                                </i>
                              </div>
                            </div>
                          </div>
                          <div className="mt-6 text-3xl font-medium leading-8">
                            3.721
                          </div>
                          <div className="mt-1 text-base text-slate-500">
                            New Orders
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="intro-y col-span-12 sm:col-span-6 xl:col-span-3">
                      <div className="relative zoom-in before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']">
                        <div className="box p-4">
                          <div className="flex">
                            <i
                              data-tw-merge=""
                              data-lucide="monitor"
                              className="stroke-1.5 h-[28px] w-[28px] text-warning"
                            >
                              <Monitor height={28} width={28} />
                            </i>
                            <div className="ml-auto">
                              <div
                                data-placement="top"
                                title="12% Higher than last month"
                                className=" cursor-pointer flex items-center rounded-full bg-success py-[3px] pl-2 pr-1 text-xs font-medium text-white"
                              >
                                12%
                                <i
                                  data-tw-merge=""
                                  data-lucide="chevron-up"
                                  className="stroke-1.5 ml-0.5 h-4 w-4"
                                >
                                  <ChevronUp
                                    style={{
                                      marginTop: "-6px",
                                      marginLeft: "-2px",
                                    }}
                                  />
                                </i>
                              </div>
                            </div>
                          </div>
                          <div className="mt-6 text-3xl font-medium leading-8">
                            2.149
                          </div>
                          <div className="mt-1 text-base text-slate-500">
                            Total Products
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="intro-y col-span-12 sm:col-span-6 xl:col-span-3">
                      <div className="relative zoom-in before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']">
                        <div className="box p-4">
                          <div className="flex">
                            <i
                              data-tw-merge=""
                              data-lucide="user"
                              className="stroke-1.5 h-[28px] w-[28px] text-success"
                            >
                              <User height={28} width={28} />
                            </i>
                            <div className="ml-auto">
                              <div
                                data-placement="top"
                                title="22% Higher than last month"
                                className=" cursor-pointer flex items-center rounded-full bg-success py-[3px] pl-2 pr-1 text-xs font-medium text-white"
                              >
                                22%
                                <i
                                  data-tw-merge=""
                                  data-lucide="chevron-up"
                                  className="stroke-1.5 ml-0.5 h-4 w-4"
                                >
                                  <ChevronUp
                                    style={{
                                      marginTop: "-6px",
                                      marginLeft: "-2px",
                                    }}
                                  />
                                </i>
                              </div>
                            </div>
                          </div>
                          <div className="mt-6 text-3xl font-medium leading-8">
                            152.040
                          </div>
                          <div className="mt-1 text-base text-slate-500">
                            Unique Visitor
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- END: General Report --> */}

                {/* <!-- BEGIN: Sales Report --> */}
                <div className="col-span-12 mt-8 lg:col-span-8">
                  <div className="intro-y block h-10 items-center sm:flex">
                    <h2 className="mr-5 truncate text-lg font-medium">
                      Users Report
                    </h2>
                    <div className="relative mt-3 text-slate-500 sm:ml-auto sm:mt-0">
                      <i
                        data-tw-merge=""
                        data-lucide="calendar"
                        className="stroke-1.5 absolute inset-y-0 left-0 z-10 my-auto ml-3 h-4 w-4"
                      ></i>
                      <input
                        data-tw-merge=""
                        type="text"
                        className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 datepicker !box pl-10 sm:w-56"
                      />
                    </div>
                  </div>
                  <div className="intro-y box mt-12 p-5 sm:mt-5">
                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className="w-full bg-white shadow-xl rounded-xl p-6 hover:bg-gray-900 hover:scale-[1.03] transition-all ease-in">
                        <canvas id="contestRatingChart"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- END: Sales Report --> */}

                {/* <!-- BEGIN: Weekly Top Seller --> */}

                <div className="col-span-12 mt-8 sm:col-span-6 lg:col-span-4 w-full bg-white rounded-xl shadow-xl px-4 py-4 flex flex-col gap-2 group hover:bg-gray-900 transition-all ease-in hover:scale-[1.03]">
                  <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-white transition-all ease-in">
                    {data.name}
                  </h2>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-gray-200 transition-all ease-in">
                    Additional Info
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="font-medium min-w-24 text-gray-700 group-hover:text-gray-400 transition-all ease-in">Age:</div>
                    <div className="text-gray-700 group-hover:text-gray-300 transition-all ease-in">{data.age}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="font-medium min-w-24 text-gray-700 group-hover:text-gray-400 transition-all ease-in">Gender:</div>
                    <div className="text-gray-700 group-hover:text-gray-300 transition-all ease-in">{data.gender}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="font-medium min-w-24 text-gray-700 group-hover:text-gray-400 transition-all ease-in">College:</div>
                    <div className="text-gray-700 group-hover:text-gray-300 transition-all ease-in">{data.college}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="font-medium min-w-24 text-gray-700 group-hover:text-gray-400 transition-all ease-in">City:</div>
                    <div className="text-gray-700 group-hover:text-gray-300 transition-all ease-in">{data.city}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="font-medium min-w-24 text-gray-700 group-hover:text-gray-400 transition-all ease-in">Country:</div>
                    <div className="text-gray-700 group-hover:text-gray-300 transition-all ease-in">{data.country}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="font-medium min-w-24 text-gray-700 group-hover:text-gray-400 transition-all ease-in">Rating:</div>
                    <div className="text-gray-700 group-hover:text-gray-300 transition-all ease-in">{data.rating}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="font-medium min-w-24 text-gray-700 group-hover:text-gray-400 transition-all ease-in">Amount:</div>
                    <div className="text-gray-700 group-hover:text-gray-300 transition-all ease-in">{data.amount}</div>
                  </div>
                  <Link to="/edit-profile" className="mt-2 bg-dark-1 group-hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-xl text-center transition-all ease-in">
        Edit Profile
      </Link>
                  <Link to="/login" className="bg-red-500 group-hover:bg-red-500 text-white font-bold py-2 px-4 rounded-xl text-center transition-all ease-in">
                    Logout
                  </Link>
                </div>
                {/* <!-- END: Weekly Top Seller --> */}

                {/* <!-- BEGIN: Official Store --> */}

                <div className="col-span-12 mt-6 xl:col-span-8">
                  <div className="intro-y block h-10 items-center sm:flex">
                    <h2 className="mr-5 truncate text-lg font-medium">
                      User Progress
                    </h2>

                  </div>
                  <div className="intro-y box mt-12 p-5 sm:mt-5">
                    <div className="w-full bg-light-2 shadow-xl rounded-xl p-6 hover:bg-gray-900 group hover:scale-[1.03] transition-all ease-in">
                      <h2 className="mb-5 text-gray-800 group-hover:text-white transition-all ease-in">Solved Problems</h2>
                      <div className="flex gap-8 items-center w-full mb-5 max-sm:flex-col max-sm:items-start">

                        <div className=" bg-slate-200 rounded-full min-h-[100px] min-w-[100px] flex justify-center items-center">
                          <div className="bg-white rounded-full min-h-[85px] min-w-[85px] flex flex-col justify-center items-center">
                            <h1 className="font-medium text-gray-800 group-hover:text-black transition-all ease-in">490</h1>
                            <p className="text-gray-700 group-hover:text-black transition-all ease-in">Solved</p>
                          </div>
                        </div>

                        <div className="flex-grow w-full">
                          <div className="flex items-center flex-grow mb-2">
                            <div className="w-20 mr-2 text-gray-700 group-hover:text-gray-300 transition-all ease-in">Easy:</div>
                            <div className="flex bg-gray-200 h-4 rounded-full flex-grow">
                              <div
                                className="bg-green-500 h-full rounded-full"
                                style={{
                                  width: `${(userInfo.rankings.problems.easy.solved /
                                    userInfo.rankings.problems.easy.total) *
                                    100
                                    }%`,
                                }}
                              />
                            </div>
                          </div>

                          <div className="flex items-center mb-2">
                            <div className="w-20 mr-2 text-gray-700 group-hover:text-gray-300 transition-all ease-in">Medium:</div>
                            <div className="flex bg-gray-200 h-4 rounded-full flex-grow">
                              <div
                                className="bg-yellow-500 h-full rounded-full"
                                style={{
                                  width: `${(userInfo.rankings.problems.medium.solved /
                                    userInfo.rankings.problems.medium.total) *
                                    100
                                    }%`,
                                }}
                              />
                            </div>
                          </div>

                          <div className="flex items-center mb-2">
                            <div className="w-20 mr-2 text-gray-700 group-hover:text-gray-300 transition-all ease-in">Tough:</div>
                            <div className="flex bg-gray-200 h-4 rounded-full flex-grow">
                              <div
                                className="bg-red-500 h-full rounded-full"
                                style={{
                                  width: `${(userInfo.rankings.problems.tough.solved /
                                    userInfo.rankings.problems.tough.total) *
                                    100
                                    }%`,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>



                  {/* <div className="col-span-12 mt-6 xl:col-span-8">
                    <div className="intro-y box mt-12 p-5 sm:mt-5">

                      <div className="flex justify-between">
                        <div className="flex-grow max-w-full bg-light-2 shadow-xl rounded-xl p-6 hover:bg-dark-1 transition-all ease-in hover:scale-[1.03] group">
                          <h3 className="text-lg font-semibold mb-2 group-hover:text-white">
                            Badges
                          </h3>
                          <Carousel
                            additionalTransfrom={0}
                            arrows
                            autoPlaySpeed={3000}
                            centerMode={true}
                            containerClass="carousel-container"
                            draggable
                            focusOnSelect={false}
                            infinite
                            keyBoardControl
                            minimumTouchDrag={80}
                            renderButtonGroupOutside={true}
                            renderDotsOutside={false}
                            responsive={{
                              desktop: {
                                breakpoint: {
                                  max: 3000,
                                  min: 1024,
                                },
                                items: 2,
                                partialVisibilityGutter: 40,
                              },
                              mobile: {
                                breakpoint: {
                                  max: 464,
                                  min: 0,
                                },
                                items: 1,
                                partialVisibilityGutter: 30,
                              },
                              tablet: {
                                breakpoint: {
                                  max: 1024,
                                  min: 464,
                                },
                                items: 2,
                                partialVisibilityGutter: 30,
                              },
                            }}
                            showDots={false}
                            slidesToSlide={1}
                            swipeable
                          >
                            {userInfo.badges.map((badge, index) => (
                              <div
                                key={index}
                                className="flex justify-center items-center h-40 gap-10"
                              >
                                <img
                                  src={badge.image}
                                  alt={badge.name}
                                  className="w-32 h-32 object-contain rounded-full my-auto"
                                />
                              </div>
                            ))}
                          </Carousel>
                        </div>
                      </div>

                    </div>
                  </div> */}


                </div>
                {/* <!-- END: Official Store --> */}

                {/* <!-- BEGIN: Weekly Best Sellers --> */}
                <div className="col-span-12 mt-6 xl:col-span-4">
                  <div className="intro-y flex h-10 items-center">
                    <h2 className="mr-5 truncate text-lg font-medium">
                      Solved Question
                    </h2>
                  </div>
                  <div className="mt-5">
                    <div className="w-full bg-white rounded-xl shadow-xl px-4 py-4 flex flex-col gap-2 group hover:bg-gray-900 transition-all ease-in hover:scale-[1.03]">
                      <h3 className="text-lg font-semibold text-dark-1 group-hover:text-white mb-2">Skills</h3>
                      {Object.entries(userInfo.skills).map(([category, skills]) => (
                        <div key={category} className="mb-4">
                          <h4 className="text-md font-semibold text-dark-3 group-hover:text-gray-300 mb-2">
                            {category}
                          </h4>
                          <ul className="list-disc list-inside">
                            {skills.map((skill, index) => (
                              <li key={index} className="text-gray-700 group-hover:text-gray-400">
                                {skill.name} ⨯{skill.count}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* <!-- END: Weekly Best Sellers --> */}

                {/* <!-- BEGIN: General Report --> */}
                <div className="col-span-12 mt-8 grid grid-cols-12 gap-6">
                  <GeneralReportCard1
                    heading="Target Sales"
                    subheading="300 Sales"
                    percentage="20%"
                  />

                  <GeneralReportCard2
                    heading="Social Media"
                    subheading="320 Followers"
                  />

                  <GeneralReportCard1
                    heading="New Products"
                    subheading="1450 Products"
                    percentage="45%"
                  />

                  <GeneralReportCard2
                    heading="Posted Ads"
                    subheading=" 180 Campaign"
                  />
                </div>
                {/* <!-- END: General Report --> */}

                {/* <!-- BEGIN: Weekly Top Products --> */}
                <div className="col-span-12 mt-6">
                  <div className="intro-y block h-10 items-center sm:flex">
                    <h2 className="mr-5 truncate text-lg font-medium">
                      Weekly Top Products
                    </h2>
                    <div className="mt-3 flex items-center sm:ml-auto sm:mt-0">
                      <button
                        data-tw-merge=""
                        className="transition duration-200 border shadow-sm items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed !box flex text-slate-600 dark:text-slate-300"
                      >
                        <i
                          data-tw-merge=""
                          data-lucide="file-text"
                          className="stroke-1.5 mr-2 hidden h-4 w-4 sm:block"
                        ></i>
                        Export to Excel
                      </button>
                      <button
                        data-tw-merge=""
                        className="transition duration-200 border shadow-sm items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed !box ml-3 flex text-slate-600 dark:text-slate-300"
                      >
                        <i
                          data-tw-merge=""
                          data-lucide="file-text"
                          className="stroke-1.5 mr-2 hidden h-4 w-4 sm:block"
                        ></i>
                        Export to PDF
                      </button>
                    </div>
                  </div>
                  <div className="intro-y mt-8 overflow-auto sm:mt-0 lg:overflow-visible">
                    <table
                      data-tw-merge=""
                      className="w-full text-left border-separate border-spacing-y-[10px] sm:mt-2"
                    >
                      <thead data-tw-merge="" className="">
                        <tr data-tw-merge="" className="">
                          <th
                            data-tw-merge=""
                            className="font-medium px-5 py-3 dark:border-darkmode-300 whitespace-nowrap border-b-0"
                          >
                            IMAGES
                          </th>
                          <th
                            data-tw-merge=""
                            className="font-medium px-5 py-3 dark:border-darkmode-300 whitespace-nowrap border-b-0"
                          >
                            PRODUCT NAME
                          </th>
                          <th
                            data-tw-merge=""
                            className="font-medium px-5 py-3 dark:border-darkmode-300 whitespace-nowrap border-b-0 text-center"
                          >
                            STOCK
                          </th>
                          <th
                            data-tw-merge=""
                            className="font-medium px-5 py-3 dark:border-darkmode-300 whitespace-nowrap border-b-0 text-center"
                          >
                            STATUS
                          </th>
                          <th
                            data-tw-merge=""
                            className="font-medium px-5 py-3 dark:border-darkmode-300 whitespace-nowrap border-b-0 text-center"
                          >
                            ACTIONS
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <WeeklyTopProductsData
                          images={[preview6, profile6, profile9]}
                          productName={"Nike Air Max 270"}
                          productCategory={"Sport & Outdoor"}
                          stock={202}
                          status={"Inactive"}
                        />

                        <WeeklyTopProductsData
                          images={[preview3, profile13, profile12]}
                          productName={"Sony Master Series A9G"}
                          productCategory={"Electronic"}
                          stock={96}
                          status={"Inactive"}
                        />

                        <WeeklyTopProductsData
                          images={[preview3, profile10, profile5]}
                          productName={"Nike Tanjun"}
                          productCategory={"Sport & Outdoor"}
                          stock={50}
                          status={"Active"}
                        />

                        <WeeklyTopProductsData
                          images={[preview1, profile10, profile4]}
                          productName={"Apple MacBook Pro 13"}
                          productCategory={"PC & Laptop"}
                          stock={170}
                          status={"Inactive"}
                        />
                      </tbody>
                    </table>
                  </div>
                  <div className="intro-y mt-3 flex flex-wrap items-center sm:flex-row sm:flex-nowrap">
                    <div className="w-full sm:mr-auto sm:w-auto">
                      <ul className="flex w-full mr-0 sm:mr-auto sm:w-auto">
                        <li className="flex-1 sm:flex-initial">
                          <a
                            data-tw-merge=""
                            className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                          >
                            <i
                              data-tw-merge=""
                              data-lucide="chevrons-left"
                              className="stroke-1.5 h-4 w-4"
                            ></i>
                          </a>
                        </li>
                        <li className="flex-1 sm:flex-initial">
                          <a
                            data-tw-merge=""
                            className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                          >
                            <i
                              data-tw-merge=""
                              data-lucide="chevron-left"
                              className="stroke-1.5 h-4 w-4"
                            ></i>
                          </a>
                        </li>
                        <li className="flex-1 sm:flex-initial">
                          <a
                            data-tw-merge=""
                            className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                          >
                            ...
                          </a>
                        </li>
                        <li className="flex-1 sm:flex-initial">
                          <a
                            data-tw-merge=""
                            className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                          >
                            1
                          </a>
                        </li>
                        <li className="flex-1 sm:flex-initial">
                          <a
                            data-tw-merge=""
                            className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3 !box dark:bg-darkmode-400"
                          >
                            2
                          </a>
                        </li>
                        <li className="flex-1 sm:flex-initial">
                          <a
                            data-tw-merge=""
                            className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                          >
                            3
                          </a>
                        </li>
                        <li className="flex-1 sm:flex-initial">
                          <a
                            data-tw-merge=""
                            className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                          >
                            ...
                          </a>
                        </li>
                        <li className="flex-1 sm:flex-initial">
                          <a
                            data-tw-merge=""
                            className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                          >
                            <i
                              data-tw-merge=""
                              data-lucide="chevron-right"
                              className="stroke-1.5 h-4 w-4"
                            ></i>
                          </a>
                        </li>
                        <li className="flex-1 sm:flex-initial">
                          <a
                            data-tw-merge=""
                            className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                          >
                            <i
                              data-tw-merge=""
                              data-lucide="chevrons-right"
                              className="stroke-1.5 h-4 w-4"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <select
                      data-tw-merge=""
                      className="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 group-[.form-inline]:flex-1 !box mt-3 w-20 sm:mt-0"
                    >
                      <option>10</option>
                      <option>25</option>
                      <option>35</option>
                      <option>50</option>
                    </select>
                  </div>
                </div>
                {/* <!-- END: Weekly Top Products --> */}
              </div>
            </div>
            <div className="col-span-12 2xl:col-span-3">
              <div className="-mb-10 pb-10 2xl:border-l">
                <div className="grid grid-cols-12 gap-x-6 gap-y-6 2xl:gap-x-0 2xl:pl-6">
                  {/* <!-- BEGIN: Transactions --> */}
                  <div className="col-span-12 mt-3 md:col-span-6 xl:col-span-4 2xl:col-span-12 2xl:mt-8">
                    <div className="intro-x flex h-10 items-center">
                      <h2 className="mr-5 truncate text-lg font-medium">
                        Transactions
                      </h2>
                    </div>
                    <div className="mt-5">
                      <TransactionsCard
                        name="Kevin Spacey"
                        imgUrl={profile9}
                        alt="Midone - Tailwind Admin Dashboard Template"
                        date="7 March 2022"
                        sales="-$121"
                      />

                      <TransactionsCard
                        name="Al Pacino"
                        imgUrl={profile5}
                        alt="Midone - Tailwind Admin Dashboard Template"
                        date="21 July 2022"
                        sales="-$72"
                      />

                      <TransactionsCard
                        name="Kevin Spacey"
                        imgUrl={profile11}
                        alt="Midone - Tailwind Admin Dashboard Template"
                        date="19 November 2021"
                        sales="+$45"
                      />

                      <TransactionsCard
                        name="Russell Crowe"
                        imgUrl={profile3}
                        alt="Midone - Tailwind Admin Dashboard Template"
                        date="6 September 2021"
                        sales="-$44"
                      />

                      <TransactionsCard
                        name="Robert De Niro"
                        imgUrl={profile2}
                        alt="Midone - Tailwind Admin Dashboard Template"
                        date="22 November 2022"
                        sales="+$21"
                      />

                      <a
                        className="intro-x block w-full rounded-md border border-dotted border-slate-400 py-3 text-center text-slate-500 dark:border-darkmode-300"
                        href="#"
                      >
                        View More
                      </a>
                    </div>
                  </div>
                  {/* <!-- END: Transactions --> */}

                  {/* <!-- BEGIN: Recent Activities --> */}
                  <div className="col-span-12 mt-3 md:col-span-6 xl:col-span-4 2xl:col-span-12">
                    <div className="intro-x flex h-10 items-center">
                      <h2 className="mr-5 truncate text-lg font-medium">
                        Recent Activities
                      </h2>
                      <a className="ml-auto truncate text-primary" href="#">
                        {" "}
                        Show More{" "}
                      </a>
                    </div>
                    <div className="relative mt-5 before:absolute before:ml-5 before:mt-5 before:block before:h-[85%] before:w-px before:bg-slate-200 before:dark:bg-darkmode-400">
                      <RecentActivitiesCard
                        profile={profile9}
                        name={"Hugh Jackman"}
                        time={"07:00 PM"}
                        activity={"Has joined the team"}
                        images={[]}
                      />

                      <RecentActivitiesCard
                        profile={profile14}
                        name={"Robert De Niro"}
                        time={"07:00 PM"}
                        activity={"Added 3 new photos"}
                        images={[profile14, profile13, profile10]}
                      />

                      <div className="intro-x my-4 text-center text-xs text-slate-500">
                        12 November
                      </div>

                      <RecentActivitiesCard
                        profile={profile15}
                        name={"Christian Bale"}
                        time={"07:00 PM"}
                        activity={
                          "Has changed Samsung Galaxy S20 Ultra price & description"
                        }
                        images={[]}
                      />

                      <RecentActivitiesCard
                        profile={profile10}
                        name={"Al Pacino"}
                        time={"07:00 PM"}
                        activity={"Has changed Nike Tanjun description"}
                        images={[]}
                      />
                    </div>
                  </div>
                  {/* <!-- END: Recent Activities --> */}

                  {/* <!-- BEGIN: Important Notes --> */}
                  <div className="col-span-12 mt-3 md:col-span-6 xl:col-span-12 xl:col-start-1 xl:row-start-1 2xl:col-start-auto 2xl:row-start-auto">
                    <div className="intro-x flex h-10 items-center">
                      <h2 className="mr-auto truncate text-lg font-medium">
                        Important Notes
                      </h2>
                      <button
                        data-tw-merge=""
                        data-carousel="important-notes"
                        data-target="prev"
                        className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed tiny-slider-navigator mr-2 border-slate-300 px-2 text-slate-600 dark:text-slate-300"
                      >
                        <ChevronLeft className="stroke-1.5 h-4 w-4" />
                      </button>
                      <button
                        data-tw-merge=""
                        data-carousel="important-notes"
                        data-target="next"
                        className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed tiny-slider-navigator mr-2 border-slate-300 px-2 text-slate-600 dark:text-slate-300"
                      >
                        <ChevronRight className="stroke-1.5 h-4 w-4" />
                      </button>
                    </div>
                    <div className="intro-x mt-5">
                      <div className="box zoom-in">
                        <ImportantNotesSlider />
                      </div>
                    </div>
                  </div>
                  {/* <!-- END: Important Notes --> */}

                  {/* <!-- BEGIN: Schedules --> */}
                  <div className="col-span-12 mt-3 md:col-span-6 xl:col-span-4 xl:col-start-1 xl:row-start-2 2xl:col-span-12 2xl:col-start-auto 2xl:row-start-auto">
                    <div className="intro-x flex h-10 items-center">
                      <h2 className="mr-5 truncate text-lg font-medium">
                        Schedules
                      </h2>
                      <a
                        className="ml-auto flex items-center truncate text-primary"
                        href="#"
                      >
                        <i
                          data-tw-merge=""
                          data-lucide="plus"
                          className="stroke-1.5 mr-1 h-4 w-4"
                        ></i>
                        Add New Schedules
                      </a>
                    </div>
                    <div className="mt-5">
                      <div className="intro-x box">
                        <div className="p-5">
                          <div className="flex">
                            <i
                              data-tw-merge=""
                              data-lucide="chevron-left"
                              className="stroke-1.5 w-5 h-5 text-slate-500"
                            ></i>
                            <div className="mx-auto text-base font-medium">
                              April
                            </div>
                            <i
                              data-tw-merge=""
                              data-lucide="chevron-right"
                              className="stroke-1.5 w-5 h-5 text-slate-500"
                            ></i>
                          </div>
                          <div className="mt-5 grid grid-cols-7 gap-4 text-center">
                            <div className="font-medium">Su</div>
                            <div className="font-medium">Mo</div>
                            <div className="font-medium">Tu</div>
                            <div className="font-medium">We</div>
                            <div className="font-medium">Th</div>
                            <div className="font-medium">Fr</div>
                            <div className="font-medium">Sa</div>
                            <div className="relative rounded py-0.5 text-slate-500">
                              29
                            </div>
                            <div className="relative rounded py-0.5 text-slate-500">
                              30
                            </div>
                            <div className="relative rounded py-0.5 text-slate-500">
                              31
                            </div>
                            <div className="relative rounded py-0.5">1</div>
                            <div className="relative rounded py-0.5">2</div>
                            <div className="relative rounded py-0.5">3</div>
                            <div className="relative rounded py-0.5">4</div>
                            <div className="relative rounded py-0.5">5</div>
                            <div className="relative rounded bg-success/20 py-0.5 dark:bg-success/30">
                              6
                            </div>
                            <div className="relative rounded py-0.5">7</div>
                            <div className="relative rounded bg-primary py-0.5 text-white">
                              8
                            </div>
                            <div className="relative rounded py-0.5">9</div>
                            <div className="relative rounded py-0.5">10</div>
                            <div className="relative rounded py-0.5">11</div>
                            <div className="relative rounded py-0.5">12</div>
                            <div className="relative rounded py-0.5">13</div>
                            <div className="relative rounded py-0.5">14</div>
                            <div className="relative rounded py-0.5">15</div>
                            <div className="relative rounded py-0.5">16</div>
                            <div className="relative rounded py-0.5">17</div>
                            <div className="relative rounded py-0.5">18</div>
                            <div className="relative rounded py-0.5">19</div>
                            <div className="relative rounded py-0.5">20</div>
                            <div className="relative rounded py-0.5">21</div>
                            <div className="relative rounded py-0.5">22</div>
                            <div className="relative rounded bg-pending/20 py-0.5 dark:bg-pending/30">
                              23
                            </div>
                            <div className="relative rounded py-0.5">24</div>
                            <div className="relative rounded py-0.5">25</div>
                            <div className="relative rounded py-0.5">26</div>
                            <div className="relative rounded bg-primary/10 py-0.5 dark:bg-primary/50">
                              27
                            </div>
                            <div className="relative rounded py-0.5">28</div>
                            <div className="relative rounded py-0.5">29</div>
                            <div className="relative rounded py-0.5">30</div>
                            <div className="relative rounded py-0.5 text-slate-500">
                              1
                            </div>
                            <div className="relative rounded py-0.5 text-slate-500">
                              2
                            </div>
                            <div className="relative rounded py-0.5 text-slate-500">
                              3
                            </div>
                            <div className="relative rounded py-0.5 text-slate-500">
                              4
                            </div>
                            <div className="relative rounded py-0.5 text-slate-500">
                              5
                            </div>
                            <div className="relative rounded py-0.5 text-slate-500">
                              6
                            </div>
                            <div className="relative rounded py-0.5 text-slate-500">
                              7
                            </div>
                            <div className="relative rounded py-0.5 text-slate-500">
                              8
                            </div>
                            <div className="relative rounded py-0.5 text-slate-500">
                              9
                            </div>
                          </div>
                        </div>
                        <div className="border-t border-slate-200/60 p-5">
                          <div className="flex items-center">
                            <div className="mr-3 h-2 w-2 rounded-full bg-pending"></div>
                            <span className="truncate">UI/UX Workshop</span>
                            <span className="font-medium xl:ml-auto">23th</span>
                          </div>
                          <div className="mt-4 flex items-center">
                            <div className="mr-3 h-2 w-2 rounded-full bg-primary"></div>
                            <span className="truncate">
                              {" "}
                              VueJs Frontend Development{" "}
                            </span>
                            <span className="font-medium xl:ml-auto">10th</span>
                          </div>
                          <div className="mt-4 flex items-center">
                            <div className="mr-3 h-2 w-2 rounded-full bg-warning"></div>
                            <span className="truncate">Laravel Rest API</span>
                            <span className="font-medium xl:ml-auto">31th</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- END: Schedules --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END: Content --> */}
      </div>
    </div>

    // </div>
  );
}

export default Dashboard;
