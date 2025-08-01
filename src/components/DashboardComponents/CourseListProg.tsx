import React from "react";
import { useNavigate } from "react-router-dom";
import ApiErrorBlock from "../ApiErrorBlock";
import NotFound from "../NotFound";
import type { EnrolledCourse } from "../../data/types/CourseTypes";
import Loader from "../Loader";
import { BsArrowRight } from "react-icons/bs";
import Pill from "../Pills";
// types.ts
type Props = {
  courses: EnrolledCourse[];
  listName: string;
  isLoading: boolean;
  isError: boolean;
};

const CourseListProg: React.FC<Props> = ({
  courses,
  isError,
  isLoading,
  listName,
}) => {
  const navigate = useNavigate();

  const renderList = () => {
    return (
      <ul className="space-y-2">
        {courses.map((course) => (
          <li
            onClick={() => navigate(`course/enrolled/${course.id}`)}
            key={course.id}
            className={`p-4 cursor-pointer rounded-3xl even:bg-gray-100 flex justify-between items-center gap-2`}
          >
            <div className="w-[75%] flex gap-2">
              <img
                src="/images/course.jpg"
                alt=""
                className="rounded-lg h-full w-[25%]"
              />
              <div className="flex flex-col gap-1 py-1">
                <p className="font-semibold text-gray-700 text-xs md:text-sm line-clamp-1">
                  {course.title}
                </p>
                <p className="text-[11px] text-gray-500 line-clamp-1">
                  {" "}
                  {course.desc}
                </p>
              </div>
            </div>
            <div className="text-right w-[25%] space-y-2">
              <div className="h-1 bg-wonderhub-200 rounded-full w-full">
                <div
                  className="bg-wonderhub h-full rounded-full"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
              <Pill
                label="Continue"
                className="text-xs !py-1 w-full "
                onClick={() => navigate(`course/enrolled/${course.id}`)}
                rightIcon={<BsArrowRight />}
              />
            </div>
          </li>
        ))}
      </ul>
    );
  };

  const renderContent = () => {
    if (isLoading) {
      return <Loader />;
    }

    if (isError) {
      return (
        <div className="text-center py-4">
          <ApiErrorBlock />
        </div>
      );
    }

    if (courses.length === 0) {
      return (
        <div className="text-center py-4">
          <NotFound text="No Courses Found." />
        </div>
      );
    }

    return renderList();
  };

  return (
    <div className="bg-white p-6 rounded-3xl w-full">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-lg ">{listName}</h4>
        <button className="text-xs flex items-center gap-2 px-4 py-1.5 border rounded-full border-gray-300 text-gray-600 hover:bg-gray-100">
          See all <BsArrowRight />
        </button>
      </div>

      {/* LIST */}
      {renderContent()}
    </div>
  );
};

export default CourseListProg;
