import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { MdEditDocument, MdOutlineExplore } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import Logout from "./Logout";

function Sidebar() {
  const authUser = true;
  // const authUser = false;

  return (
    <aside className="flex flex-col items-center min-w-12 sm:w-16 sticky top-0 left-0 h-screen py-8 overflow-y-auto bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 hover:bg-gray-900 hover:bg-opacity-50 transition-all duration-200 ease-in-out shadow-lg">
      <nav className="h-full flex flex-col gap-3">
        <Link
          to="/"
          className="flex justify-center  flex-col hover:bg-gray-800 p-1.5 rounded-lg transition-colors duration-200"
        >
          <img src="/github.svg" alt="Github Logo" className="h-8 w-8" />
          <span className="text-xs pt-2 justify-center">Github</span>
        </Link>
        <Link
          to="/"
          className="p-1.5 flex justify-center transition-colors duration-200 rounded-lg  flex-col hover:bg-gray-800"
        >
          <IoHomeSharp size={30} />
          <span className=" pt-2  text-xs justify-center">Home</span>
        </Link>
        {authUser && (
          <Link
            to="/likes"
            className="p-1.5 flex  flex-col justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800"
          >
            <FaHeart size={30} />
            <span className=" pt-2  text-xs justify-center">Likes</span>
          </Link>
        )}

        {authUser && (
          <Link
            to="/explore"
            className="p-1.5 flex  flex-col justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800"
          >
            <MdOutlineExplore size={30} />
            <span className=" pt-2  text-xs justify-center">Explore</span>
          </Link>
        )}
        {!authUser && (
          <Link
            to="/login"
            className="p-1.5 flex  flex-col justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800"
          >
            <PiSignInBold size={30} />
            <span className=" pt-2  text-xs justify-center">Login</span>
          </Link>
        )}
        {!authUser && (
          <Link
            to="/signup"
            className="p-1.5 flex flex-col justify-center transition-colors duration-200 rounded-lg hover:bg-gray-800"
          >
            <MdEditDocument size={30} />
            <span className=" pt-2  text-xs justify-center">signup</span>
          </Link>
        )}
   
        {authUser && (
          <div className="flex flex-col gap-2 mt-auto">
            <Logout/>
          </div>
        )}
      </nav>
    </aside>
  );
}

export default Sidebar;
