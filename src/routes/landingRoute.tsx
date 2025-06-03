import { Outlet } from "react-router-dom";

const LandingRoutes = () => {
  // Redirect UNAUTHENTICATED users to login
  return <Outlet />;
};

export default LandingRoutes;
