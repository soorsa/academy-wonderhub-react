import NavItem from "./NavItem";
import { FaUsers } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { MdDashboardCustomize, MdLiveTv, MdOutlineHelp } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutBoxRFill, RiNotificationBadgeFill } from "react-icons/ri";
import NavbarAddorder from "./NavbarAddorder";
import Auth from "../../utils/Auth";
import { BiHeartSquare } from "react-icons/bi";
import { TbSchool } from "react-icons/tb";

function NavigationContainer() {
  return (
    <div className="flex flex-col p-5 gap-5 h-screen justify-between overflow-y-auto scrollbar-hide">
      <img
        src="/images/logo.png"
        alt="Wonder HUB"
        className="w-[60%] mx-auto"
      />
      <div className="w-full py-1.5 bg-white rounded-2xl">
        <nav className="space-y-2 p-2">
          <NavItem
            label="Dashboard"
            icon={<MdDashboardCustomize className="w-4 h-4" />}
            path="/dashboard"
          />
          {/* <NavItem
            label="My Wallet"
            icon={<RiWallet3Fill className=" w-4 h-4" />}
            path="/dashboard/wallet"
          /> */}
          <NavItem
            label="Transactions"
            icon={<FaArrowRightArrowLeft className=" w-4 h-4" />}
            path="/dashboard/transactions"
          />
          <NavItem
            label="Notifications"
            icon={<RiNotificationBadgeFill className=" w-4 h-4" />}
            path="/dashboard/notifications"
          />
          <div className="flex items-center mt-7 px-7 gap-2">
            <h4 className="text-adron-gray-400 font-bold text-[13px]">LEARN</h4>
            <hr className="text-gray-300 w-full" />
          </div>
          <NavItem
            label="Courses"
            icon={<TbSchool className=" w-4 h-4" />}
            path="/dashboard/courses"
          />
          <NavItem
            label="My Courses"
            icon={<TbSchool className=" w-4 h-4" />}
            path="/dashboard/my-courses"
          />
          <NavItem
            label="Favourites"
            icon={<BiHeartSquare className=" w-4 h-4" />}
            path="/dashboard/my-favourites"
          />
          <NavItem
            label="Communities"
            icon={<FaUsers className=" w-4 h-4" />}
            path="/dashboard/communities"
          />
          <NavItem
            label="Live Class"
            icon={<MdLiveTv className=" w-4 h-4" />}
            path="/dashboard/wallet"
          />

          {/* Profile Nav */}
          <div className="flex items-center mt-7 px-7 gap-2">
            <h4 className="text-adron-gray-400 font-bold text-[13px]">
              PROFILE
            </h4>
            <hr className="text-gray-300 w-full" />
          </div>
          <NavItem
            label="Account Settings"
            icon={<IoSettingsSharp className=" w-4 h-4" />}
            path="/dashboard/settings"
          />

          <NavItem
            label="Surport"
            icon={<MdOutlineHelp className=" w-4 h-4" />}
            path="/dashboard/support"
          />
          <button
            onClick={() => {
              Auth.logout();
            }}
            className="flex items-center w-full px-7 py-[7px] text-[12px] text-red-500 rounded-lg hover:bg-[#FFE6E6]"
          >
            <RiLogoutBoxRFill className="mr-2  w-4 h-4" />
            Logout
          </button>
        </nav>
        <div className="px-4 py-20">
          <NavbarAddorder />
        </div>
      </div>
    </div>
  );
}

export default NavigationContainer;
