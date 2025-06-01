import React from "react";
import CourseList from "../../components/DashboardComponents/CourseList";
import { enrolledCourses } from "../../data/courses";

const FavouritePage: React.FC = () => {
  return (
    <div>
      <div className="text-2xl text-center my-20">My Saved Courses</div>
      <CourseList courses={enrolledCourses} />
    </div>
  );
};

export default FavouritePage;
