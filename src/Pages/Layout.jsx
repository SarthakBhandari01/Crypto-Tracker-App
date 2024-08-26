import { Outlet } from "react-router-dom";
import NavBar from "../Component/NavBar/Navbar";

function MainLayout() {
  return (
    <>
      <NavBar /> {/* The Navbar is the shared ui we want across Pages */}
      <Outlet /> {/*The actual page which will be render along with the Navbar */}
    </>
  );
}
export default MainLayout;
