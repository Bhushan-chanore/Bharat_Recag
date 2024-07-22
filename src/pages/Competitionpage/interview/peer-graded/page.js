import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import loader from "../../../../assets/loader.svg"
import Mobilemenu from "../../../Dashboard/Mobilemenu";
import Simplemenu from "../../../Dashboard/Simplemenu";
const Page = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");

  async function fetchUserInfo() {
    try {
      const response = await axios.get("/api/getUserInfo");
      const data = response.data;
      setUsername(data.name ? data.name : " ");
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  }

  const handleStart = () => {
    if (!isChecked) return;
    setLoading(true);
    setTimeout(() => {
      navigate('/competition/interview/peer-graded/start'); // Use navigate for navigation
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <>
      <Mobilemenu />
      <div className="flex sm:my-[1rem] sm:mx-[1.3rem] m-2">
        <Simplemenu style={{ color: "#fff" }} />
<div className="w-full bg-white h-[100vh] overflow-auto gap-10 px-2 mx-auto pt-5 pb-10" style={{borderRadius:"20px "}}>
<Link to="/competition/interview" className="flex text-[0.9rem] font-semibold text-gray-400">
            ⯇ Back to Interview
          </Link>
        <div className="h-[90%] flex justify-center items-center ">
          
          <div className="max-w-2xl px-10 py-14 flex flex-col justify-center items-center gap-5">
            <h1 className="font-medium sm:text-[2rem] text-[1rem]">
              <span className="text-blue-500 ">{username.split(' ')[0]}</span> Welcome to Peer-graded Interview
            </h1>
            <ol className="pl-4 text-gray-700 my-5 sm:text-[1rem] text-[0.8rem]">
              <li className="list-decimal">
                To minimize technical difficulties during the interview, please use a computer with a camera and microphone. Also, update to the latest version of Chrome.
              </li>
              <li className="list-decimal">
                To avoid technical difficulties during the interview, please perform equipment test prior to the interview.
              </li>
              <li className="list-decimal">
                During the interview, we may collect some data in order to provide you with better online interview services.
              </li>
              <li className="list-decimal">
                There will be one question and you will be given 90 seconds to speak. It is preferred to answer the question in a brief and meaningful way.
              </li>
            </ol>

            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setIsChecked(prev => !prev)}>
              <input type="checkbox" className="w-4 h-4 rounded-lg" checked={isChecked} onChange={() => { }} />
              <p className={`${!isChecked && 'text-gray-2'}`}>I have carefully read and agree to the above content</p>
            </div>

            <div>
            
              <button
                onClick={handleStart}
                className="w-[200px] bg-darkblue-100 text-white rounded-xl px-3 py-2 disabled:cursor-not-allowed"
                disabled={!isChecked}
              >
                {loading ?
                  <img src={loader} className="w-6 h-6 object-contain mx-auto" alt="loader" /> :
                  "Start Interview"
                }
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Page;
