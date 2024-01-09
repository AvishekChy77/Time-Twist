import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { MdAddCard, MdHome, MdLogout } from "react-icons/md";
import { SiGoogletagmanager } from "react-icons/si";
import { Link, Outlet, useNavigate } from "react-router-dom";
import MenuItem from "../Components/MenuItem/MenuItem";
import { AuthContext } from "../Provider/AuthProvider";

const Dashboard = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => navigate("/login"))
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* Page content here */}
        <div className="flex p-4 justify-between lg:hidden">
          <div className=" text-xl md:text-2xl lg:text-3xl font-bold">
            <Link className="flex items-center" to="/">
              <img
                className="w-12 hover:scale-105 rounded-full"
                src="/logoTT.png"
                alt=""
              />
              <span className=" text-[#265073]">Time</span>
              <span className=" text-[#A2C579]">Twist</span>
            </Link>
          </div>
          <label htmlFor="my-drawer-2" className=" cursor-pointer ">
            <FaBars className="mb-5 " size={28} />
          </label>
        </div>
        <div className="flex flex-col min-h-screen">
          <div className="px-4 my-5 lg:p-10 w-[390px] sm:w-[500px] md:w-[650px] lg:w-[800px] xl:w-[950px] mx-auto flex-grow">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <div className="flex items-center gap-3 uppercase avatar  mb-10 text-xl md:text-2xl lg:text-3xl font-bold">
            <div className="w-10 rounded-full object-cover">
              <img src={user.photoURL} alt="" />
            </div>
            <p>{user.displayName}</p>
          </div>

          <>
            <MenuItem icon={MdHome} label="Home" address="/"></MenuItem>
            <MenuItem
              icon={SiGoogletagmanager}
              label="Manage Tasks"
              address="/dashboard/manageTask"
            ></MenuItem>
            <MenuItem
              icon={MdAddCard}
              label="Add Tasks"
              address="/dashboard/addTask"
            ></MenuItem>
          </>
          <button onClick={handleSignOut}>
            <MenuItem
              icon={MdLogout}
              label="Log Out"
              address="/login"
            ></MenuItem>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
