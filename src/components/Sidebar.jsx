import { useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { FiBriefcase, FiSettings } from "react-icons/fi";
import { FaTasks, FaRegUserCircle } from "react-icons/fa";

const Sidebar = () => {
  const navigate = useNavigate(); // React Router navigation function

  const menuItems = [
    { name: "Dashboard", icon: <RxDashboard size={18} />, path: "/" },
    { name: "Employee Onboarding", icon: <HiOutlineUserGroup size={18} />, path: "/employee-onboarding" },
    { name: "Manage Account", icon: <FiBriefcase size={18} />, path: "/manage-account" },
    { name: "Manage Work", icon: <FaTasks size={18} />, path: "/manage-work" },
    { name: "Settings", icon: <FiSettings size={18} />, path: "/settings" },
  ];

  return (
    <aside className="w-64 bg-[#d3e2f1] h-screen p-6 flex flex-col">
      {/* Logo Section */}
      <div className="flex items-center justify-center gap-3 mb-16">
        <div className="w-10 h-10 bg-blue-300 flex items-center justify-center rounded-full">
          <FaRegUserCircle className="text-white text-2xl" />
        </div>
        <h2 className="text-xl font-bold text-black">HRMS</h2>
      </div>

      {/* Navigation Menu */}
      <nav className="flex flex-col gap-3">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)} // Navigate to the correct path
            className="flex items-center gap-3 text-[16px] p-3 rounded-md transition-all w-full text-gray-700 hover:bg-blue-200"
            aria-label={item.name}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="whitespace-nowrap">{item.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
