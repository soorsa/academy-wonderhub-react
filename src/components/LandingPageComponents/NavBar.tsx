import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // or use any icon you prefer
import clsx from "clsx";
import { IoCaretDown } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import Button from "../Button";
import { useUserStore } from "../../zustand/UserStore";
import { GiChart } from "react-icons/gi";
import { FaSchool } from "react-icons/fa";
import { BiCog, BiLogOut } from "react-icons/bi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, isLoggedIn } = useUserStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Dropdown menu links
  const courses = [
    { name: "Pyhton", total_courses: 10 },
    { name: "JavaScript", total_courses: 32 },
    { name: "Java", total_courses: 2 },
    { name: "C#", total_courses: 3 },
    { name: "C++", total_courses: 1 },
  ];
  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Courses",
      href: "/courses",
      dropdown: true,
      // dropdownLinks: dropdownLinks,
      dropdownLinks: courses?.map((course) => ({
        name: course.name,
        href: `/courses?course=${course.name}`,
        total_courses: course.total_courses,
      })),
    },
    { name: "Our Instructors", href: "/our-instructors" },
    { name: "Teach With Us", href: "/become-an-instructor", isPop: true },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-white shadow" : "bg-white"
      }`}
    >
      <nav className="w-full px-4 md:px-0 md:max-w-[1240px] mx-auto flex justify-between items-center pt-4 pb-1">
        <div className="flex items-center space-x-2">
          <img
            // src="/logo.svg"
            src="/images/logo.png"
            alt="Adron Homes Logo"
            width={160}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 text-sm relative">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={clsx(
                "relative",
                link.dropdown && "group",
                link.isPop && "group"
              )}
            >
              <Link
                to={link.href}
                className={`transition-colors duration-300 ${
                  location.pathname === link.href
                    ? "text-purple-950 font-bold"
                    : " hover:text-purple-950"
                } ${link.dropdown ? "flex items-center" : ""}`}
              >
                {link.name}
                {link.dropdown && <IoCaretDown className="ml-1" />}
              </Link>

              {/* Dropdown on hover */}
              {link.dropdown && (
                <div className="absolute top-full left-0 mt-5 w-[200px] p-4 bg-white shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-auto">
                  <ul className="py-2">
                    {link.dropdownLinks?.map((drop) => (
                      <li key={drop.name}>
                        <Link
                          to={drop.href}
                          className="flex rounded-lg justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {drop.name}
                          <span className="bg-wonderhub text-white rounded-full px-2 text-[10px]">
                            {" "}
                            {drop.total_courses}{" "}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {/* Dropdown on hover */}
              {link.isPop && (
                <div className="absolute top-full left-0 mt-5 w-[360px] p-4 bg-white shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-auto">
                  <div className="flex flex-col gap-4">
                    <p className="font-bold text-lg text-center">
                      Turn what tou know into passive income and help grow
                      skills of millions of students in Africa.
                    </p>
                    <Button label="Become an Instructor" />
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        {isLoggedIn ? (
          <Link
            to="/dashboard"
            className="hidden relative group md:flex gap-1 items-center border border-body-gray pr-5 rounded-l-3xl rounded-r-lg"
          >
            <img
              src="/images/course.jpg"
              className="h-7 w-7 rounded-full"
              alt=""
            />
            <div className="text-xs">{user?.first_name || "Jasmine"}</div>
            <IoCaretDown className="ml-1" />
            <div className="absolute top-full right-0 mt-5 w-[200px] p-4 bg-white shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-auto">
              <div className=" flex flex-col divide divide-y-1 text-xs space-y-0 divide-gray-200">
                <Link
                  to="/dashboard"
                  className="py-2 flex items-center gap-1 hover:bg-gray-100/50"
                >
                  <GiChart className="h-4 w-4 text-black" />
                  Dashboard
                </Link>
                <Link
                  to="/dashboard/my-courses"
                  className="py-2 flex items-center gap-1 hover:bg-gray-100/50"
                >
                  <FaSchool />
                  My Courses
                </Link>
                <Link
                  to="/dashboard/profile"
                  className="py-2 flex items-center gap-1 hover:bg-gray-100/50"
                >
                  <BiCog />
                  Settings
                </Link>
                <Link
                  to="/dashboard"
                  className="py-2 flex items-center gap-1 hover:bg-gray-100/50"
                >
                  <BiLogOut />
                  Logout
                </Link>
              </div>
            </div>
          </Link>
        ) : (
          <div className="hidden md:flex space-x-2">
            <button className="text-gray-800 text-sm px-4 py-2">
              <Link to="/auth" className="w-full">
                Login
              </Link>
            </button>
            <button className="bg-black text-white text-sm px-4 py-2 rounded-full">
              <Link to="/auth/register" className="w-full">
                Sign up
              </Link>
            </button>
          </div>
        )}

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Overlay + Mobile Menu Drawer */}
      <div
        className={clsx(
          "fixed inset-0 z-[60] transition-transform duration-300 md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
          "flex"
        )}
      >
        {/* Transparent dark overlay */}
        <div
          className="flex-1 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Side drawer menu */}
        <div className="w-64 bg-white h-full p-6 shadow-lg">
          <div className="flex justify-end mb-6">
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <ul className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base block ${
                    location.pathname === link.href
                      ? "text-adron-green font-semibold"
                      : "text-gray-700 hover:text-adron-green"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Socials and Buttons */}
          <div className="mt-10 flex gap-4 text-gray-600 text-xl">
            <i className="ri-facebook-fill"></i>
            <i className="ri-twitter-fill"></i>
            <i className="ri-tiktok-fill"></i>
            <i className="ri-instagram-fill"></i>
          </div>

          <div className="mt-8 space-y-3">
            <button className="w-full bg-black text-white py-2 rounded-full">
              <Link to="/auth" className="w-full">
                Sign up
              </Link>
            </button>
            <button className="w-full text-center text-gray-700">
              <Link to="/auth/register" className="w-full ">
                Login
              </Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
