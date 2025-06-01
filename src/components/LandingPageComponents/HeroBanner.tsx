import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../Button";

const HeroBanner = () => {
  return (
    <div className="h-[70vh] w-full md:w-[75%] mx-auto flex flex-col md:flex-row justify-center">
      <div className="flex flex-col justify-center gap-10 w-full md:w-1/2">
        <div className="text-4xl font-bold w-full md:w-[70%]">
          Find the right instructor for you
        </div>
        <div className="">
          Hello, Dribbble Community! This is a landing page exploration for
          Online Education Course. Feel free to give feedback. Don't forget to
          press "L" for like.
        </div>
        <Button
          label="Get Started"
          className="!w-fit px-6"
          rightIcon={<FaArrowRight />}
        />
        <div className="grid grid-cols-3 w-fit gap-4">
          <div className="flex flex-col">
            <p className="font-adron-ultra">80k+</p>
            <p className="text-xs">Students</p>
          </div>
          <div className="flex flex-col">
            <p className="font-adron-ultra">+20k</p>
            <p className="text-xs">Courses</p>
          </div>
          <div className="flex flex-col">
            <p className="font-adron-ultra">10k+</p>
            <p className="text-xs">Instructors</p>
          </div>
        </div>
      </div>
      <div className="h-[70vh] w-1/2 hidden md:block">
        <img src="/images/Webinar-amico.svg" alt="" className="h-full w-full" />
      </div>
    </div>
  );
};

export default HeroBanner;
