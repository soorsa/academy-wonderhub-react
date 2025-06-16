import React from "react";
import { Tv } from "lucide-react";
import { formatPrice } from "../../utils/utilities";
import Button from "../Button";
import { IoPeopleOutline, IoSchoolOutline } from "react-icons/io5";
import { BiAward } from "react-icons/bi";

const lessons = [
  { title: "Introduction", duration: "20 min" },
  { title: "Mastering Tools", duration: "1 hour 20 min" },
  { title: "Mastering Adobe Illustrator", duration: "2 hour 10 min" },
  { title: "Create Simple Shape", duration: "40 min" },
  { title: "Typography", duration: "40 min" },
  { title: "Mastering Pen Tool", duration: "1 hour" },
  { title: "Mastering Pro Create", duration: "2 hour" },
];

const CourseSidebar: React.FC = () => {
  return (
    <aside className="space-y-6">
      <div className="bg-white rounded-xl p-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-1">
          Buy this Course
        </h3>
        <p className="text-xs text-gray-600 mt-2">
          Great job! You’re on the path to becoming a certified Mastering
          Illustrator.
        </p>
        <div className="flex justify-between items-center mt-5">
          <div className="">{formatPrice(25000)}</div>
          <Button label="Buy Now" className="!w-fit px-6 text-sm" />
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 space-y-2">
        <h3 className="text-sm font-semibold">About the Instructor</h3>
        <div className="flex items-center gap-4 my-4">
          <img
            src="/images/course.jpg"
            alt="Mentor"
            className="rounded-full w-12 h-12"
          />
          <div>
            <p className="font-semibold text-sm">Simon Simorangkir</p>
            <p className="text-xs">Mentor • Illustrator at Google</p>
          </div>
        </div>
        <p className="text-xs text-gray-600">
          Unlock your creative potential with our Beginner-Level Illustrator
          Course! Are you ready to embark on a journey...
        </p>
        <div className="flex divide divide-x-1 divide-wonderhub-200 mt-5">
          <div className="flex gap-1 px-2 text-xs text-gray-600">
            <IoSchoolOutline /> 12 courses
          </div>
          <div className="flex gap-1 px-2 text-xs text-gray-600">
            <IoPeopleOutline /> 134 students
          </div>
          <div className="flex gap-1 px-2 text-xs text-gray-600">
            <BiAward /> 3 Awards
          </div>
        </div>
      </div>

      <div className="p-6 bg-white rounded-xl">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-sm font-semibold text-gray-700">
            Course Outline
          </h3>
          <p className="text-xs text-gray-500 mt-2">{`${lessons.length} Lessons`}</p>
        </div>
        <ul className="space-y-2">
          {lessons.map((lesson, idx) => (
            <li
              key={idx}
              className={`flex items-center justify-between p-3 rounded-lg text-sm hover:bg-gray-100 text-gray-700
`}
            >
              <div className="flex items-center gap-2">
                <Tv className="w-4 h-4 text-gray-500" />
                <div className="flex flex-col">
                  <span className="text-xs line-clamp-1">{lesson.title}</span>
                  <span className="text-xs text-gray-500">
                    {lesson.duration}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default CourseSidebar;
