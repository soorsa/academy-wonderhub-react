import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "../components/Loader";
// import AuthScreen from "../pages/AuthScreen";
import ProtectedRoutes from "./protectedRoutes";
import HomeScreen from "../pages/Dashboard pages/HomeScreen";
import Toast from "../components/Toast";
import Modal from "../components/Modal2";
import AuthRoutes from "./authRoutes";
import LandingPageIndex from "../pages/landing pages/LandingPageParent";
import CoursesPage from "../pages/landing pages/CoursesPage";
import LandingRoutes from "./landingRoute";
import LandingScreen from "../pages/landing pages/LandingScreen";
import ProfileSettings from "../pages/Dashboard pages/AccountSettings";
import AuthScreen from "../pages/Auth pages/AuthScreen";
import Login from "../pages/Auth pages/Login";
import SignUp from "../pages/Auth pages/SignUp";
import TransactionsPage from "../pages/Dashboard pages/TransactionScreen";
import CoursePage from "../pages/Dashboard pages/CoursesPage";
import MyCoursePage from "../pages/Dashboard pages/MyCoursePage";
import FavouritePage from "../pages/Dashboard pages/FavouritePage";

const DashboardScreen = lazy(
  () => import("../pages/Dashboard pages/DashboardScreen")
);

const AllRoutes = () => {
  // const { message, type, hideToast } = useToastStore();
  // const { hasCompletedOnboarding } = useOnboardingStore();
  // const { isLoggedIn } = useUserStore();

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader className="h-[100px] w-[100px]" />}>
          <Routes>
            <Route path="/" element={<LandingRoutes />}>
              <Route element={<LandingPageIndex />}>
                <Route index element={<LandingScreen />} />
                <Route path="courses" element={<CoursesPage />} />
              </Route>
            </Route>

            {/* Protected Routes - Dashboard */}
            <Route path="/dashboard" element={<ProtectedRoutes />}>
              <Route element={<DashboardScreen />}>
                <Route index element={<HomeScreen />} />
                <Route
                  path="/dashboard/transactions"
                  element={<TransactionsPage />}
                />
                <Route path="/dashboard/courses" element={<CoursePage />} />

                <Route
                  path="/dashboard/my-courses"
                  element={<MyCoursePage />}
                />
                <Route
                  path="/dashboard/my-favourites"
                  element={<FavouritePage />}
                />
                <Route
                  path="/dashboard/settings"
                  element={<ProfileSettings />}
                />
              </Route>
            </Route>

            {/* Login Route */}
            <Route path="/auth" element={<AuthRoutes />}>
              <Route element={<AuthScreen />}>
                <Route index element={<Login />} />
                <Route path="/auth/register" element={<SignUp />} />
              </Route>
            </Route>

            {/* Catch-All Redirect */}
            {/* <Route path="*" element={<Navigate to="/auth" />} /> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Toast />
      <Modal />
    </>
  );
};

export default AllRoutes;
