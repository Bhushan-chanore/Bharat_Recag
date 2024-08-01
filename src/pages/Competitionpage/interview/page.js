import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import p2p from "../../../assets/p2p.png"
import professional from "../../../assets/professional.png"
import Mobilemenu from '../../Dashboard/Mobilemenu';
import Simplemenu from '../../Dashboard/Simplemenu';
import ProfilePopup from '../../../components/profile-popup.component';
import NotificationPopup from '../../../components/notification-popup.component';
import { BellRing, Search } from 'lucide-react';
import SearchPopup from '../../../components/search-popup.component';
import Breadcrumb from '../../../components/breadcrumb.component';
import profile4 from "../../image/fakers/profile-4.jpg";

const Page = () => {
  const [assignedInterviews, setAssignedInterviews] = useState(null);
  const [interviews, setInterviews] = useState(null);
  const [interviewDetails, setInterviewDetails] = useState(null);
  const [isInterviewModalOpen, setIsInterviewModalOpen] = useState(false);
  const [feedback, setFeedback] = useState({ rating: 3, comment: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isAssigned, setIsAssigned] = useState(false);

  const fetchInterviews = async () => {
    try {
      const res = await axios.get('/api/getMyVideos');
      setInterviews(res.data);
    } catch (error) {
      console.error('Error fetching interviews:', error);
    }
  };

  const fetchAssignedInterviews = async () => {
    try {
      const res = await axios.get('/api/getAssigned');
      setAssignedInterviews(res.data);
    } catch (error) {
      console.error('Error fetching assigned interviews:', error);
    }
  };

  const handleSubmitReview = async () => {
    try {
      await axios.post('/api/submitReview', {
        queueID: interviewDetails._id,
        rating: feedback.rating,
        comment: feedback.comment
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setIsInterviewModalOpen(false);
      }, 2000);
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  const handleFeedback = async (i, fb) => {
    try {
      await axios.post('/api/reviewFeedback', {
        reviewID: interviewDetails.reviews[i]._id,
        feedback: fb
      });
      setInterviewDetails({
        ...interviewDetails,
        reviews: [
          ...interviewDetails.reviews.slice(0, i),
          { ...interviewDetails.reviews[i], feedback: fb },
          ...interviewDetails.reviews.slice(i + 1)
        ]
      });
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  const deadlineFormat = (dateTime) => {
    const now = new Date();
    const diff = Math.abs(now - dateTime) / 1000;

    const days = Math.floor(diff / 86400);
    const hours = Math.floor((diff % 86400) / 3600);
    const minutes = Math.floor(((diff % 86400) % 3600) / 60);

    return `${days}d ${hours}h ${minutes}m`;
  };

  const formatDateTime = (dateTime) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    const formattedDateTime = dateTime.toLocaleDateString('en-US', options);

    const day = dateTime.getDate();
    const suffix = (day === 1 || day === 21 || day === 31) ? 'st' : (day === 2 || day === 22) ? 'nd' : (day === 3 || day === 23) ? 'rd' : 'th';

    return formattedDateTime.replace(/\b\d{1,2}\b/, day + suffix);
  };

  useEffect(() => {
    fetchAssignedInterviews();
    fetchInterviews();
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


          <div className=' flex justify-center items-center py-auto flex-col '>
            <div className=''>
              <h1 className='font-medium text-[1.3rem] my-3'>Create an Interview</h1>
              <div className='flex gap-10 flex-wrap justify-center my-[2rem]'>
                <Link to="/interview/peer-graded" className='w-[300px] flex flex-col justify-center items-center gap-2 text-white rounded-3xl shadow-xl bg-blue-500 py-14 text-center hover:bg-blue-600 hover:scale-[1.03] transition-all ease-in'>
                  <img src={p2p} alt="p2p" className='object-contain w-14 h-14' />
                  <p className='text-[0.9rem] font-medium'>Peer-graded Interview</p>
                </Link>
                <Link to="/interview/professional" className='w-[300px] flex flex-col items-center gap-2 text-white rounded-3xl shadow-xl bg-blue-500 py-14 text-center hover:bg-blue-600 hover:scale-[1.03] transition-all ease-in'>
                  <img src={professional} alt="professional" className='object-contain w-14 h-14' />
                  <p className='text-[0.9rem] font-medium'>Professional Interview</p>
                </Link>
              </div>
            </div>

            <div className='flex flex-wrap'>
              <div className='mb-3 justify-start m-1 p-[2rem] items-start w-[350px]' style={{ border: "1px solid black", borderRadius: "20px" }}>
                <h1 className='font-medium mb-1 text-[1.1rem]'>Past Interviews</h1>
                <div className='w-full flex gap-10 flex-wrap'>
                  {/* {interviews && interviews.length > 0 ? (
              interviews.map((interview, index) => (
                <div key={index} onClick={() => { setInterviewDetails(interview); setIsInterviewModalOpen(true); setIsAssigned(false); }}
                  className='w-[340px] flex flex-col items-center gap-2 text-white rounded-3xl shadow-xl bg-gray-500 py-14 text-center hover:bg-gray-600 hover:scale-[1.03] transition-all ease-in cursor-pointer'>
                  <img src='/interview.png' alt="interview" className='object-contain w-14 h-14' />
                  <p>{`My Interview - ${index + 1}`}<br />{`Submitted: ${formatDateTime(new Date(interview.submissionTime))}`}</p>
                </div>
              ))
            ) : (
              <p className='text-gray-2 text-[0.9rem]'>No interviews found</p>
            )} */}
                  <p className='text-gray-2 text-[0.9rem]'>No interviews found</p>
                </div>
              </div>

              <div className='mb-3 m-1 p-[2rem] items-start w-[350px]' style={{ border: "1px solid black", borderRadius: "20px" }}>
                <h1 className='font-medium mb-1 text-[1.1rem]'>Assigned Interviews</h1>
                <div className='w-full flex gap-10 flex-wrap'>
                  {/* {assignedInterviews && assignedInterviews.assigned && assignedInterviews.assigned.length > 0 ? (
              assignedInterviews.assigned.map((interview, index) => (
                <div key={index} onClick={() => { setInterviewDetails(interview); setIsInterviewModalOpen(true); setIsAssigned(true); }}
                  className='w-[330px] flex flex-col items-center gap-2 text-white rounded-3xl shadow-xl bg-gray-700 py-14 text-center hover:bg-gray-800 hover:scale-[1.03] transition-all ease-in cursor-pointer'>
                  <img src='/assignment.png' alt="assignment" className='object-contain w-14 h-14' />
                  <p>{`Assigned interview - ${index + 1}`}<br />{`Deadline: ${deadlineFormat(new Date(new Date(assignedInterviews.assignedTime[index]).getTime() + 2 * 24 * 60 * 60 * 1000))}`}</p>
                </div>
              ))
            ) : (
              <p className='text-gray-2 text-[0.9rem]'>No interviews found</p>
            )} */}
                  <p className='text-gray-2 text-[0.9rem]'>No interviews found</p>
                </div>
              </div>
            </div>
          </div>

          {isInterviewModalOpen && (
            <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center'>
              <div className='bg-light-1 w-[600px] max-h-[92vh] px-10 py-12 shadow-lg mx-auto rounded-xl overflow-y-auto'>
                <div className='w-full text-right cursor-pointer mb-4'>
                  <p onClick={() => setIsInterviewModalOpen(false)}>Close</p>
                </div>
                {isAssigned ? (
                  <div className='flex flex-col gap-5 items-center'>
                    <p className='font-semibold'>Q: {interviewDetails.peerVideo.question.question}</p>
                    <video
                      src={`/assets/${interviewDetails.peerVideo.videoUrl}`}
                      controls
                      loop
                      controlsList="nofullscreen nodownload noremoteplayback noplaybackrate foobar"
                      className="w-full h-auto"
                    />
                    <div className="w-full">
                      <p>Rating</p>
                      <div className='flex items-center gap-1'>
                        {[1, 2, 3, 4, 5].map((i) => (
                          <img
                            src={`${feedback.rating >= i ? '/star_fill.svg' : '/star_outline.svg'}`}
                            alt=""
                            className={`${feedback.rating >= i ? 'w-5 h-5' : 'w-4 h-4'} object-contain cursor-pointer`}
                            key={i}
                            onClick={() => setFeedback({ ...feedback, rating: i })}
                          />
                        ))}
                      </div>
                    </div>
                    <div className='w-full'>
                      <p>Comment</p>
                      <textarea
                        className='w-full rounded-lg bg-light-3 p-2 resize-none'
                        rows={5}
                        value={feedback.comment}
                        onChange={(e) => setFeedback({ ...feedback, comment: e.target.value })}
                      />
                    </div>
                    <button
                      onClick={handleSubmitReview}
                      className='w-full bg-green-400 text-light-1 font-semibold py-2 px-3 rounded-lg'>
                      Submit Review
                    </button>
                  </div>
                ) : (
                  <div className='flex flex-col gap-5 items-center'>
                    <p className='font-semibold'>{interviewDetails.question.question}</p>
                    <video
                      src={`/assets/${interviewDetails.videoUrl}`}
                      controls
                      loop
                      controlsList="nofullscreen nodownload noremoteplayback noplaybackrate foobar"
                      className="w-full h-auto"
                    />
                    {Array.isArray(interviewDetails.reviews) && interviewDetails.reviews.map((review, index) => (
                      <div className='w-full flex flex-col gap-2 border-t-2 border-light-4 pt-3' key={index}>
                        <h2 className='font-medium'>User {index + 1}</h2>
                        <div className="w-full">
                          <p className='font-medium'>Rating</p>
                          <div className='flex items-center gap-1'>
                            {review && [1, 2, 3, 4, 5].map((i) => (
                              <img
                                src={`${review.rating >= i ? '/star_fill.svg' : '/star_outline.svg'}`}
                                alt=""
                                className={`${review.rating >= i ? 'w-5 h-5' : 'w-4 h-4'} object-contain`}
                                key={i}
                              />
                            ))}
                          </div>
                        </div>
                        <div className='w-full'>
                          <p className='font-medium'>Comment</p>
                          <textarea
                            className='w-full rounded-lg bg-light-3 p-2 resize-none'
                            rows={5}
                            value={review.comment}
                            disabled
                          />
                        </div>
                        <div className='flex items-center gap-4'>
                          <button
                            onClick={() => handleFeedback(index, 1)}
                            className={`${review.feedback === 1 ? 'text-light-1 bg-blue-500' : 'text-blue-500 border border-blue-500'} py-2 px-3 rounded-lg`}>
                            Helpful!
                          </button>
                          <button
                            onClick={() => handleFeedback(index, -1)}
                            className={`${review.feedback === -1 ? 'text-light-1 bg-red-500' : 'text-red-500 border border-red-500'} py-2 px-3 rounded-lg`}>
                            Not Helpful!
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {submitted && (
            <div className='fixed top-5 right-5 bg-green-300 shadow-lg rounded-lg py-3 px-5'>
              Successfully submitted
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
