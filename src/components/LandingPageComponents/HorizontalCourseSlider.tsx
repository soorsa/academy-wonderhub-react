import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CourseCardProps {
  title: string;
  instructor: string;
  rating: number;
  price: number;
  originalPrice: number;
  image: string;
  isBestseller?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  instructor,
  rating,
  price,
  originalPrice,
  image,
  isBestseller,
}) => {
  return (
    <div className="min-w-[200px] max-w-[200px] md:min-w-[300px] md:max-w-[300px] bg-white border border-gray-200 rounded-3xl p-4 shadow">
      <img
        src={image}
        alt={title}
        className="w-full h-24 md:h-40 object-cover rounded-2xl mb-2 md:mb-3"
      />
      <h3 className="text-xs md:text-sm font-semibold mb-1">{title}</h3>
      <p className="text-[10px] md:text-xs text-gray-500 mb-1 md:mb-2">
        {instructor}
      </p>
      <div className="flex items-center mb-1 md:mb-2">
        <span className="text-yellow-500 mr-1">⭐</span>
        <span className="text-xs">{rating.toFixed(1)}</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="md:text-lg font-bold">₦{price.toLocaleString()}</span>
        <span className="text-[10px] md:text-xs line-through text-gray-400">
          ₦{originalPrice.toLocaleString()}
        </span>
      </div>
      {isBestseller && (
        <div className="bg-green-100 text-green-600 text-[10px] md:text-xs py-1 px-2 mt-1 md:mt-2 rounded-full inline-block">
          Bestseller
        </div>
      )}
    </div>
  );
};

const HorizontalCourseSlider: React.FC = () => {
  const [emblaRef, embla] = useEmblaCarousel({
    align: "start",
    loop: false,
    slidesToScroll: 2,
  });
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const courses = [
    {
      title: "The Complete AI Guide",
      instructor: "Julian Melanson",
      rating: 4.5,
      price: 7900,
      originalPrice: 48900,
      image: "/images/course.jpg",
      isBestseller: true,
    },
    {
      title: "AI-Powered Copywriting",
      instructor: "Tomáš Morávek",
      rating: 4.2,
      price: 7900,
      originalPrice: 57900,
      image: "/images/course.jpg",
    },
    {
      title: "AI Marketing Assistants",
      instructor: "Anton Voroniuk",
      rating: 4.5,
      price: 7900,
      originalPrice: 14900,
      image: "/images/course.jpg",
    },
    {
      title: "Social Media Presence",
      instructor: "Anton Voroniuk",
      rating: 4.6,
      price: 7900,
      originalPrice: 14900,
      image: "/images/course.jpg",
    },
    {
      title: "Social Media Presence",
      instructor: "Anton Voroniuk",
      rating: 4.6,
      price: 7900,
      originalPrice: 14900,
      image: "/images/course.jpg",
    },
    {
      title: "Social Media Presence",
      instructor: "Anton Voroniuk",
      rating: 4.6,
      price: 7900,
      originalPrice: 14900,
      image: "/images/course.jpg",
    },
    {
      title: "Social Media Presence",
      instructor: "Anton Voroniuk",
      rating: 4.6,
      price: 7900,
      originalPrice: 14900,
      image: "/images/course.jpg",
    },
    {
      title: "Social Media Presence",
      instructor: "Anton Voroniuk",
      rating: 4.6,
      price: 7900,
      originalPrice: 14900,
      image: "/images/course.jpg",
    },
    {
      title: "Social Media Presence",
      instructor: "Anton Voroniuk",
      rating: 4.6,
      price: 7900,
      originalPrice: 14900,
      image: "/images/course.jpg",
    },
    {
      title: "Social Media Presence",
      instructor: "Anton Voroniuk",
      rating: 4.6,
      price: 7900,
      originalPrice: 14900,
      image: "/images/course.jpg",
    },
  ];

  React.useEffect(() => {
    if (!embla) return;
    const updateButtons = () => {
      setCanScrollPrev(embla.canScrollPrev());
      setCanScrollNext(embla.canScrollNext());
    };

    updateButtons();
    embla.on("select", updateButtons);
    embla.on("reInit", updateButtons);
  }, [embla]);

  const scrollPrev = () => embla?.scrollPrev();
  const scrollNext = () => embla?.scrollNext();

  return (
    <div className="relative w-full mx-auto p-4">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex space-x-4 p-4">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>

      {canScrollPrev && (
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-4 rounded-full shadow-md"
          onClick={scrollPrev}
        >
          <ChevronLeft size={20} />
        </button>
      )}
      {canScrollNext && (
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-4 rounded-full shadow-md"
          onClick={scrollNext}
        >
          <ChevronRight size={20} />
        </button>
      )}
    </div>
  );
};

export default HorizontalCourseSlider;
