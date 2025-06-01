// // src/components/Slideshow.tsx
// import React, { useEffect, useState } from "react";

// const slides = [
//   {
//     title: "Sign Up for Free",
//     text: "Fast & Easy Sign-up ",
//     image: "/images/signup.svg",
//   },
//   {
//     title: "Start Learning",
//     text: "Choose from a wide vairaity of courses",
//     image: "/images/course-app.svg",
//   },
//   {
//     title: "Progress in Career",
//     text: "Improve and add to your skills",
//     image: "/images/Career-progress.svg",
//   },
// ];

// const Slideshow = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 4000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="relative w-full h-full overflow-hidden">
//       {slides.map((s, index) => (
//         <>
//           <div
//             className={`absolute top-0 mx-auto w-full text-center flex text-4xl font-adron-ultra text-wonderhub  ${
//               index === current ? "opacity-100 z-10" : "opacity-0 z-0"
//             }`}
//           >
//             {s.title}
//           </div>
//           <img
//             key={index}
//             src={s.image}
//             alt={`Slide ${index}`}
//             className={`
//             absolute inset-0 w-[70%] m-auto h-[70%] object-cover transition-opacity duration-1000
//             ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}
//           `}
//           />
//           <p
//             className={`text-2xl text-wonderhub  ${
//               index === current ? "opacity-100 z-10" : "opacity-0 z-0"
//             }`}
//           >
//             {s.text}
//           </p>
//         </>
//       ))}
//     </div>
//   );
// };

// export default Slideshow;

import React, { useEffect, useState } from "react";

const slides = [
  {
    title: "Join for Free, Learn for Life",
    text: "Create an account in seconds and unlock unlimited learning opportunities.",
    image: "/images/signup.svg",
  },
  {
    title: "Discover Premium Courses",
    text: "Access top-tier courses curated by industry experts.",
    image: "/images/course-app.svg",
  },
  {
    title: "Advance Your Career",
    text: "Acquire new skills, gain confidence, and achieve your career goals.",
    image: "/images/Career-progress.svg",
  },
];

const Slideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {slides.map((s, index) => (
        <div
          key={index}
          className={`absolute w-full h-full flex flex-col items-center justify-center transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Title - Top Center */}
          <div className="absolute top-8 w-full text-center text-4xl font-extrabold text-wonderhub">
            {s.title}
          </div>

          {/* Image - Center */}
          <img
            src={s.image}
            alt={`Slide ${index}`}
            className="w-[60%] h-[60%] object-contain"
          />

          {/* Text - Bottom Center */}
          <p className="absolute bottom-8 w-full text-center text-2xl font-adron-thin text-wonderhub px-20">
            {s.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
