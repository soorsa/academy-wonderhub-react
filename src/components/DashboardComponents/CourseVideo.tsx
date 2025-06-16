import React from "react";

const CourseVideo: React.FC = () => {
  return (
    <div className="w-full aspect-video bg-black rounded-xl overflow-hidden">
      <video controls className="w-full h-full object-cover">
        <source src="/sample-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default CourseVideo;
