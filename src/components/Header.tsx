import { FaUser } from "react-icons/fa";
import InputField from "./InputField";
import Button from "./Button";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { BsBellFill } from "react-icons/bs";

const Header = ({ pageTitle }) => {
  const navigate = useNavigate();
  const newProperty = () => {
    navigate("/new-properties");
  };
  const goTpProfile = () => {
    navigate("/my-profile");
  };
  return (
    <div className="hidden md:flex justify-between items-center bg-white rounded-3xl p-8 mb-5 mt-2">
      {pageTitle === "Dashboard" ? (
        <div className="flex flex-col text-xl font-bold">
          Welcome back, Jasmine
        </div>
      ) : (
        <div className="text-2xl">{pageTitle}</div>
      )}
      <div className="">
        <Formik
          initialValues={{ search: "" }}
          onSubmit={(values) => {
            console.log(values.search);
          }}
        >
          <InputField
            name="search"
            type="text"
            placeholder="Search..."
            className="!w-[400px] text-adron-black"
          />
        </Formik>
      </div>
      <div className="flex items-center gap-4">
        <BsBellFill className="h-7 w-7" />
        <Button
          label="Become an Instructor"
          className="bg-adron-green text-sm px-4"
          onClick={newProperty}
        />
        <div className="p-2 bg-adron-body rounded-full" onClick={goTpProfile}>
          <FaUser className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default Header;
