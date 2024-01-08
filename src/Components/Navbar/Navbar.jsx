import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Profile from "../Profile/Profile";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => navigate("/"))
      .catch((error) => console.log(error.message));
  };

  const Navbar = (
    <>
      <NavLink
        className={`nav ${
          click
            ? "btn btn-sm h-10 btn-wide bg-gradient-to-r from-indigo-500 to-purple-500 border-none text-white"
            : ""
        }`}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={`nav ${
          click
            ? "btn btn-sm h-10 btn-wide bg-gradient-to-r from-indigo-500 to-purple-500 border-none text-white"
            : ""
        }`}
        to="/contact"
      >
        Contact Us
      </NavLink>
      <NavLink
        className={`nav ${
          click
            ? "btn btn-sm h-10 btn-wide bg-gradient-to-r from-indigo-500 to-purple-500 border-none text-white"
            : ""
        }`}
        to="/register"
      >
        Register
      </NavLink>
    </>
  );
  return (
    <div className="navbar items-start container mx-auto justify-between pt-1">
      <div className="">
        <div className=" flex items-center">
          <Link to="/">
            <img
              className="w-12 lg:w-14 border-2 border-black hover:scale-105 rounded-full"
              src="logoTT.png"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div
        className={`md:flex md:mt-5 navs ${click ? "left-0" : "left-[-100%]"}`}
      >
        <ul className="text-base lg:text-lg font-medium flex gap-4 lg:gap-10 xl:gap-16 Navbar">
          {Navbar}
          <NavLink className=" md:hidden" to="/login">
            <button className="btn border-none btn-sm h-10 rounded-full px-8  text-white bg-gradient-to-r from-indigo-500 to-purple-500">
              Login
            </button>
          </NavLink>
        </ul>
      </div>
      <div onClick={() => setClick(!click)} className="flex mt-3 md:hidden">
        {click ? (
          <RxCross2 className="text-purple-500 cursor-pointer" size={28} />
        ) : (
          <FaBars className="text-indigo-500   cursor-pointer" size={26} />
        )}
      </div>
      <div className="hidden md:flex mt-4">
        {user?.email ? (
          <Profile user={user} handleSignOut={handleSignOut} />
        ) : (
          <NavLink to="/login">
            <button className="btn btn-sm h-10 border-none rounded-full px-5 lg:px-8 font-light text-lg text-white bg-gradient-to-r from-indigo-500 to-purple-500">
              Login
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
