import Button from "../../components/Button";
import CourseFlatList from "../../components/DashboardComponents/CourseFlatList";
import CourseListProg from "../../components/DashboardComponents/CourseListProg";
import Pill from "../../components/Pills";
import { enrolledCourses } from "../../data/courses";

const HomeScreen = () => {
  const courses = enrolledCourses;
  return (
    <div className="flex flex-col w-full gap-6">
      <div className="w-full bg-wonderhub rounded-3xl flex p-4">
        <div className="flex w-1/2 gap-4">
          <img src="/images/course.jpg" className="w-[40%] rounded-2xl" />
          <div className="flex flex-col w-[60%] text-white gap-3">
            <p className="text-sm">UI/UX Design Foundation</p>
            <p className="text-xs line-clamp-2 text-white/50">
              UI/UX Design Foundation Design Foundation Design Foundation Design
              Foundation Design Foundation Design Foundation Design Foundation
            </p>
            <div className="flex items-center gap-2">
              <p className="text-xs text-white/50">Progress:</p>
              <div className="w-full h-[2px] rounded-full bg-white/20 flex items-center">
                <div className="w-1/3 h-[3px] rounded-full bg-white"></div>
              </div>
              <p className="text-xs text-white/50">4/12</p>
            </div>
            <Pill
              label="Continue Learning"
              className="!text-white !border-white !text-sm"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 md:grid-rows-3 gap-2 md:gap-4">
        {/* My Wallet */}
        <div className="col-span-2 md:row-span-2 bg-white rounded-3xl p-6 flex flex-col gap-4">
          <div className="mt-5">
            <p className="text-gray-500 font-semibold mb-2">My Wallet</p>
            <p className="text-3xl font-bold">₦4,040,000</p>
            <p className="text-xs text-gray-400">Wallet balance</p>
          </div>
          <Button label="Fund Wallet" className="!w-fit px-12 py-3 text-xs" />
        </div>

        {/* My Properties */}
        <div className="rounded-3xl p-4 md:p-6 text-center bg-white flex flex-col justify-between md:row-span-3 md:h-auto">
          <div>
            <p className="text-adron-black mb-2 text-xs md:text-2xl">
              My Courses
            </p>
            <p className="text-[8px] md:text-xs text-adron-gray-200 w-full md:w-[60%] mx-auto">
              Properties you own or are currently financing.
            </p>
          </div>
          <div className="">
            <p className="text-6xl font-bold">3</p>
            <div className="md:bg-adron-body flex w-full md:w-fit mx-auto rounded-full md:px-4 my-1 text-xs justify-between items-center gap-2 mb-4 md:mb-0">
              <span>2 in Progress</span>
              <span className="text-lg">•</span>
              <span>1 Completed</span>
            </div>
          </div>
          <a
            href="/my-properties"
            className="md:mt-4 text-adron-green font-bold text-sm"
          >
            View Courses
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4 md:col-span-2">
          {/* Total Invoice */}
          <div className="bg-white rounded-3xl p-6 w-full">
            <p className="text-gray-500 font-semibold mb-2">Total Invoice</p>
            <p className="text-xl font-bold truncate">₦170,000,000</p>
          </div>

          {/* Amount Paid */}
          <div className="bg-white rounded-3xl p-6 w-full">
            <p className="text-gray-500 font-semibold mb-2">Amount Paid</p>
            <p className="text-xl font-bold truncate">₦61,000,000</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CourseListProg
          courses={courses}
          listName="My Courses"
          isError={false}
          isLoading={false}
        />
        <CourseFlatList
          courses={courses}
          listName="Recommended for you"
          isError={false}
          isLoading={false}
        />
      </div>
    </div>
  );
};

export default HomeScreen;
