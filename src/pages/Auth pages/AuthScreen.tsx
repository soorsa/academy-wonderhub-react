import { Outlet } from "react-router-dom";
import AuthNavbar from "../../components/AuthComponents/AuthNav";
import Slideshow from "../../components/AuthComponents/NewShildeshow";
import { useOnboardingStore } from "../../zustand/OnboardingStore";
import { useUserStore } from "../../zustand/UserStore";
import ForgotPassword from "./ForgotPassword";
import Login from "../Auth pages/Login";
import OTPScreen from "../Auth pages/OTPScreen";
import ResetPassword from "./ResetPassword";
import SignUp from "../Auth pages/SignUp";

const AuthScreen = () => {
  const { step } = useOnboardingStore();
  const stepContainer = () => {
    switch (step) {
      case "signup":
        return <SignUp />;
      case "login":
        return <Login />;
      case "verify OTP":
        return <OTPScreen />;
      // case "signup completed":
      //   return <SignupComplete />;
      case "forgot password":
        return <ForgotPassword />;
      case "reset password":
        return <ResetPassword />;
      // case "password reset success":
      //   return <AddServices />;
      // case "signup completed":
      //   return <AddItems />;
      // case "onboarding complete":
      //   return <OnboardingComplete />;
      default:
        return <Login />;
    }
  };

  const handleReset = () => {
    useUserStore.getState().reset(); // Reset user store
    useOnboardingStore.getState().reset(); // Reset onboarding store

    localStorage.removeItem("user-state"); // Clear persisted user state
    localStorage.removeItem("onboarding-state"); // Clear persisted onboarding state

    window.location.reload(); // Optional: Refresh page to clear UI state
  };
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 fixed w-full">
      {/* Promo Section */}
      <div
        className="relative hidden md:block text-white h-screen "
        onClick={handleReset}
      >
        <Slideshow />
      </div>

      {/* Signup Form Section */}
      <div className="bg-white flex flex-col max-h-[100vh] p-4 justify-between overflow-y-scroll">
        <div className="text-center mt-5">
          <img
            src="/images/logo.png"
            alt="Adron Logo"
            width={120}
            height={50}
            className="mx-auto"
          />
          <h1 className="text-3xl font-medium mt-4">Welcome to Wonder HUB</h1>
        </div>
        <div className="px-0 md:px-24 py-4">
          <Outlet />
        </div>
        {/* <div className="px-0 md:px-24 py-4">{stepContainer()}</div> */}
        <div className="w-full">
          <AuthNavbar />
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
