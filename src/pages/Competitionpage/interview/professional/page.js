
import React from 'react';
import JoinRoom from './JoinRoom';
import Mobilemenu from '../../../Dashboard/Mobilemenu';
import Simplemenu from '../../../Dashboard/Simplemenu';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Mobilemenu />
      <div className="flex sm:my-[1rem] sm:mx-[1.3rem] m-2">
        <Simplemenu style={{ color: "#fff" }} />
        <div className="w-full bg-white h-[100vh] overflow-auto gap-10 px-2 mx-auto pt-5 pb-10" style={{ borderRadius: "20px " }}>
          <Link to="/competition/interview" className="flex text-[0.9rem] font-semibold text-gray-400">
            ⯇ Back to Interview
          </Link>
          <div className="h-[90%] flex justify-center items-center ">

            <JoinRoom />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
