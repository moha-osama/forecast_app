import { Outlet } from "react-router-dom";
import MainNavigation from "../component/MainNav/MainNavigation";
import Footer from "../component/footer/Footer";
import { useAuth } from "../context/AuthContext";

function RootLayout() {
  const { currUser } = useAuth();
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      {currUser || <Footer />}
    </>
  );
}

export default RootLayout;
