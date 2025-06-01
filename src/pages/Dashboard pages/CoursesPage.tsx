import React from "react";
import CourseList from "../../components/DashboardComponents/CourseList";
import { enrolledCourses } from "../../data/courses";

const CoursePage: React.FC = () => {
  return (
    <div>
      <div className="text-2xl text-center my-20">
        Explore wide range of courses
      </div>
      <CourseList courses={enrolledCourses} />
    </div>
  );
};

export default CoursePage;
