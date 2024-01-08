import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <div className="font-Poppins flex flex-col min-h-screen">
        <div className="flex-1  grow">
          <Navbar />
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Root;
