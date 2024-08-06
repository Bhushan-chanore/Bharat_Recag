import React from 'react';
import img1 from "../Images/svg-1.svg";
import img2 from "../Images/link-4.svg";

function Cryptop7() {
    return (
        <div className='z-0 py-16'>
            <div className='mb-20 flex flex-col items-center'>
                <div className='text-center'>
                    <h1 className='text-white font-bold text-3xl sm:text-5xl'>Get the latest app updates</h1>
                    <p className='text-white text-lg sm:text-xl max-w-xl mt-8 leading-relaxed'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euism tincidunt ut.</p>
                </div>

                <div className='flex flex-col sm:flex-row items-center justify-center mt-8 gap-4 w-full px-4'>
                    <input
                        placeholder="Enter Your Email"
                        type="email"
                        aria-label="Enter Your Email"
                        className="px-4 py-2 text-lg sm:text-xl text-white bg-transparent border-b border-white focus:outline-none w-full sm:w-auto sm:max-w-xs"
                        style={{
                            backgroundColor: "#2434b3",
                            border: "none",
                            borderBottom: "1px solid white" // ensure contrast is maintained
                        }}
                    />
                    <button
                        className="z-0 cursor-pointer py-[0.675rem] px-[1rem] bg-tomato w-[150.4px] rounded-3xs box-border overflow-hidden shrink-0 flex flex-row items-end justify-start gap-[0.606rem] border-[2px] border-solid border-tomato"
                        aria-label="Subscribe"
                    >
                        <span className="relative text-[0.875rem] tracking-[0.42px] leading-[0.5rem] font-semibold font-montserrat text-white text-center inline-block min-w-[81.7px]">
                            Subscribe
                        </span>
                        <img className="w-6 h-2" alt="arrow" src={img1} />
                    </button>
                </div>

                <img
                    className="fixed bottom-12 right-12 w-12 h-12 z-10 cursor-pointer animate-bounce"
                    alt="scroll to top"
                    src={img2}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                />
            </div>
        </div>
    );
}

export default Cryptop7;
