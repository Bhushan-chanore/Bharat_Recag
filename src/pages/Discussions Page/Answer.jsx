import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuestions } from './QuestionsContext';
import { ThumbsUp, MessageCircle, Eye } from 'lucide-react';
import Mobilemenu from '../Dashboard/Mobilemenu';
import profile4 from '../image/fakers/profile-4.jpg';
import { BellRing, Search } from 'lucide-react';
import img1 from '../../assets/discussion-img1.svg'
import forumImg from '../../assets/discussion-forum.svg'
import { CircleChevronLeft } from 'lucide-react';

const Answer = () => {


  const [visible, setVisible] = useState(false);
  const [isTitleFocused, setIsTitleFocused] = useState(false);
  const [isProblemFocused, setIsProblemFocused] = useState(false);
  const [isTagsFocused, setIsTagsFocused] = useState(false);

  // Get the title from URL parameters
  const { title } = useParams();
  const { questions } = useQuestions();

  // Find the question by title
  const question = questions.find((q) => q.title === decodeURIComponent(title));

  if (!question) {
    return <div>Question not found</div>;
  }

  // Ensure question.tags exists and is an array before mapping over it
  const tags = question.tags || [];





  return (
    <div>
      <Mobilemenu />
      <div className="flex sm:m-8 m-2">
        <section
          className="discussion das"
          style={{ overflowY: 'scroll', overflowX: "hidden", height: '100vh', width: '100vw', backgroundColor: '#ffffff', borderRadius: '15px' }}
        >
          <div className="container">
            <div className="discussion-section">
              <div className="top-section">

              <Link to="/discussions" className="flex text-[0.9rem] sm:hidden font-semibold text-gray-400">
         ⯇ Back to Discussions
        </Link>

                {/* <!-- BEGIN: Top Bar --> */}
                <div className="relative z-[51] sm:flex hidden h-[40px] items-center border-b border-slate-200" style={{ marginTop: "-28px", padding: "0 10px", zIndex: "0" }}>

                  {/* <!-- BEGIN: Breadcrumb --> */}
                  <div aria-label="breadcrumb" className=" -intro-x mr-auto hidden sm:flex">
                    <ol className="flex items-center text-theme-1 dark:text-slate-300" >
                      <li className="">
                        <a href="/">Discussion</a>
                      </li>
                      <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-black before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white text-slate-800 cursor-text dark:text-slate-400">
                        <a href="/">Community</a>
                      </li>
                    </ol>
                  </div>
                  {/* <!-- END: Breadcrumb --> */}


                  {/* <!-- BEGIN: Search --> */}
                  <div className="search intro-x relative mr-3 sm:mr-6" style={{ backgroundColor: "#ffffff" }}>
                    <div className="relative hidden sm:block" >
                      <input data-tw-merge="" type="text" placeholder="Search..." className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent ease-in-out text-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-opacity-40 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 w-56 rounded-full border-transparent bg-slate-300/50 pr-8 shadow-none transition-[width] duration-300 focus:w-72 focus:border-transparent dark:bg-darkmode-400/70" />
                      <i data-tw-merge="" data-lucide="search" className="stroke-1.5 w-5 h-5 absolute inset-y-0 right-0 my-auto mr-3 text-slate-600 dark:text-slate-500"><Search style={{ marginTop: "-3" }} /></i>
                    </div>
                  </div>

                  {/* <!-- BEGIN: Notifications --> */}
                  <div data-tw-merge="" data-tw-placement="bottom-end" className="dropdown relative intro-x mr-auto sm:mr-6">
                    <div data-tw-toggle="dropdown" aria-expanded="false" className="cursor-pointer relative block text-slate-600 outline-none before:absolute before:right-0 before:top-[-2px] before:h-[8px] before:w-[8px] before:rounded-full before:bg-danger before:content-['']"><i data-tw-merge="" data-lucide="bell" className="stroke-1.5 w-5 h-5 dark:text-slate-500"><BellRing /></i></div>
                  </div>

                  <div data-tw-merge="" data-tw-placement="bottom-end" className="dropdown relative"><button data-tw-toggle="dropdown" aria-expanded="false" className="cursor-pointer image-fit zoom-in intro-x block h-8 w-8 overflow-hidden rounded-full shadow-lg"><img src={profile4} alt="Midone - Tailwind Admin Dashboard Template" />
                  </button>
                  </div>
                </div>

                <div className="discussion-details">
                  <div className="discussion-content">
                    <h1 className="main-title">Discussions</h1>
                    <p className="discussion-para">Discuss the Recag platform & machine learning topics - this includes sharing feedback, asking questions, and more.</p>
                   
                  </div>
                  <div className="datasets-image">
                    <img src={img1} alt="logo-1" width={220} height={170} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Answer Section */}
          <div className='container'>
            <div className="trending-section">
              <div className="top-trending top-learning">
                <div className="trending-logo">
                  <img src={forumImg} alt="logo" className="timeline-icon" />
                  <h1 className="trending-title">Answer</h1>
                </div>
              </div>
            </div>
          </div>


          {/* Display Question Details */}
          <div className='mb-[3rem]'>
            <div>
              <h2 className="dis-card-head pb-1">Questions : {question.title}</h2>
            </div>



            <div className="flex flex-wrap text-[12px] pb-2 gap-[1rem]" style={{ justifyContent: 'space-between', marginTop: '10px' }}>
              <div className="flex">
                <span style={{ fontSize: '14px', color: 'black' }}>{question.name}</span>
                <span style={{ margin: '0 5px' }}>•</span>
                <span>{question.time}</span>
              </div>

              {/* Icons */}
              <div className="flex gap-[1rem]">
                <div className="flex" style={{ marginRight: '10px' }}>
                  <ThumbsUp />
                  <span style={{ marginTop: '5px' }}>{question.votes}</span>
                </div>

                <div className="flex" style={{ cursor:"pointer",marginRight: '10px' }} onClick={() => setVisible(true)}>
                  <MessageCircle />
                  <span style={{ marginTop: '5px' }}>{question.answer}</span>
                </div>
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
                            htmlFor="problemExplanation"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Detail Explanation of Problem Solution
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

                <div className="flex" style={{ marginRight: '10px' }}>
                  <Eye />
                  <span style={{ marginTop: '5px' }}>{question.views}</span>
                </div>
              </div>
            </div>


            <div>
              <h3 className="text-[12px] pb-1">In the vast expanse of our universe, where stars shimmer like distant dreams and galaxies swirl in cosmic ballets, humanity finds itself at a profound crossroads of exploration and introspection. From the boundless curiosity that propelled us to unravel the mysteries of the cosmos to the intricate tapestry of civilizations that define our existence on Earth, every moment in our history echoes with the triumphs of discovery and the resilience of human spirit. <br /><br />

                At the heart of our journey lies the ceaseless quest for knowledge. It is a journey that spans epochs, from the ancient marvels of Mesopotamia where the first sparks of civilization flickered to the Renaissance that ignited the flames of enlightenment across Europe. Each epoch bears witness to the indomitable human desire to understand the world around us, to peer beyond the veil of the unknown, and to chart our course through the uncharted waters of existence.
                <br /><br />
                Science, with its elegant dance of observation, hypothesis, and experimentation, has been our guiding beacon through this odyssey. From Isaac Newton's contemplation under the apple tree to Albert Einstein's revelation in the fabric of spacetime, science has not only unraveled the laws that govern our universe but has also illuminated the intricacies of life itself. It is through science that we have come to comprehend the dazzling complexity of ecosystems, the molecular choreography of life, and the delicate balance that sustains our planet.</h3>
            </div>




          </div>
        </section>
      </div>
    </div>
  );
};

export default Answer;
