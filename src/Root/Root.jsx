import { Outlet } from "react-router-dom";
import DrawerAppBar from "../Home/Navbar/Navbar";
import Footer from "../pages/Footer";

const Root = () => {
  return (
    <div>
      <DrawerAppBar></DrawerAppBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
