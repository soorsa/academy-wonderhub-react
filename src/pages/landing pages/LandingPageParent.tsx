import { Outlet } from "react-router-dom";
import Navbar from "../../components/LandingPageComponents/NavBar";

const LandingPageIndex = () => {
  return (
    <div className="fixed inset-0 z-50 flex h-screen w-screen">
      {/* Main Content */}
      <main className="md:pt-0 flex-1 overflow-y-auto md:mb-0 md:py-5 scrollbar-hide">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
};

export default LandingPageIndex;
