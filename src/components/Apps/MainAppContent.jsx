import React from "react";
import "./MainApp.css";
import { BarChart, BotIcon } from "lucide-react";
import BarComponent from "../SmallComponents/BarChart";
import PiChart from "../SmallComponents/PiChart";
import LineChart from "../SmallComponents/LineChart";
function MainAppContent() {
  return (
    <>
      <div className=" grid gap-y-4 lg:gap-y-6">
        <div className=" w-full xl:space-y-0 space-y-5 xl:flex gap-x-0 xl:gap-x-3 2xl:gap-x-10">
          <div className=" shadow-lg dark:shadow-lg dark:shadow-slate-600 px-2 md:px-7 xl:w-[70%] rounded-lg dark:bg-gradient-to-r dark:from-sky-400 from-green-300 dark:to-green-400 to-blue-500  bg-gradient-to-r text-black md:flex items-center justify-between ">
            <div className=" py-5 space-y-2 md:space-y-4">
              <div className=" 2xl:w-[500px]">
                <h1 className=" text-center md:text-left text-[30px] md:text-[28px] 2xl:text-[40px]  dark:text-slate-200 capitalize font-bold">
                  welcome back <br /> Fabiana Copmany
                </h1>
                <p className=" md:text-left text-center md:px-0 px-20 text-[9px] md:text-sm font-semibold dark:text-slate-300 dark:capitalize text-slate-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, similique. consectetur adipisicing elit. Odio, ipsam?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                  omnis!
                </p>
              </div>
              <div className=" md:block flex items-center justify-center">
                <button className=" font-bold px-4 py-1 text-[15px] md:text-[20px] text-white uppercase  md:py-2 md:px-5 bg-green-600 rounded-lg">
                  Go Now
                </button>
              </div>
              {/* text content */}
            </div>

            {/* img content */}
            <div className=" flex items-center justify-center">
              <img
                className=" w-[40%] md:w-[30%]"
                src="https://opendoodles.s3-us-west-1.amazonaws.com/Doggie.svg"
                alt=""
              />
            </div>
          </div>
          <div className="py-5 md:h-auto h-[300px] md:py-0 rounded-lg w-full xl:w-[30%] topSendCard flex items-end">
            <div className="  md:py-10 xl:py-6 px-5 ">
              <p className=" uppercase font-bold lg:text-[20px] text-green-500">
                featured app
              </p>
              <h1 className=" capitalize font-semibold lg:text-[30px] text-white ">
                strike a yogi pose
              </h1>
              <p className=" text-sm text-slate-400 capitalize">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur et sequi doloremque ullam praesentium repudiandae
                quisquam sint unde error ut.
              </p>
            </div>
          </div>
        </div>
        {/* ..//.. */}

        <div className=" grid grid-flow-row lg:grid-flow-col gap-y-5 lg:gap-y-0 gap-x-0 lg:gap-x-10">
          <TotalCard />
          <TotalCard />
          <TotalCard />
        </div>
        <div className=" grid grid-flow-row lg:grid-flow-col gap-y-5 lg:gap-y-0 gap-x-0 lg:gap-x-10">
          <PIeCard />
          <LinCard />
        </div>
      </div>
      {/* <div>
        <PiChart/>
      </div> */}
    </>
  );
}

export default MainAppContent;

const TotalCard = () => {
  return (
    <>
      <div className=" dark:bg-slate-500 bg-gradient-to-bl from-sky-600 to-blue-300 dark:bg-gradient-to-tr dark:from-purple-600 dark:to-blue-200 py-3 px-5 lg:px-10 lg:py-5 rounded-lg">
        <p>Total Active Users</p>
        <div className=" flex items-center justify-between">
          <div className="">
            <h1 className=" flex items-center space-x-3">
              <BotIcon />
              <h2>+89.4%</h2>
            </h1>
            <h1 className="text-[30px] lg:text-[35px] font-bold">43.7k</h1>
          </div>
          <div className="">
            <BarComponent />
          </div>
        </div>
      </div>
    </>
  );
};

const PIeCard = () => {
  return (
    <>
      <div className=" dark:bg-slate-500 bg-gradient-to-bl from-green-800 to-blue-500 dark:bg-gradient-to-tr dark:from-green-200 dark:to-red-100 py-3 px-5 lg:px-5 lg:py-5 rounded-lg flex items-center justify-center">
        <div className="w-[90%] flex items-center justify-center">
          <PiChart />
        </div>
      </div>
    </>
  );
};
const LinCard = () => {
  return (
    <>
      <div className=" bg-white dark:bg-slate-100 py-3 px-5 lg:px-5 lg:py-5 rounded-lg flex items-center justify-center">
        <div className="">
          <LineChart />
        </div>
      </div>
    </>
  );
};
