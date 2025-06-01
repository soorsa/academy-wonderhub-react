import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../zustand/UserStore";

const AuthRoutes = () => {
  const { isLoggedIn } = useUserStore();

  return !isLoggedIn ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

export default AuthRoutes;
