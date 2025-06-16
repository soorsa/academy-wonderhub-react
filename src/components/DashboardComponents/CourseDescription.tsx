import { CheckCircle2 } from "lucide-react";
import React from "react";

const CourseDescription: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl space-y-4">
      <div className="flex items-center gap-4">
        <img
          src="/images/course.jpg"
          alt="Mentor"
          className="rounded-full w-12 h-12"
        />
        <div>
          <p className="font-semibold">Simon Simorangkir</p>
          <p className="text-sm text-gray-500">
            Mentor • Illustrator at Google
          </p>
        </div>
      </div>

      <div>
        <h2 className="font-semibold text-lg">About This Course</h2>
        <p className="text-gray-600 text-sm">
          Unlock your creative potential with our Beginner-Level Illustrator
          Course! Are you ready to embark on a journey...
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold text-sm">What You'll Learn:</h3>
        <ul className="list-inside text-sm text-gray-600 space-y-1">
          <li className="flex gap-1 items-center">
            <CheckCircle2 className="h-4 w-4" />
            Buyer Targeting & Persona Creation
          </li>
          <li className="flex gap-1 items-center">
            <CheckCircle2 className="h-4 w-4" />
            Digital Marketing Audit
          </li>
          <li className="flex gap-1 items-center">
            <CheckCircle2 className="h-4 w-4" />
            Algorithm Overview
          </li>
          <li className="flex gap-1 items-center">
            <CheckCircle2 className="h-4 w-4" />
            Competitor Analysis
          </li>
          <li className="flex gap-1 items-center">
            <CheckCircle2 className="h-4 w-4" />
            Strategy and Planning.
          </li>
          <li className="flex gap-1 items-center">
            <CheckCircle2 className="h-4 w-4" />
            illustration design.
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-sm">This Course Suits:</h3>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          <li>
            Anyone who wants to start their career & get paid for their
            illustration design skills.
          </li>
          <li>
            This course is for beginners, newbies & amateurs in the field of
            illustration.
          </li>
          <li>For anyone that needs to add Illustrator to their portfolio.</li>
          <li>Aimed at people new to the world of illustration design.</li>
        </ul>
      </div>
    </div>
  );
};

export default CourseDescription;
