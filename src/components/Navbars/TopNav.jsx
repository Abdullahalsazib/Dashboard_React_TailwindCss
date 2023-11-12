import {
  Bell,
  Menu,
  Moon,
  Search,
  Settings,
  SunMediumIcon,
  SunMoon,
  User2,
  UsersIcon,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
function TopNav(TopNavProps) {
  const [lan, setLan] = useState(false);
  const [sideOpen, setSideOpen] = useState(true);
  const handleChange = (e) => {
    setSideOpen(!sideOpen);
    TopNavProps.onData(sideOpen);
  };

  const [dark, setDark] = useState(null);
  const [setting, setSetting] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDark("dark");
    } else {
      setDark("light");
    }
  }, []);
  useEffect(() => {
    if (dark === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  const darkModeHandle = () => {
    setDark(dark === "dark" ? "light" : "dark");
  };
  return (
    <div>
      <nav className=" dark:bg-slate-900 bg-white py-2 md:py-2 px-3 flex items-center justify-between">
        <div className="Logo_div flex items-center space-x-6">
          <div
            onClick={handleChange}
            className=" cursor-pointer rounded-md "
          >
            {sideOpen === true ? (
              <X size="30" className="dark:text-teal-400 text-teal-600" />
              ) : (
              <Menu size="30" className="dark:text-teal-400 text-teal-600" />
            )}
          </div>
          {/* search input */}
          <div className=" input_box w-[50%] bg-none rounded-lg border-[2px] dark:border-none border-gray-300  flex items-center py-1 px-1 md:py-2 md:px-3">
            <Search className=" text-slate-400" />
            <input
              type="search"
              className=" w-[100%] lg:w-auto bg-transparent border-none outline-none px-3"
              placeholder="Search Anything..."
            />
          </div>
          {/* search input */}
        </div>

        <div className=" flex items-center  space-x-3 md:space-x-6">
          <div
            onClick={() => setLan(!lan)}
            className="relative hidden text-[16px] text-slate-500 dark:hover:text-slate-300 hover:text-slate-800 duration-200 cursor-pointer space-x-2 font-semibold lg:flex items-center"
          >
            <p>English</p>
            <p>🇺🇸</p>
            {lan && (
              <motion.div
                initial={{
                  y: -200,
                  scale: -2,
                }}
                animate={{
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.3,
                }}
                className=" text-[18px] font-serif py-1 px-3 border-[2px] data:border dark:border-slate-700 border-slate-300 rounded-md  absolute dark:bg-slate-900 bg-white top-14 right-0"
              >
                <div className=" grid grid-flow-row gap-2 w-full h-full">
                  <LengAndFlg CountryName="England" LanFlg="🏴󠁧󠁢󠁥󠁮󠁧󠁿" />
                  <LengAndFlg CountryName="Arabic" LanFlg="🇸🇦" />
                  <LengAndFlg CountryName="Malive" LanFlg="🇲🇻" />
                  <LengAndFlg CountryName="Jorgan" LanFlg="🇯🇴" />
                  <LengAndFlg CountryName="Argentina" LanFlg="🇦🇷" />
                  <LengAndFlg CountryName="Brazil" LanFlg="🇧🇷" />
                </div>
              </motion.div>
            )}
          </div>

          {/* flag to chang language */}
          <div className="  relative">
            <TopMainIcons Icons={UsersIcon} />
            <div className=" lg:block hidden  top-1 right-2 absolute w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
          <div className=" relative">
            <TopMainIcons Icons={Bell} />
            <div className="lg:block hidden top-1 right-2 absolute w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
          <div onClick={() => setSetting(!setting)} className=" relative">
            <div className=" bg-transparent p-2 rounded-full cursor-pointer">
              <Settings
                className={`${
                  setting && " animate-spin"
                } dark:text-slate-400 text-slate-600 text-[15px] hover:text-slate-800 duration-200 `}
              />
            </div>
            <div className=" top-1 right-2 absolute w-3 h-3 bg-red-500 rounded-full"></div>
            {setting && (
              <motion.div
                initial={{
                  y: -200,
                }}
                animate={{
                  y: 1,
                }}
                className=" top-10 right-4 absolute py-2 px-2 flex items-center justify-center w-[100px] h-[100px] shadow-lg  dark:bg-slate-900 bg-slate-100 rounded-md"
              >
                <div
                  onClick={darkModeHandle}
                  className={`${
                    dark === "dark"
                      ? "justify-start"
                      : "justify-end bg-slate-100"
                  }  duration-300 w-[70px] h-[33px] bg-slate-500 dark:bg-slate-500 rounded-full flex items-center px-1`}
                >
                  {dark === "dark" ? (
                    <SunMediumIcon className=" text-black" />
                  ) : (
                    <SunMoon className=" text-white" />
                  )}
                </div>
              </motion.div>
            )}
          </div>

          {/* proflie icon */}
          <div className=" p-2 lg:p-4 dark:bg-slate-500 bg-slate-300 rounded-full">
            <User2 size="20" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default TopNav;
const TopMainIcons = (TopMainIconsProps) => {
  return (
    <>
      <div className="  bg-transparent p-2 rounded-full cursor-pointer">
        <TopMainIconsProps.Icons
          className={`dark:text-slate-400 text-slate-600 text-[15px] hover:text-slate-800 duration-200 `}
        />
      </div>
    </>
  );
};
const LengAndFlg = (LengAndFlgProps) => {
  return (
    <>
      <div
        className=" dark:bg-slate-800 dark:text-slate-500 bg-slate-100 duration-200 hover:bg-slate-300 py-2 px-3 flex ic
       justify-between rounded-md"
      >
        <p>{LengAndFlgProps.CountryName}</p>
        <p>{LengAndFlgProps.LanFlg}</p>
      </div>
    </>
  );
};
