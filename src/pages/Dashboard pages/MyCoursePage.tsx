import React from "react";
import { enrolledCourses } from "../../data/courses";
import MyCourseList from "../../components/DashboardComponents/MyCourseList";

const MyCoursePage: React.FC = () => {
  return (
    <div>
      <div className="text-2xl text-center my-20">My Courses</div>
      <MyCourseList courses={enrolledCourses} />
    </div>
  );
};

export default MyCoursePage;
