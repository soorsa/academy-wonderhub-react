import { Formik, Form } from "formik";
import * as Yup from "yup";
// import { Switch } from "@headlessui/react"; // optional for toggle UI
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import Confirmation from "../../components/Confirmation";
import { useModalStore } from "../../zustand/useModalStore";
import CourseListProg from "../../components/DashboardComponents/CourseListProg";
import { enrolledCourses } from "../../data/courses";

const ProfileSettings = () => {
  const courses = enrolledCourses.slice(4);
  const { openModal } = useModalStore();
  const initialValues = {
    firstName: "Mika",
    lastName: "Edmoud-Miles",
    email: "Simonbill99@yahoo.com",
    phone: "+23490-879-9098",
    address: "576, Bay Bay Area, Code 53, Alina Street, Ik98, Lagos",
    password: "********",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Full Name is required"),
    lastName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    address: Yup.string().required("Address is required"),
  });

  return (
    <div className="mx-auto rounded-lg">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Updated values:", values);
        }}
      >
        {() => (
          <div className="grid grid-cols-2 gap-4">
            <Form className="space-y-6">
              {/* Profile Picture */}
              <div className="bg-white rounded-3xl p-10 space-y-6">
                <div className="flex justify-center items-center gap-4">
                  <img
                    src="/images/course.jpg"
                    alt="Profile"
                    className="w-44 h-44 rounded-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="">
                    <label className="block text-gray-600 font-medium">
                      First Name
                    </label>
                    <InputField
                      name="firstName"
                      placeholder={initialValues.firstName}
                    />
                  </div>
                  <div className="">
                    <label className="block text-gray-600 font-medium">
                      Last Name
                    </label>
                    <InputField
                      name="lastName"
                      placeholder={initialValues.lastName}
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-600 text-sm">Email</label>
                    <InputField
                      name="email"
                      placeholder={initialValues.email}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 text-sm">Phone</label>
                    <InputField
                      name="phone"
                      placeholder={initialValues.phone}
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-gray-600 text-sm">Address</label>
                  <InputField
                    name="address"
                    placeholder={initialValues.address}
                  />
                </div>
                {/* Save Button */}
                <div className="text-right">
                  <Button
                    label="Save Changes"
                    className="!bg-black !w-fit px-4 text-xs"
                  />
                </div>
              </div>

              {/* Password Section */}
              <div className="flex flex-col gap-1 bg-white rounded-3xl p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="">
                    <label>New Password</label>
                    <InputField name="password" type="password" className="" />
                  </div>
                  <div className="">
                    <label>Confirm Password</label>

                    <InputField name="password" type="password" className="" />
                  </div>
                </div>
                <div className="text-right mt-3">
                  <Button
                    label="Change Password"
                    className="!bg-black text-xs !w-fit px-4 py-2"
                    onClick={() => openModal(<Confirmation />)}
                  />
                </div>
              </div>
            </Form>
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-2">
                <div className="flex flex-col p-6 rounded-3xl bg-white">
                  <div className="text-gray-400 text-xs">Completed</div>
                  <h3 className="font-semibold">3 Courses</h3>
                </div>
                <div className="flex flex-col p-6 rounded-3xl bg-white">
                  <div className="text-gray-400 text-xs">in Progress</div>
                  <h3 className="font-semibold">5 Courses</h3>
                </div>
                <div className="flex flex-col p-6 rounded-3xl bg-white">
                  <div className="text-gray-400 text-xs">Watch Later</div>
                  <h3 className="font-semibold">2 Courses</h3>
                </div>
              </div>
              <CourseListProg
                courses={courses}
                listName="Continue Learning"
                isError={false}
                isLoading={false}
              />
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default ProfileSettings;
