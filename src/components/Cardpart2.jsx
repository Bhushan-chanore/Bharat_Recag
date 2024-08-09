import React from 'react'

function Cardpart2({ name }) {
    return (
        <div>
            <div className='relative flex flex-row flex-wrap sm:w-[400px] w-[320px] bg-slateblue hover:bg-white hover:text-black text-white rounded-[5px] py-[1.875rem] pr-[2.469rem] pl-[2.5rem] transition-colors duration-300'>
                <div className="flex flex-col items-start justify-start gap-[0.319rem]">
                    <div className="relative tracking-[0.26px] leading-[1.5rem] font-medium text-royalblue-100">
                        Explore the Features
                    </div>
                    <h2 className="m-0 relative text-[1.688rem] tracking-[-1.08px] leading-[1.806rem] font-bold font-inherit hover:text-black">
                        {name}
                    </h2>
                    <div className='flex flex-row gap-4 mt-[5rem]'>
                        <button className="flex flex-col items-start justify-start pt-[1rem] px-[0rem] pb-[0rem] text-white">
                            <span className="relative tracking-[0.42px] leading-[0.875rem] font-semibold inline-block min-w-[81.7px]">
                                Read More
                            </span>
                        </button>
                        <button className="z-[0] h-[46px] w-[46px] relative rounded-27xl box-border border-[2px] border-solid border-lavender flex items-center justify-center">
                            <div className="absolute bg-black w-px h-[15px]"></div>
                            <div className="absolute bg-black w-[15px] h-px z-[1]"></div>
                            <span className="sr-only">Add</span> {/* For screen readers */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cardpart2
