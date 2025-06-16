import React from "react";
import CourseDescription from "../../components/DashboardComponents/CourseDescription";
import CourseDetailBlock from "../../components/DashboardComponents/CourseDetailBlock";
import CourseSidebar from "../../components/DashboardComponents/CourseSideBar";

const CourseDetailPage: React.FC = () => {
  return (
    <div className="min-h-screen py-6 flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-2/3 space-y-6">
        <nav className="text-sm text-gray-500">
          <span>Course</span> /{" "}
          <span className="text-gray-800 font-medium">
            Mastering Illustration
          </span>
        </nav>
        <h1 className="text-3xl font-bold">Mastering Illustration</h1>
        <CourseDetailBlock />
        <CourseDescription />
      </div>
      <div className="w-full lg:w-1/3">
        <CourseSidebar />
      </div>
    </div>
  );
};

export default CourseDetailPage;
