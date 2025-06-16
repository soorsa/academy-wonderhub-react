import React from "react";

const CourseDetailBlock: React.FC = () => {
  return (
    <div className="w-full aspect-video bg-black rounded-xl overflow-hidden relative">
      <img src="/images/course.jpg" alt="" className="w-full h-full" />
      <div className="bg-black/50 absolute inset-0"></div>
      <div className="absolute z-50 top-25 left-3 space-y-7 text-white">
        <div className="flex items-center gap-4">
          <img
            src="/images/course.jpg"
            alt="Mentor"
            className="rounded-full w-12 h-12"
          />
          <div>
            <p className="font-semibold">Simon Simorangkir</p>
            <p className="text-sm">Mentor • Illustrator at Google</p>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-lg">About This Course</h2>
          <p className="text-sm">
            Unlock your creative potential with our Beginner-Level Illustrator
            Course! Are you ready to embark on a journey...
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailBlock;
