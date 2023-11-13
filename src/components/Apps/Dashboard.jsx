import React, { useState } from "react";
import TopNav from "../Navbars/TopNav";
import SideNav from "../Navbars/SideNav";
import MainAppContent from "./MainAppContent";
import Subscription from "./Subscription/Subscription";

function Dashboard() {
  const [open, setOpen] = useState();
  const getData = (data) => {
    setOpen(data);
  };
  return (
    <div>
      <div className=" flex w-full md:h-screen">
        <SideNav mainValue={open} />

        <div className=" w-full dark:bg-slate-800 dark:text-white bg-slate-200">
          <TopNav onData={getData} />
          <div className=" py-5 px-5 h-[100vh] md:h-[92vh] overflow-scroll overflow-x-hidden">
            <MainAppContent />
            {/* <Subscription/> */}
            {/* contents heres */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
