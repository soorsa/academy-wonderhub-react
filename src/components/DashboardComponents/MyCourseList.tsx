import React from "react";
import NoPropertyFound from "../NoPropertyFound";
import type { EnrolledCourse } from "../../data/types/CourseTypes";
import CourseCard from "./CourseCard";
import MyCourseCard from "./MyCourseCard";

type Props = {
  courses: EnrolledCourse[];
};
const MyCourseList: React.FC<Props> = ({ courses }) => {
  if (courses.length <= 0) return <NoPropertyFound />;
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-8">
      {courses.map((course) => (
        <MyCourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default MyCourseList;
