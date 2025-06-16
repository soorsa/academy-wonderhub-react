import React from "react";
import { Play, Pause, CheckCircle } from "lucide-react";

const lessons = [
  { title: "Introduction", duration: "20 min", completed: true },
  { title: "Mastering Tools", duration: "1 hour 20 min", active: true },
  { title: "Mastering Adobe Illustrator", duration: "2 hour 10 min" },
  { title: "Create Simple Shape", duration: "40 min" },
  { title: "Typography", duration: "40 min" },
  { title: "Mastering Pen Tool", duration: "1 hour" },
  { title: "Mastering Pro Create", duration: "2 hour" },
];

const CourseLessonSidebar: React.FC = () => {
  return (
    <aside className="bg-white p-6 rounded-xl space-y-6 w-full ">
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-1">
          Your Study Progress
        </h3>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
          <div className="bg-purple-500 h-2 rounded-full w-[4%]" />
        </div>
        <p className="text-xs text-gray-500">4%</p>
        <p className="text-xs text-gray-600 mt-2">
          Great job! You’re on the path to becoming a certified Mastering
          Illustrator.
        </p>
      </div>

      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-sm font-semibold text-gray-700">
            Course Completion
          </h3>
          <p className="text-xs text-gray-500 mt-2">{`1 / ${lessons.length}`}</p>
        </div>
        <ul className="space-y-2">
          {lessons.map((lesson, idx) => (
            <li
              key={idx}
              className={`flex items-center justify-between p-3 rounded-lg text-sm ${
                lesson.completed
                  ? "bg-green-50 text-green-700"
                  : lesson.active
                  ? "bg-purple-100 text-purple-700"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              <div className="flex items-center gap-2">
                {lesson.completed ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : lesson.active ? (
                  <Pause className="w-4 h-4 text-purple-700" />
                ) : (
                  <Play className="w-4 h-4 text-gray-500" />
                )}
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

export default CourseLessonSidebar;
