import React, {  useState } from 'react';
import Mobilemenu from './Mobilemenu';
import Simplemenu from './Simplemenu';
import Breadcrumb from '../../components/breadcrumb.component';
import SearchPopup from '../../components/search-popup.component';
import { BellRing, Search } from 'lucide-react';
import NotificationPopup from '../../components/notification-popup.component';
import ProfilePopup from '../../components/profile-popup.component';
import profile4 from "../image/fakers/profile-4.jpg";


const EditProfile = () => {

  

    return (
       <>
         <main id="content" role="main" className="w-full max-w-md mx-auto p-6 ">
  <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
    <div className="p-4 sm:p-7">
      <div className="text-center">
        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Forgot password?</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Remember your password?
          <a className="text-blue-600 decoration-2 hover:underline font-medium" href="#">
            Login here
          </a>
        </p>
      </div>
      <div className="mt-5">
        <form>
          <div className="grid gap-y-4">
            <div>
              <label  className="block text-sm font-bold ml-1 mb-2 dark:text-white">Email address</label>
              <div className="relative">
                <input type="email" id="email" name="email" className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error" />
              </div>
              <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
            </div>

            <div>
              <label  className="block text-sm font-bold ml-1 mb-2 dark:text-white">Old Password</label>
              <div className="relative">
                <input type="password" id="opassword" name="opassword" className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required  />
              </div>
              <p className="hidden text-xs text-red-600 mt-2" id="email-error">The password is not correct</p>
            </div>

            <div>
              <label  className="block text-sm font-bold ml-1 mb-2 dark:text-white">New Password</label>
              <div className="relative">
                <input type="password" id="npassword" name="npassword" className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required  />
              </div>
              
            </div>

            <div>
              <label  className="block text-sm font-bold ml-1 mb-2 dark:text-white">Confirm Nem Password</label>
              <div className="relative">
                <input type="password" id="cnpassword" name="cnpassword" className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required  />
              </div>
              {/* <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p> */}
            </div>
            <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-darkblue-100 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Reset password</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <p className="mt-3 flex justify-center items-center text-center divide-x divide-gray-300 dark:divide-gray-700">
    <a className="pr-3.5 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200" href="#" target="_blank">
      <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
      View Github
    </a>
    <a className="pl-3 inline-flex items-center gap-x-2 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-600 dark:text-gray-500 dark:hover:text-gray-200" href="#">
      Contact us!
    </a>
  </p>
</main>
       </>
    );
}




const Home = () => {

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
        <div>
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

                    <div className="flex items-center justify-center  px-2 bg-white">
                        <div className="max-w-lg w-full">
                            {/* <Link to="/dashboard" className='text-gray-2'>⯇ Back</Link> */}
                            {/* <h1 className="text-2xl font-bold my-4">Update Profile</h1> */}
                            <EditProfile />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;