import { Outlet,} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout() {

  return (
    <div className="h-screen w-full flex flex-col">
    <div className="relative">
        <Navbar className="  fixed z-50  "/>
    </div>
      <main className="">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default Layout;
