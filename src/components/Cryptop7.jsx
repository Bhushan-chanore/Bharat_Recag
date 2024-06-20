import React from 'react';
import img1 from "../Images/svg-1.svg"
import img2 from "../Images/link-4.svg"

function Cryptop7() {
    return (
        <div className='z-0'>
            <div className='mb-[5rem]'>

                <div className='flex flex-col justify-center items-center'>
                    <h1 className='flex justify-center items-center text-white font-bold sm:text-[3.75rem] text-[2rem]'>Get the latest app updates</h1>
                    <p className='text-white text-[1.2rem] max-w-[500px] flex justify-center items-center text-center p-2' style={{ marginTop: "2rem", lineHeight: "1.5rem" }}>Lorem ipsum dolor sit amet, consectetuer piscing elit, sed diam nonummy nibh euism tincidunt ut.</p>
                </div>

                <div className='flex flex-row flex-wrap justify-center mt-4 items-center gap-[1rem]'>
                    <input
                        placeholder="Enter Your Email"
                        type="text"
                        className="pl-5 sm:w-[25%] w-[35%] text-[1.5rem] text-white outline-none"
                        style={{
                            backgroundColor: "#2434b3",
                            border: "none",
                            borderBottom: "1px solid black"
                        }}


                    />


                    <button className="z-0 cursor-pointer py-[0.675rem] px-[1rem] bg-tomato w-[150.4px] rounded-3xs box-border overflow-hidden shrink-0 flex flex-row items-end justify-start gap-[0.606rem]  border-[2px] border-solid border-tomato">
                        <div className="relative text-[0.875rem] tracking-[0.42px] leading-[0.5rem] font-semibold font-montserrat text-white text-center inline-block min-w-[81.7px]">
                            Subscribe
                        </div>
                        <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                            <img
                                className="w-[26px] h-[9px] relative overflow-hidden shrink-0"
                                alt=""
                                src={img1}
                            />
                        </div>
                    </button>
                </div>

                <img
                    className="fixed bottom-[3rem] right-[3rem] w-[49px] h-[49px] z-[11] cursor-pointer animate-bounce"
                    alt=""
                    src={img2}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                />

            </div>


        </div>
    );
}

export default Cryptop7;
