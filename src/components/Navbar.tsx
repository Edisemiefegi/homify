import { useState } from "react";
import Tab from "./base/Tab";
import Button from "./base/Button";

interface Props {
  className?: string;
}

function Navbar({ className = "" }: Props) {
  const [open, setOpen] = useState(false);

  const navlink = [
    { path: "/", label: "Home", value: "Home" },
    { path: "/about", label: "About us", value: "Home" },
    { path: "/for-rent", label: "For Rent", value: "Rent" },
    { path: "/for-sale", label: "For Sale", value: "Home" },
    { path: "/roommate", label: "Roommate", value: "Home" },
  ];

  return (
    <div className={`${className} w-full shadow-md bg-white py-3`}>
      <nav className="container mx-auto w-11/12 sm:w-10/12 flex items-center justify-between relative">
        {/* Logo */}
        <p className="font-medium text-lg">
          Homi<span className="text-primary">F</span>y
        </p>


        {/* mobile bar Icon */}
        <Button
          variant="text"
          className="md:hidden block "
          onclick={() => setOpen(!open)}
        >
          <i className={`pi  text-2xl ${open ? "pi-times" : "pi-bars"}`}></i>
        </Button>

        {/* Desktop Nav */}
        <div className="md:block hidden">
          <Tab options={navlink} />
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="absolute top-10 z-80 p-6 left-0 w-full bg-white/95 shadow-md md:hidden">
            <Tab options={navlink} col onSelect={() => setOpen(false)} />
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
