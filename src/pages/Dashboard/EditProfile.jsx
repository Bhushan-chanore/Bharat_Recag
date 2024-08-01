import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Mobilemenu from './Mobilemenu';
import Simplemenu from './Simplemenu';
import Breadcrumb from '../../components/breadcrumb.component';
import SearchPopup from '../../components/search-popup.component';
import { BellRing, Search } from 'lucide-react';
import NotificationPopup from '../../components/notification-popup.component';
import ProfilePopup from '../../components/profile-popup.component';
import profile4 from "../image/fakers/profile-4.jpg";


const EditProfile = () => {

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: '',
        college: '',
        city: '',
        country: '',
        phone: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    async function fetchUserInfo() {
        try {
            const response = await axios.get("/api/getUserInfo");
            const data = response.data;
            setFormData(data);
        } catch (error) {
            console.error("Error fetching user info:", error);
        }
    }

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post('/api/profileUpdate', formData);
            navigate('/dashboard');
        } catch (error) {
            if (error.response) {
                console.error("Server responded with error:", error.response.data);
                setError(error.response.data.message || 'An error occurred.');
            } else if (error.request) {
                console.error("No response received:", error.request);
                setError('No response received from the server.');
            } else {
                console.error("Request setup error:", error.message);
                setError('Error setting up the request.');
            }
        } finally {
            setIsLoading(false);
            setFormData({
                name: '',
                age: '',
                gender: '',
                college: '',
                city: '',
                country: '',
                phone: '',
            });
        }
    };

    useEffect(() => {
        fetchUserInfo();
    }, []);

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
            <input
                type="text"
                name="name"
                id="name"
                placeholder='Full Name'
                value={formData.name}
                onChange={handleChange}
                className="shadow-md p-4 bg-light-2 rounded-xl w-full"
                required
            />
            <div className="flex justify-between gap-3">
                <input
                    type="number"
                    name="age"
                    id="age"
                    placeholder='Age'
                    value={formData.age}
                    onChange={handleChange}
                    className="shadow-md p-4 bg-light-2 rounded-xl w-full"
                    required
                />
                <select
                    name="gender"
                    id="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="shadow-md p-4 bg-light-2 rounded-xl w-full"
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <input
                type="tel"
                name="phone"
                id="phone"
                placeholder='Phone'
                value={formData.phone}
                onChange={handleChange}
                className="shadow-md p-4 bg-light-2 rounded-xl w-full"
                required
            />
            <input
                type="text"
                name="college"
                id="college"
                placeholder='Institute Name'
                value={formData.college}
                onChange={handleChange}
                className="shadow-md p-4 bg-light-2 rounded-xl w-full"
                required
            />
            <input
                type="text"
                name="city"
                id="city"
                placeholder='City'
                value={formData.city}
                onChange={handleChange}
                className="shadow-md p-4 bg-light-2 rounded-xl w-full"
                required
            />
            <input
                type="text"
                name="country"
                id="country"
                placeholder='Country'
                value={formData.country}
                onChange={handleChange}
                className="shadow-md p-4 bg-light-2 rounded-xl w-full"
                required
            />

            {error && (
                <div className="text-center bg-red-500 py-2 px-6 text-white rounded-full cursor-pointer" onClick={() => setError(null)}>
                    {error}
                </div>
            )}

            <button
                type="submit"
                className="mb-4 bg-black text-center text-white px-4 py-2 rounded-xl disabled:cursor-not-allowed"
                disabled={formData.age === '' || formData.city === '' || formData.college === '' || formData.country === '' || formData.gender === '' || formData.name === '' || formData.phone === '' || isLoading}
                onClick={handleSubmit}
            > 
                {isLoading ? (
                    <img src="loader.svg" alt="loading" className="w-6 h-6 object-contain mx-auto" />
                ) : "Update"}
            </button>

        </form>
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

                    <div className="flex items-center justify-center mt-8 px-2 bg-white">
                        <div className="max-w-lg w-full">
                            <Link to="/dashboard" className='text-gray-2'>⯇ Back</Link>
                            <h1 className="text-2xl font-bold my-4">Update Profile</h1>
                            <EditProfile />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;