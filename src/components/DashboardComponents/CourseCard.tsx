import React from "react";
import type { EnrolledCourse } from "../../data/types/CourseTypes";
import { FaUsers } from "react-icons/fa";
import Button from "../Button";
import { ImBooks } from "react-icons/im";
import { formatPrice } from "../../utils/utilities";
import { IoHeartOutline } from "react-icons/io5";
type Props = {
  course: EnrolledCourse;
};
const CourseCard: React.FC<Props> = ({ course }) => {
  return (
    <div className="relative flex flex-col bg-white p-2 md:p-4 rounded-2xl hover:shadow-lg">
      <button
        type="button"
        className="group bg-black/50 rounded-full absolute top-5 right-5 p-2 text-white/50 hover:text-white"
      >
        <IoHeartOutline className="" />
        <div className="absolute z-50 hidden -top-8 right-0 w-[100px] group-hover:block px-3 py-2 text-[8px] font-medium bg-gray-900/50 duration-300 rounded-lg shadow-xs">
          Add to Favourites
        </div>
      </button>
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
            <FaUsers /> 30 students
          </div>
        </div>
        <Button
          label="Enroll"
          className="text-sm"
          rightIcon={
            <span className="text-xs ml-5 md:ml-10">
              {formatPrice(course.price)}
            </span>
          }
        />
      </div>
    </div>
  );
};

export default CourseCard;
