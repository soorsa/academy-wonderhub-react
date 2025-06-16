// import React from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Pill from "../Pills";
// const OngoingCourseSlider: React.FC = () => {
//   const mapper = [1, 2, 3, 4, 5];
//   const [emblaRef, embla] = useEmblaCarousel({
//     align: "start",
//     loop: false,
//     slidesToScroll: 2,
//   });
//   const [canScrollPrev, setCanScrollPrev] = React.useState(false);
//   const [canScrollNext, setCanScrollNext] = React.useState(false);
//   React.useEffect(() => {
//     if (!embla) return;
//     const updateButtons = () => {
//       setCanScrollPrev(embla.canScrollPrev());
//       setCanScrollNext(embla.canScrollNext());
//     };

//     updateButtons();
//     embla.on("select", updateButtons);
//     embla.on("reInit", updateButtons);
//   }, [embla]);

//   const scrollPrev = () => embla?.scrollPrev();
//   const scrollNext = () => embla?.scrollNext();

//   return (
//     <div className="overflow-hidden relative w-full" ref={emblaRef}>
//       <div className="flex w-full bg-wonderhub rounded-3xl p-4 gap-6">
//         {mapper.map((map, index) => (
//           <div className="flex w-full gap-4" key={index}>
//             <img src="/images/course.jpg" className="w-[40%] rounded-2xl" />
//             <div className="flex flex-col w-[60%] text-white gap-3">
//               <p className="text-sm">UI/UX Design Foundation</p>
//               <p className="text-xs line-clamp-2 text-white/50">
//                 UI/UX Design Foundation Design Foundation Design Foundation
//                 Design Foundation Design Foundation Design Foundation Design
//                 Foundation
//               </p>
//               <div className="flex items-center gap-2">
//                 <p className="text-xs text-white/50">Progress:</p>
//                 <div className="w-full h-[2px] rounded-full bg-white/20 flex items-center">
//                   <div className="w-1/3 h-[3px] rounded-full bg-white"></div>
//                 </div>
//                 <p className="text-xs text-white/50">4/12</p>
//               </div>
//               <Pill
//                 label="Continue Learning"
//                 className="!text-white !border-white !text-sm"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//       {canScrollPrev && (
//         <button
//           className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-4 rounded-full shadow-md"
//           onClick={scrollPrev}
//         >
//           <ChevronLeft size={20} />
//         </button>
//       )}
//       {canScrollNext && (
//         <button
//           className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-4 rounded-full shadow-md"
//           onClick={scrollNext}
//         >
//           <ChevronRight size={20} />
//         </button>
//       )}
//     </div>
//   );
// };
// export default OngoingCourseSlider;
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Pill from "../Pills";

const OngoingCourseSlider: React.FC = () => {
  const mapper = [1, 2, 3, 4, 5];
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    loop: false,
    slidesToScroll: 1,
  });

  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  React.useEffect(() => {
    if (!embla) return;

    const updateButtons = () => {
      setCanScrollPrev(embla.canScrollPrev());
      setCanScrollNext(embla.canScrollNext());
    };
    updateButtons();
    embla.on("init", updateButtons);
    embla.on("select", updateButtons);
    embla.on("reInit", updateButtons);

    // return () => {
    //   embla.off("init", updateButtons);
    //   embla.off("select", updateButtons);
    //   embla.off("reInit", updateButtons);
    // };
  }, [embla]);

  const scrollPrev = () => embla?.scrollPrev();
  const scrollNext = () => embla?.scrollNext();

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {" "}
          {/* Negative margin to counteract slide padding */}
          {mapper.map((map, index) => (
            <div className="pl-4 flex-[0_0_60%] min-w-0" key={index}>
              <div className="flex w-full gap-4 bg-wonderhub rounded-3xl p-4 h-full">
                <img
                  src="/images/course.jpg"
                  alt={`${map}`}
                  className="w-[40%] rounded-2xl object-cover"
                />
                <div className="flex flex-col w-[60%] text-white gap-3">
                  <p className="text-sm">UI/UX Design Foundation</p>
                  <p className="text-xs line-clamp-2 text-white/50">
                    UI/UX Design Foundation Design Foundation Design Foundation
                    Design Foundation Design Foundation Design Foundation Design
                    Foundation
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-white/50">Progress:</p>
                    <div className="w-full h-[2px] rounded-full bg-white/20 flex items-center">
                      <div className="w-1/3 h-[3px] rounded-full bg-white"></div>
                    </div>
                    <p className="text-xs text-white/50">4/12</p>
                  </div>
                  <Pill
                    label="Continue Learning"
                    className="!text-white !border-white !text-sm"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {canScrollPrev && (
        <button
          className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full shadow-md ${
            !canScrollPrev ? "opacity-50 cursor-default" : ""
          }`}
          onClick={scrollPrev}
          disabled={!canScrollPrev}
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {canScrollNext && (
        <button
          className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full shadow-md ${
            !canScrollNext ? "opacity-50 cursor-default" : ""
          }`}
          onClick={scrollNext}
          disabled={!canScrollNext}
        >
          <ChevronRight size={20} />
        </button>
      )}
    </div>
  );
};

export default OngoingCourseSlider;
