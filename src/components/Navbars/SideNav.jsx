import {
  AreaChart,
  BadgeCentIcon,
  BaggageClaim,
  BaggageClaimIcon,
  BarChart3,
  BookOpenText,
  Briefcase,
  CalendarDaysIcon,
  FileBadgeIcon,
  FlagTriangleRight,
  Home,
  Landmark,
  LayoutDashboard,
  LucideFolderKanban,
  MessagesSquare,
  PlaneTakeoff,
  ShoppingBag,
  User,
  User2,
  User2Icon,
} from "lucide-react";
import React from "react";
import { Fa500Px } from "react-icons/fa";
import "./SideNav.css";
import { motion } from "framer-motion";
const OverflowMenu = [
  { OverflowTitle: "App", OverflowIcons: LayoutDashboard },
  { OverflowTitle: "E-coommerce", OverflowIcons: BaggageClaim },
  { OverflowTitle: "Analytics", OverflowIcons: AreaChart },
  { OverflowTitle: "Banking", OverflowIcons: Landmark },
  { OverflowTitle: "Booking", OverflowIcons: PlaneTakeoff },
  { OverflowTitle: "File", OverflowIcons: FileBadgeIcon },
];
const ManagementMenu = [
  { ManagementTitle: "User", ManagementIcons: User2Icon },
  { ManagementTitle: "Product", ManagementIcons: ShoppingBag },
  { ManagementTitle: "Order", ManagementIcons: BaggageClaimIcon },
  { ManagementTitle: "Invoice", ManagementIcons: BadgeCentIcon },
  { ManagementTitle: "Blog", ManagementIcons: BookOpenText },
  { ManagementTitle: "Job", ManagementIcons: Briefcase },
  { ManagementTitle: "Tour", ManagementIcons: FlagTriangleRight },
  { ManagementTitle: "Chat", ManagementIcons: MessagesSquare },
  { ManagementTitle: "Calender", ManagementIcons: CalendarDaysIcon },
  { ManagementTitle: "Kandban", ManagementIcons: LucideFolderKanban },
];
function SideNav(SideNavProps) {
  // SideNavPrps.
  let myOpen = SideNavProps.mainValue;
  return (
    <>
      {/*  w-[342px] */}
      <div
        className={` 
         bg-white   dark:bg-slate-900  
        ${
          myOpen === true
            ? " duration-150 -top-[100%] w-[320px] md:w-[80px] "
            : "w-[322px]"
        } duration-200 top-14 md:left-0 md:top-0 absolute md:relative`}
      >
        <div className=" h-[75%]">
          {/* top section */}
          <div className=" hidden logo md:flex items-center justify-center py-4 md:py-5 lg:py-4">
            <Fa500Px className="dark:text-green-400 text-[25px] md:text-[28px] lg:text-[36px]  text-green-600" />
          </div>
          {/* sideoverFlew overflow-x-hidden*/}
          <div className="   h-[100%] ">
            {/* overflows */}
            <ul className=" my-2 space-y-1 md:px-5 px-2">
              <h1
                className={`dark:text-slate-400 text-slate-500 ${
                  myOpen && "hidden"
                }`}
              >
                Overflow
              </h1>
              {OverflowMenu.map((items, index) => (
                <li
                  className={` py-[7px] px-5 ${
                    myOpen && "flex items-center  md:justify-center"
                  }   rounded-md dark:hover:bg-slate-700 hover:bg-blue-400 duration-300  hover:text-white 0`}
                  key={index}
                >
                  <a
                    className=" dark:text-slate-300 text-slate-600 flex items-center space-x-2"
                    href="#"
                  >
                    {myOpen === true ? (
                      <items.OverflowIcons size="27" />
                    ) : (
                      <items.OverflowIcons />
                    )}
                    <span
                      className={`${
                        myOpen && " md:hidden"
                      } text-sm lg:text-[16px]`}
                    >
                      {items.OverflowTitle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            {/* Managenent */}
            <ul
              className={`md:px-5 px-2 space-y-1 ${
                myOpen === true ? "w-[100%] overflow-y-hidden" : "h-[50%]"
              }  sideoverFlew overflow-scroll overflow-x-hidden `}
            >
              {myOpen === true ? (
                <div className=" w-full h-1 rounded-md my-4 bg-slate-300"></div>
              ) : (
                <h1
                  className={`dark:text-slate-400  text-slate-500 ${
                    myOpen && " text-[9px] md:text-[10px] py-2"
                  }`}
                >
                  Management
                </h1>
              )}
              {ManagementMenu.map((items, index) => (
                <li
                  className={` py-[8px] px-5 ${myOpen && "mx-0"} ${
                    myOpen && "flex items-center md:justify-center"
                  }   rounded-md dark:hover:bg-slate-700  hover:bg-blue-400 duration-300 hover:text-white 0`}
                  key={index}
                >
                  <a
                    className="dark:text-slate-300 text-slate-600 flex items-center space-x-2"
                    href="#"
                  >
                    {myOpen === true ? (
                      <items.ManagementIcons size="27" />
                    ) : (
                      <items.ManagementIcons />
                    )}
                    <span
                      className={`${
                        myOpen && "md:hidden"
                      }  text-sm md:text-[16px]`}
                    >
                      {items.ManagementTitle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* top section */}
        </div>
        <div
          className={`${
            myOpen && "m-0"
          } p-2 space-y-3 absolute bottom-0 hidden md:block  w-full`}
        >
          <div className=" dark:bg-slate-700 bg-slate-200 rounded-md py-6 px-2">
            {/* ...///... */}
            <div className=" flex items-center justify-center">
              <div
                className={` ${
                  myOpen && "p-2"
                } relative p-5 rounded-full bg-slate-300`}
              >
                <User2 />
                <div className=" rounded-md px-2 capitalize text-white  bg-orange-500 absolute -top-2 -right-7">
                  free
                </div>
              </div>
            </div>

            {/* .////. */}
            <div
              className={` ${
                myOpen === true ? "hidden " : "block"
              } grid grid-flow-row justify-center`}
            >
              <h1 className="dark:text-white text-center  font-semibold  lg:text-[22px]">
                Jack Sparrow
              </h1>
              <p className="  dark:text-slate-300 text-center text-[10px] lg:text-sm text-slate-500">
                jacksparrow220@gmail.com
              </p>
            </div>
            <div
              className={` flex items-center justify-center  ${
                myOpen === true ? "hidden " : "block"
              }`}
            >
              <button className="  mt-3 capitalize  py-2 px-4 lg:py-2 lg:px-5 hover:bg-slate-700 duration-200 hover:text-purple-300 bg-black text-white font-semibold text-center rounded-md">
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideNav;
