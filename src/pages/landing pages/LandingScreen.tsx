import { GrApps } from "react-icons/gr";
import HeroBanner from "../../components/LandingPageComponents/HeroBanner";
import PopularCoursesComponent from "../../components/LandingPageComponents/PopularCategoriesHero";
import HorizontalCourseSlider from "../../components/LandingPageComponents/HorizontalCourseSlider";
import { BsArrowRight } from "react-icons/bs";

const categories = [
  {
    name: "Programming",
    count: 200,
  },
  {
    name: "Animation",
    count: 40,
  },
  {
    name: "Music",
    count: 20,
  },
  {
    name: "Art",
    count: 7,
  },
  {
    name: "Digital Marketing",
    count: 26,
  },
];
const LandingScreen = () => {
  return (
    <div className="flex flex-col w-full space-y-6">
      <div className="bg-white w-full px-5">
        <HeroBanner />
      </div>
      <PopularCoursesComponent />
      <div className=" p-6 space-y-6">
        <h4 className="text-4xl font-bold text-center">Top Categories</h4>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 w-full md:w-[80%] mx-auto">
          {categories.map((category) => (
            <div className="flex gap-2 bg-purple-200 text-black px-2 md:px-6 py-4 rounded-xl hover:bg-wonderhub hover:text-white">
              <GrApps className="h-5 w-5 hidden md:block" />
              <div className="flex flex-col items-start">
                <p className="text-xs md:text-sm line-clamp-1">
                  {category.name}
                </p>
                <p className="text-xs md:text-md">{category.count} courses</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-2xl w-full mx-auto py-20">
        <div className="flex flex-col w-[85%] mx-auto">
          <div className="flex justify-between">
            <h2 className="font-bold text-2xl p-4">Recomended for you</h2>
            <div className="flex items-center hover:underline text-sm">
              {" "}
              <a href="http://">
                See more
              </a> <BsArrowRight className="ml-2" />{" "}
            </div>
          </div>

          <HorizontalCourseSlider />
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
