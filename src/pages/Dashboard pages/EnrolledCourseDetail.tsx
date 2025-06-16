import React from "react";
import CourseVideo from "../../components/DashboardComponents/CourseVideo";
import CourseDescription from "../../components/DashboardComponents/CourseDescription";
import CourseLessonSidebar from "../../components/DashboardComponents/CourseLessonSideBar";
import Button from "../../components/Button";
import { GrNext, GrPrevious } from "react-icons/gr";

const EnrolledCourseDetailPage: React.FC = () => {
  return (
    <div className="min-h-screen py-6 flex flex-col lg:flex-row gap-8 relative">
      <div className="w-full lg:w-2/3 space-y-6">
        <nav className="text-sm text-gray-500">
          <span>My Course</span> / <span>Mastering Illustration</span> /{" "}
          <span className="text-gray-800 font-medium">Introduction</span>
        </nav>
        <h1 className="text-3xl font-bold">Mastering Illustration</h1>
        <CourseVideo />
        <div className="flex w-full justify-between">
          <Button
            label="Prev"
            icon={<GrPrevious />}
            className="!w-[200px] !bg-transparent !text-black border-transparent border hover:border-wonderhub-200"
          />
          <Button
            label="Next"
            rightIcon={<GrNext />}
            className="!w-[200px] !bg-transparent !text-black border border-transparent hover:border-wonderhub-200"
          />
        </div>
        <CourseDescription />
      </div>
      {/* <div className="w-[calc(0.3*(100%-300px))] flex justify-end h-screen overflow-y-scroll scrollbar-hide fixed right-6">
        <CourseLessonSidebar />
      </div> */}
      <div className="w-1/3">
        <CourseLessonSidebar />
      </div>
    </div>
  );
};

export default EnrolledCourseDetailPage;
