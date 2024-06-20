import React, { useState } from "react";
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../Images/recaglogo.png";
import { LogIn, Search } from "lucide-react";
import img1 from "../Images/svg-2.svg";
import img2 from "../Images/svg-1.svg";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";

const navigation = [
  { name: "Dashboard", href: "/dashboard", current: false },
  { name: "Dataset", href: "/dataset", current: false },
  { name: "Model", href: "/model", current: false },
  { name: "Courses", href: "/courses", current: false },
  { name: "Competition", href: "/competition", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  const toggleModal = (modal) => {
    setModalIsOpen(true);
    setActiveModal(modal);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setActiveModal(null);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleMouseEnter = (name) => {
    setHoveredButton(name);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  
  return (
    <Fragment>
      <style>
        {`
          .drawer-transition {
            transition: transform 0.5s ease-in-out;
          }
  
          .drawer-open {
            transform: translateY(0);
          }
  
          .drawer-closed {
            transform: translateY(-100%);
          }
  
          .search-input:focus {
            outline: none;
            box-shadow: none;
          }
  
          @media (max-width: 640px) {
            .logo-container {
              justify-content: center;
              flex-grow: 1;
            }
          }
        `}
      </style>
      <Disclosure
        as="nav"
        className="bg-darkblue-100 z-10 fixed w-full border-b border-gray-500"
      >
        {({ open }) => (
          <Fragment>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
                  <div className="flex flex-shrink-0 items-center justify-center logo-container">
                    <img className="h-8 w-auto" src={logo} alt="Your Company" />
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-white"
                            : "text-gray-300 hover:text-tomato",
                          "relative rounded-md px-3 py-2 text-[1.2rem] font-[600]"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        onMouseEnter={() => handleMouseEnter(item.name)} // Pass the button name to the event handler
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="flex flex-row">
                          {hoveredButton === item.name && (
                            <img src={img1} alt="img" className="mr-2" />
                          )}{" "}
                          {/* Show the image only when the button is hovered */}
                          {item.name}
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div className="text-center hidden sm:block">
                      <button
                        onClick={toggleDrawer}
                        className="focus:outline-none text-white mt-1 mr-2"
                      >
                        <Search size={24} />
                      </button>
  
                      <div
                        className={`fixed top-0 left-0 right-0 z-40 w-4/5 max-w-screen-lg mx-auto p-4 bg-white dark:bg-gray-800 ${isDrawerOpen ? "drawer-open" : "drawer-closed"
                          } drawer-transition md:block sm:hidden`}
                        tabIndex="-1"
                        aria-labelledby="drawer-top-label"
                        style={{ height: "14rem", borderRadius: "0 0 8px 8px" }}
                      >
                        <h5
                          id="drawer-top-label"
                          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
                        >
                          <svg
                            className="w-4 h-4 me-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                          </svg>
                          Find the Extraordinary – Your Search Starts Here!
                        </h5>
  
                        <button
                          onClick={toggleDrawer}
                          type="button"
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <svg
                            className="w-3 h-3"
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
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                          <span className="sr-only">Close menu</span>
                        </button>
  
                        <p className="w-[75%] mx-auto mb-2 text-sm text-gray-500 dark:text-gray-400">
                          Ready to find something amazing? <b>SuperCharge</b> your search experience by discovering the best of what we offer. Start your search and let the <b>Adventures</b> begin!!
                        </p>
  
                        <div className="flex flex-col justify-center">
                          <div className="relative p-4 w-full sm:max-w-2xl sm:mx-auto">
                            <div className="overflow-hidden z-0 rounded-full relative p-3">
                              <form
                                role="form"
                                className="relative flex z-50 bg-white rounded-full"
                              >
                                <input
                                  type="text"
                                  placeholder="Search here..."
                                  className="search-input border-0 rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"
                                />
                                <button
                                  className="bg-blue-600 text-white font-bold px-8 py-4 hover:bg-blue-800 focus:bg-blue-800 focus:outline-none"
                                  style={{ borderRadius: "0 40px 40px 0" }}
                                >
                                  <Search size={25} />
                                </button>
                              </form>
                              <div className="glow glow-1 z-10 bg-pink-400 absolute"></div>
                              <div className="glow glow-2 z-20 bg-yellow-400 absolute"></div>
                              <div className="glow glow-3 z-30 bg-tomato absolute"></div>
                              <div className="glow glow-4 z-40 bg-darkblue-100 absolute"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    <button
                      type="button"
                      className="relative rounded-full bg-darkblue p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    {/* login signup button */}
                    <button
                      className="cursor-pointer py-1 px-2 text-white  w-auto  flex items-center justify-between gap-1   transition-colors duration-300 "
                      onClick={() => toggleModal("login")}
                    >
                      <div className="text-sm font-semibold font-montserrat transition-colors duration-300">
                        {/* Signup/Login */}
                        <LogIn />
                      </div>
                      {/* <img
                      className="w-6 h-6"
                      alt="icon"
                      src={img2}
                      /> */}
                    </button>
                    <Login
                      isOpen={modalIsOpen && activeModal === "login"}
                      onRequestClose={closeModal}
                      openSignup={() => toggleModal("signup")}
                    />
                    <Signup
                      isOpen={modalIsOpen && activeModal === "signup"}
                      onRequestClose={closeModal}
                      openLogin={() => toggleModal("login")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-bold"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
  
                <div className="flex rounded-full border-2 border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
                  <input
                    type="email"
                    placeholder="Search Something..."
                    className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
                  />
                  <button type="button" className="flex items-center justify-center bg-[#007bff] px-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-white">
                      <path
                        d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                      </path>
                    </svg>
                  </button>
                </div>
              </div>
            </Disclosure.Panel>
          </Fragment>
        )}
      </Disclosure>
    </Fragment>
  );
  


}
