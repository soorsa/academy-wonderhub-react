import React from "react";
import type { EnrolledCourse } from "../../data/types/CourseTypes";
import { ImBooks } from "react-icons/im";
import { BsArrowRight } from "react-icons/bs";
import Pill from "../Pills";
type Props = {
  course: EnrolledCourse;
};
const MyCourseCard: React.FC<Props> = ({ course }) => {
  return (
    <div className="flex flex-col bg-white p-2 md:p-4 rounded-2xl hover:shadow-lg">
      <img
        src="/images/course.jpg"
        className="h-[150px] w-full rounded-lg"
        alt=""
      />
      <div className="flex flex-col gap-2 pt-4">
        <h3 className="line-clamp-1 text-sm font-bold">{course.title}</h3>
        <p className="text-xs line-clamp-2 md:line-clamp-3"> {course.desc} </p>
        <div className="flex justify-between w-full items-center text-xs text-gray-400">
          <p className="text-xs text-gray-400">{course.instructor}</p>
          <div className="flex">
            <span>⭐⭐⭐⭐☆</span>
            (4.5)
          </div>
        </div>
        <div className="flex justify-between w-full text-xs text-gray-600 my-2">
          <div className="flex gap-1 items-center">
            <ImBooks /> 12 Lessons
          </div>
          <div className="flex gap-1 items-center">
            {course.progress}% complete
          </div>
        </div>
        <div className="h-1 bg-wonderhub-200 rounded-full w-full">
          <div
            className="bg-wonderhub h-full rounded-full"
            style={{ width: `${course.progress}%` }}
          />
        </div>
        <Pill
          label="Continue"
          className="text-xs !py-1 w-full "
          rightIcon={<BsArrowRight />}
        />
      </div>
    </div>
  );
};

export default MyCourseCard;
