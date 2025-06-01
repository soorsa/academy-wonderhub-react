import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../zustand/UserStore";

const LandingRoutes = () => {
  const { isLoggedIn } = useUserStore();

  // Redirect UNAUTHENTICATED users to login
  return <Outlet />;
};

export default LandingRoutes;
