import React, { useEffect, useState } from 'react'
import img1 from "../Images/h4lightteammemberimg1jpg@2x.png"
import img5 from "../Images/h4lightteammemberimg2jpg@2x.png"
import img6 from "../Images/h4lightteammemberimg3jpg@2x.png"
import img7 from "../Images/h4lightteammemberimg4jpg@2x.png"
import img8 from "../Images/h4lightteammemberimg5jpg@2x.png"
import img9 from "../Images/h4lightteammemberimg6jpg@2x.png"
import img10 from "../Images/h4lightteammemberimg7jpg@2x.png"
import img11 from "../Images/h4lightteammemberimg8jpg@2x.png"
import img12 from "../Images/h4holdersingleimg2png@2x.png"
import img4 from "../Images/linkdin(www.recag.in)(www.bharat-tech.org).png"
import img33 from "../Images/icon-33.svg"
import img34 from "../Images/svg.svg"

import img41 from "../Images/icons8-source-code-75.png"
import img42 from "../Images/icons8-dataset-100.png"
import img43 from "../Images/icons8-ai-75.png"
import img44 from "../Images/icons8-cap-75.png"
import img45 from "../Images/icons8-search-in-list-75.png"
import img46 from "../Images/icons8-competition-80.png"
import img47 from "../Images/icons8-software-75.png"
import img49 from "../Images/icons8-community-75.png"
import img48 from "../Images/icons8-code-fork-75.png"
import imgy from "../Images/svg-1.svg"

// import "../pages/tada.css"
function Cryptop06() {


    const card = [
        {
            id: "1",
            img: img1,
            post: "Executive",
            name: "Cheryl Patterson"
        },
        {
            id: "2",
            img: img5,
            post: "Manager",
            name: "Richard Guzman"
        },
        {
            id: "3",
            img: img6,
            post: "Economist",
            name: "Andrea Walker"
        },
        {
            id: "4",
            img: img7,
            post: "Ceo",
            name: "Jonathan Hunt"
        },
        {
            id: "5",
            img: img8,
            post: "Developer",
            name: "Vincent Lucas"
        },
        {
            id: "6",
            img: img9,
            post: "Account",
            name: "Hannah Torres"
        },
        {
            id: "10",
            img: img10,
            post: "Designer",
            name: "Jacob Sandoval"
        },
        {
            id: "11",
            img: img11,
            post: "UI/UX Designer",
            name: "Melissa Ortega"
        },
    ]


    const inputcluster = [
        {
            id: "1",
            heading: "Code",
            img: img41
        },
        {
            id: "2",
            heading: "Dataset",
            img: img42
        },
        {
            id: "3",
            heading: "Model",
            img: img43
        },
        {
            id: "4",
            heading: "Learn",
            img: img44
        },
        {
            id: "5",
            heading: "Research",
            img: img45
        },
        {
            id: "6",
            heading: "Host competitions",
            img: img46
        },
        {
            id: "7",
            heading: "Open source",
            img: img47
        },
        {
            id: "8",
            heading: "Code together",
            img: img48
        },
        {
            id: "9",
            heading: "Community",
            img: img49
        },
    ]
    return (
        <div>
            <section className="relative flex flex-row items-end justify-start sm:gap-[1.188rem] max-w-full text-center text-[3.75rem] text-white font-montserrat ">

                <div className="z-0 flex-1 flex flex-col items-center justify-end pt-[0rem] px-[0rem] pb-[1.563rem] box-border ">
                    <div className=" flex flex-col items-center justify-center py-[0rem]  px-[1.25rem] box-border max-w-full">
                        <h1 className="m-0 sm:w-[648px] relative text-inherit tracking-[-2.4px] leading-[4.05rem] font-bold font-inherit flex items-center justify-center shrink-0 z-[2] mq450:text-[2.25rem] mq450:leading-[2.438rem] mq1050:text-[3.5rem] mq1050:leading-[3.25rem]   ">
                            Meet the professionals
                        </h1>
                        <p className="text-[1.2rem] sm:w-[648px] flex py-4 flex-row">Praesent hendrerit, mi facilisis eleifend lobortis mi est hendrerit fringillaibus lorem, nonfringilla dui enim et ante eleiz.</p>
                    </div>

                    <div className='mt-4 flex flex-row flex-wrap gap-[1.91rem] justify-evenly'>

                        {
                            card.map((data) => (
                                <Card key={data.id} data={data} />
                            ))
                        }
                    </div>



                </div>

            </section>


            {/*  */}




            <section className="  mt-[5rem] sm:px-[7rem] p-0 flex flex-row items-start justify-center sm:gap-[1.188rem] max-w-full text-center sm:text-[3.75rem] text-[3rem] text-white font-montserrat ">

                {/* <div className="flex-1 flex  sm:flex-row flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.563rem] box-border "> */}
                {/* part7 */}
                <div className='mt-[10rem]'></div>
                <div className="  self-stretch  flex flex-row flex-wrap  items-start justify-start  max-w-full lg:flex-wrap gap-[11rem]">
                    <div className=" flex flex-row  items-end justify-start gap-[1.188rem]  max-w-full lg:flex-1 mq450:flex-wrap mq750:min-w-full">

                        <div className="z-0 flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[3.438rem] box-border min-w-[430px] min-h-[352px] max-w-full p-1">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[2.038rem] max-w-full">
                                <h1 className=" p-1 m-[auto] text-[3.4rem] relative  tracking-[-2px] leading-[3.188rem] font-bold font-inherit flex items-center max-w-full box-border pr-[0rem] z-[4] mq450:text-[1.875rem] mq450:leading-[1.938rem] mq1050:text-[2.5rem] mq1050:leading-[2.563rem]">
                                    The right solution
                                </h1>

                                <div className="self-stretch p-2 flex flex-col items-start justify-start gap-[2.356rem] max-w-full text-[1.1rem] text-royalblue-100" style={{padding:"0 1.5rem"}}>
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] ">
                                        <div className="w-[350.8px] flex flex-row items-end justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border max-w-full gap-[1.25rem]">
                                            <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                                                <div className="relative tracking-[0.26px] leading-[1.5rem] font-medium inline-block min-w-[93.5px]">
                                                    Development
                                                </div>
                                            </div>
                                            <button className="cursor-pointer [border:none] pt-[0.438rem] pb-[0.563rem] pr-[0.625rem] pl-[0.8rem] bg-royalblue-100 h-8 rounded flex flex-col items-start justify-start box-border gap-[0.563rem]">
                                                <div className="h-4 relative text-[0.813rem] tracking-[0.26px] leading-[2.063rem] font-medium font-montserrat text-white text-left flex items-center shrink-0 min-w-[28.8px]">
                                                    60%
                                                </div>
                                                <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.625rem] pl-[0.45rem]">
                                                    <div className="h-[5px] w-3 relative box-border border-t-[5px] border-solid border-royalblue-100 border-r-[6px] border-l-[6px]" />
                                                </div>
                                            </button>
                                        </div>
                                        <div className="self-stretch rounded-10xs bg-white overflow-hidden flex flex-row items-start justify-start z-[4]">
                                            <div className="h-1.5 w-[304.8px] relative bg-royalblue-100 overflow-hidden shrink-0" />
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] ">
                                        <div className="self-stretch flex flex-row items-end justify-between py-[0rem] pr-[0.938rem] pl-[0rem] gap-[1.25rem] mq450:flex-wrap">
                                            <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                                                <div className="relative tracking-[0.26px] leading-[1.5rem] font-medium inline-block min-w-[91.4px] box-border pr-[0rem]">
                                                    UI/UX Design
                                                </div>
                                            </div>
                                            <button className="cursor-pointer [border:none] pt-[0.438rem] pb-[0.563rem] pr-[0.688rem] pl-[0.831rem] bg-tomato h-8 rounded flex flex-col items-start justify-start box-border gap-[0.563rem]">
                                                <div className="h-4 relative text-[0.813rem] tracking-[0.26px] leading-[2.063rem] font-medium font-montserrat text-white text-left flex items-center shrink-0 min-w-[27.7px]">
                                                    92%
                                                </div>
                                                <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.563rem] pl-[0.419rem]">
                                                    <div className="h-[5px] w-3 relative box-border border-t-[5px] border-solid border-tomato border-r-[6px] border-l-[6px]" />
                                                </div>
                                            </button>
                                        </div>
                                        <div className="self-stretch h-1.5 rounded-10xs bg-white overflow-hidden shrink-0 flex flex-row items-start justify-start py-[0rem] pr-[2.5rem] pl-[0rem] box-border max-w-full z-[4]">
                                            <div className="self-stretch flex-1 relative bg-tomato overflow-hidden max-w-full" />
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] ">
                                        <div className="w-[442.3px] flex flex-row items-end justify-between py-[0rem] pr-[1.25rem] pl-[0rem] box-border gap-[1.25rem] max-w-full mq450:flex-wrap">
                                            <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                                                <div className="relative tracking-[0.26px] leading-[1.5rem] font-medium inline-block min-w-[92.7px]">
                                                    Compatibility
                                                </div>
                                            </div>
                                            <button className="cursor-pointer [border:none] pt-[0.438rem] pb-[0.563rem] pr-[0.681rem] pl-[0.825rem] bg-darkblue-200 h-8 rounded flex flex-col items-start justify-start box-border gap-[0.563rem] ">
                                                <div className="h-4 relative text-[0.813rem] tracking-[0.26px] leading-[2.063rem] font-medium font-montserrat text-white text-left flex items-center shrink-0 min-w-[27.9px]">
                                                    78%
                                                </div>
                                                <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.563rem] pl-[0.425rem]">
                                                    <div className="h-[5px] w-3 relative box-border border-t-[5px] border-solid border-darkblue-200 border-r-[6px] border-l-[6px]" />
                                                </div>
                                            </button>
                                        </div>
                                        <div className="self-stretch h-1.5 rounded-10xs bg-white overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full z-[4]">

                                            <div className="self-stretch rounded-10xs bg-white overflow-hidden flex flex-row items-start justify-start z-[4]">
                                                <div className="h-1.5 w-[390.8px] relative bg-royalblue-100 overflow-hidden shrink-0" />
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className=" z-0 flex-1 flex flex-row items-end justify-end gap-[1.188rem] min-w-[400px] max-w-full mq750:flex-wrap mq750:min-w-full p-2">
                        <img
                            className="h-[280.7px] sm:h-[275px] flex-1 relative  overflow-hidden object-cover  z-[4] mq450:min-w-full"
                            loading="lazy"
                            alt=""
                            src={img12}
                        />
                        {/* <div className="h-[436.7px] w-px bg-mediumslateblue-200 flex flex-col items-start justify-start relative z-[3] mq750:w-full mq750:h-px">
                <div className="w-[5px] h-[5px] absolute !m-[0] top-[-13.856rem] left-[calc(50%_-_2.5px)] rounded-8xs bg-white" />
            </div> */}
                    </div>
                </div>
                {/* part7end */}

                {/* </div> */}

            </section>



            <section className=" flex flex-row items-start justify-center sm:gap-[1.188rem] max-w-full text-center text-[3.75rem] text-white font-montserrat ">

<div className="z-0 py-[4rem] px-0 flex-1 flex flex-col items-start justify-center pt-[6.25rem] pb-[0rem] sm:pr-[1.563rem] pr-[0rem] pl-[0rem] box-border">

    <div className="  flex sm:flex-row flex-col items-start justify-evenly pt-[0rem]  pb-[1.175rem] box-border max-w-full gap-[3.25rem] lg:flex-wrap ">
        <div className=" flex sm:flex-row flex-col items-start justify-start gap-[1.875rem] lg:flex-1 mq750:flex-wrap mq750:min-w-full pl-8">
            <div className="relative flex-1 rounded-10xs bg-slateblue flex flex-col items-start justify-start pt-[2rem] pb-[8.875rem] pr-[1.25rem] pl-[2.5rem] box-border gap-[0.313rem] max-w-[350px] w-[350px] min-h-[232px] hover:bg-white hover:text-slateblue">
                <div className="relative tracking-[0.26px] leading-[1.5rem] text-[1rem] font-medium">
                    <span>{`$10,083.035 `}</span>
                    <span className="text-tomato">-30.94YTD</span>
                </div>
                <h1 className="m-0 relative text-[1.688rem] tracking-[-1.08px] leading-[1.806rem] font-bold font-inherit inline-block min-w-[93.8px] mq450:text-[1.375rem] mq450:leading-[1.438rem]">
                    Bitcoin
                </h1>
                {/* Button */}
                <button className="absolute bottom-5 left-5 text-[1rem] py-[0.5rem] px-[1rem] bg-tomato text-white rounded-3xs opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                    Read More
                </button>
                {/* Invisible hover area */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100"></div>
            </div>

            <div className="relative w-[350px] flex-1 rounded-10xs bg-slateblue flex flex-col items-start justify-start pt-[2rem] pb-[8.875rem] pr-[1.25rem] pl-[2.5rem] box-border gap-[0.313rem] max-w-[350px] min-h-[232px] hover:bg-white hover:text-slateblue">
                <div className="relative tracking-[0.26px] leading-[1.5rem] text-[1rem] font-medium">
                    <span>{`$10,083.035 `}</span>
                    <span className="text-tomato">-30.94YTD</span>
                </div>
                <h1 className="m-0 relative text-[1.688rem] tracking-[-1.08px] leading-[1.806rem] font-bold font-inherit inline-block min-w-[93.8px] mq450:text-[1.375rem] mq450:leading-[1.438rem]">
                    Etherum
                </h1>
                {/* Button */}
                <button className="absolute bottom-5 left-5 text-[1rem] py-[0.5rem] px-[1rem] bg-tomato text-white rounded-3xs opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                    Read More
                </button>
                {/* Invisible hover area */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100"></div>
            </div>
        </div>
        <div className="flex flex-col items-start bottom-1 justify-center pt-[0rem] px-[0rem] pb-[0.744rem] box-border  max-w-full text-[3.125rem] text-white lg:flex-1 mq750:min-w-full sm:pt-[6.5rem]">
            <div className="flex flex-col items-center justify-start mx-[2rem] gap-[1.344rem] max-w-full">
                <h1 className="m-0 relative text-inherit tracking-[-2px] leading-[3.188rem] font-bold font-inherit inline-block max-w-full z-[6] mq450:text-[1.875rem] mq450:leading-[1.938rem] mq1050:text-[2.5rem] mq1050:leading-[2.563rem]">
                    Our crypto pricing
                </h1>
                <div className="flex p-1 flex-row items-start justify-start gap-[0rem] text-[0.938rem] text-lightsteelblue">
                    <img
                        className="h-6 w-[17px] relative overflow-hidden shrink-0"
                        alt=""
                        src={img33}
                    />
                    <div className="relative leading-[1.5rem] font-medium z-[6]">
                        <p className="m-0">
                            Vel illum dolore eu feugiat nulla facilisis at vero eroset acc uquiblandit praesent luptatum zzril delenit augue duis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className=" flex sm:flex-row flex-col items-start justify-center pt-[0rem]  pb-[1.175rem] box-border max-w-full gap-[3.25rem] lg:flex-wrap ">
        <div className=" flex flex-col items-start justify-start pt-[1.181rem] px-[0rem] pb-[0rem] box-border  max-w-full lg:flex-1 mq750:min-w-full">
            <div className="self-stretch flex sm:flex-row flex-col items-start justify-start gap-[1.875rem] mq750:flex-wrap pl-8">
                <div className="relative w-[350px] flex-1 rounded-10xs bg-slateblue flex flex-col items-start justify-start pt-[2rem] pb-[8.875rem] pr-[1.25rem] pl-[2.5rem] box-border gap-[0.313rem] max-w-[350px] min-h-[232px] hover:bg-white hover:text-slateblue">
                    <div className="relative tracking-[0.26px] leading-[1.5rem] text-[1rem] font-medium">
                        <span>{`$10,083.035 `}</span>
                        <span className="text-tomato">-30.94YTD</span>
                    </div>
                    <h1 className="m-0 relative text-[1.688rem] tracking-[-1.08px] leading-[1.806rem] font-bold font-inherit inline-block min-w-[93.8px] mq450:text-[1.375rem] mq450:leading-[1.438rem]">
                        Ripple
                    </h1>
                    {/* Button */}
                    <button className="absolute bottom-5 left-5 text-[1rem] py-[0.5rem] px-[1rem] bg-tomato text-white rounded-3xs opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                        Read More
                    </button>
                    {/* Invisible hover area */}
                    <div className="absolute inset-0 opacity-0 hover:opacity-100"></div>
                </div>
                <div className="relative w-[350px] flex-1 rounded-10xs bg-slateblue flex flex-col items-start justify-start pt-[2rem] pb-[8.875rem] pr-[1.25rem] pl-[2.5rem] box-border gap-[0.313rem] max-w-[350px] min-h-[232px] hover:bg-white hover:text-slateblue">
                    <div className="relative tracking-[0.26px] leading-[1.5rem] text-[1rem] font-medium">
                        <span>{`$10,083.035 `}</span>
                        <span className="text-tomato">-30.94YTD</span>
                    </div>
                    <h1 className="m-0 relative text-[1.688rem] tracking-[-1.08px] leading-[1.806rem] font-bold font-inherit inline-block min-w-[93.8px] mq450:text-[1.375rem] mq450:leading-[1.438rem]">
                        Dash
                    </h1>
                    {/* Button */}
                    <button className="absolute bottom-5 left-5 text-[1rem] py-[0.5rem] px-[1rem] bg-tomato text-white rounded-3xs  opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-50">
                        Read More
                    </button>
                    {/* Invisible hover area */}
                    {/* <div className="absolute inset-0 opacity-0 hover:opacity-100"></div> */}
                </div>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[2.719rem] max-w-full text-[0.938rem] text-lightsteelblue lg:flex-1 mq750:min-w-full">
        <div className="flex p-1 flex-row items-start justify-start gap-[0rem] text-[0.938rem] text-lightsteelblue">
                    <img
                        className="h-6 w-[17px] relative overflow-hidden shrink-0"
                        alt=""
                        src={img33}
                    />
                    <div className="relative sm:w-[600px] w-auto leading-[1.5rem] font-medium z-[6]">
                        <p className="m-0">
                            Vel illum dolore eu feugiat nulla facilisis at vero eroset acc uquiblandit praesent luptatum zzril delenit augue duis.
                        </p>
                    </div>
                </div>
            <button className="cursor-pointer [border:none] py-[0.675rem] w-[150.4px] px-[1rem] bg-tomato rounded-3xs overflow-hidden flex flex-row items-end justify-start gap-[0.6rem] z-[6]">
                <div className="relative text-[0.875rem] tracking-[0.42px] leading-[0.875rem] font-semibold font-montserrat text-white text-left inline-block min-w-[81.7px]">
                    Read More
                </div>
                <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
                    <img
                        className="w-[26px] h-[9px] relative overflow-hidden shrink-0"
                        alt=""
                        src={img34}
                    />
                </div>
            </button>
        </div>
    </div>













    <div className=" p-[1rem] self-stretch flex mt-[10rem] sm:flex-row flex-col flex-wrap items-end justify-center gap-[2rem] max-w-full text-[1.688rem] text-white">

        {
            inputcluster.map((item) => (
                <InputCluster key={item.id} item={item} />
            ))
        }


    </div>


</div>
{/* </div> */}
</section>
            {/*  */}





      


            






            {/* part8 end */}





            {/* part9  */}

            <section className="sm:pl-[5rem] pl-0 flex flex-row items-center justify-start sm:gap-[1.188rem] max-w-full m-auto text-center text-[3.75rem] text-white font-montserrat box-border bg-[url('https://innovio.qodeinteractive.com/wp-content/uploads/2018/10/h4-backround-img-1.png')] bg-cover bg-no-repeat bg-[top] h-[100vh]">

                <div className="z-0 ml-[5rem] flex-1 flex flex-col w-[420px] items-start justify-center pt-0 px-0 pb-[1.563rem] box-border">

                    <div>
                        <h1 className="text-[3.6rem] tracking-[-3px] leading-[4.688rem] font-bold font-inherit text-white z-[6] text-justify">
                            <p className="m-0">Mining is the</p>
                            <p className="m-0">Platform</p>
                        </h1>

                        <div className='flex flex-row space-x-4'>
                            <button className="cursor-pointer mt-4 py-[0.675rem] pl-[1rem] bg-tomato w-[150.4px] rounded-3xs box-border overflow-hidden shrink-0 flex flex-row items-end justify-start gap-[0.606rem] z-[1] border-[2px] border-solid border-tomato">
                                <div className="relative text-[0.875rem] tracking-[0.42px] leading-[0.875rem] font-semibold font-montserrat text-white text-left inline-block min-w-[81.7px]">
                                    Buy Token
                                </div>
                                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[0.125rem]">
                                    <img className="w-[26px] h-[9px] relative overflow-hidden shrink-0" alt="" src={imgy} />
                                </div>
                            </button>
                            <button className="z-0 cursor-pointer mt-4 py-[0.675rem] pl-[1rem] bg-white w-[150.4px] rounded-3xs box-border overflow-hidden shrink-0 flex flex-row items-end justify-start gap-[0.606rem] border-[2px] border-solid border-white">
                                <div className="relative text-[0.875rem] tracking-[0.42px] leading-[0.875rem] font-semibold font-montserrat text-midnightblue text-left inline-block min-w-[87.9px]">
                                    Sign up
                                </div>
                                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[0.125rem] opacity-100 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-[-1.5rem]">
                                    <img className="w-[26px] h-[9px] relative overflow-hidden shrink-0" alt="" src={imgy} />
                                </div>
                            </button>
                        </div>
                    </div>

                </div>

            </section>





        </div>
    )
}


const Card = ({ data }) => {
    return (
        <div className='mb-[2rem]'>
            <div className="h-[431.5px] sm:w-[280px] w-[370px] flex flex-col items-center justify-center gap-[1.513rem] text-left text-[0.813rem] text-royalblue-100 font-montserrat">
                <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                    loading="lazy"
                    alt=""
                    src={data.img}
                />
                <div
                    className="flex flex-col items-center justify-center py-[0rem] pr-[1.25rem] pl-[0rem] gap-[2.1rem]"

                >
                    <div className="flex flex-col items-center justify-center gap-[0.363rem]">
                        <div
                            className="relative text-[1.1rem] tracking-[0.26px] leading-[0.975rem] capitalize font-medium inline-block min-w-[66.4px]"

                        >
                            {data.post}
                        </div>
                        <h1 className="m-0 relative text-[1.688rem] tracking-[-1.08px] leading-[1.806rem] font-bold font-inherit text-white mq450:text-[1.375rem] mq450:leading-[1.438rem]">
                            {data.name}
                        </h1>
                    </div>
                    <div
                        className="w-[179.3px] flex flex-row items-center justify-center py-[0rem] px-[1rem] box-border"

                    >
                        <div className="flex-1 flex flex-row items-center justify-center gap-[1.25rem]">

                            <div className="h-[50.9px] w-[50px] relative">

                                <img
                                    className="absolute  left-[0rem] w-full h-full overflow-hidden z-[1]"
                                    alt=""
                                    src={img4}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function InputCluster({ item }) {


    return (
        <div
            className={`self-stretch flex flex-row items-start justify-start gap-[2rem] text-left text-[1.688rem] text-white font-montserrat mq450:flex-wrap bg-cardblue p-2 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105`}

        >
            <img
                className="h-[78px] w-[78px] relative overflow-hidden shrink-0 object-cover hover:transform hover:translate-y-[-10px] transition-transform duration-250 ease-in-out"
                loading="lazy"
                alt=""
                src={item.img}
            />
            <div className="flex-1 flex flex-col items-start justify-start max-w-full pt-[1.206rem] px-[0rem] pb-[0rem] box-border min-w-[187px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1.594rem]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.513rem]">
                        <h1 className="m-0 relative text-inherit tracking-[-1.08px] leading-[2.025rem] font-bold font-inherit shrink-0 [debug_commit:f6aba90] mq450:text-[1.375rem] mq450:leading-[1.625rem]">
                            {item.heading}
                        </h1>
                        <div className="relative text-[1rem]  leading-[1.5rem] font-medium text-lightsteelblue shrink-0 [debug_commit:f6aba90]">
                            <p className="m-0">Lorem proin gravida nibh vel velit aua</p>
                            <p className="m-0">liquean sollicitudin lorem quis bibe</p>
                            <p className="m-0">auctor, nisi elit.</p>
                        </div>
                    </div>
                    <div className="rounded-3xs flex flex-row items-start justify-start gap-[0.875rem] text-[0.875rem]">
                        <div className="flex flex-col items-start justify-start pt-[1rem] px-[0rem] pb-[0rem]">
                            <div className="relative tracking-[0.42px] text-[1rem] leading-[0.875rem] font-semibold inline-block min-w-[81.7px]">
                                Read More
                            </div>
                        </div>
                        <div className="h-[46px] w-[46px] relative rounded-27xl box-border border-[2px] border-solid border-mediumslateblue-100">
                            <div className="absolute top-[calc(50%_-_7.5px)] left-[calc(50%_-_0.5px)] bg-white w-px h-[15px]" />
                            <div className="absolute top-[calc(50%_-_0.5px)] left-[calc(50%_-_7.5px)] bg-white w-[15px] h-px z-[1]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Increment progress by 10% every second
            setProgress((prevProgress) => (prevProgress + 10) % 101);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="self-stretch rounded-10xs bg-white overflow-hidden flex flex-row items-start justify-start z-[4]">
            <div className="h-1 w-[304.8px] relative overflow-hidden shrink-0">
                <div className="progress-bar bg-blue-700 text-xs font-medium text-white text-center leading-none rounded-full" style={{ width: `${progress}%` }}>
                    {progress}%
                </div>
            </div>
        </div>
    );
};








export default Cryptop06


