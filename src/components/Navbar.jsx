import {
  FaBell,
  FaCaretDown,
  FaSearch,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import searchIcon from "../assets/search-icon.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Navbar = ({ heading }) => {
  const navigate = useNavigate();
  const handleNotification = () => {
    navigate("/notification")
  };
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center mb-4 relative">
      <h2 className="text-2xl font-semibold">{heading}</h2>
      <div className="flex items-center gap-4">
        <div className="relative w-[200px] border px-3 py-2 rounded-lg">
          {/* <FaSearch className="absolute top-3 left-3 text-lg" /> */}
          <img
            src={searchIcon}
            className="absolute top-2.5 left-3 text-lg w-5"
          />
          <input
            type="text"
            placeholder="Search..."
            className="pl-7 w-full bg-transparent outline-none"
          />
        </div>
        <div className="border rounded-lg p-2.5">
          <FaBell 
            className="text-gray-600 text-xl cursor-pointer"
            onClick={handleNotification}
          />
        </div>

        <div
          className="flex items-center gap-2 cursor-pointer border rounded-lg px-2 py-1"
          onClick={() => setOpen(!isOpen)}
        >
          <img
            src="src/components/profile.png"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="font-semibold">Rashmika</p>
            <p className="text-sm text-gray-500">HR Admin</p>
          </div>
          <FaCaretDown />
        </div>
        {isOpen && (
          <div className="absolute top-14 right-0 bg-white border rounded-lg w-28 py-1">
            <div className="flex gap-1 justify-start items-center px-4 py-1">
              <FaUser /> Profile
            </div>
            <div className="flex gap-1 justify-start items-center  px-4 py-1">
              <FaSignOutAlt /> Logout
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
