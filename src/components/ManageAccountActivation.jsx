import { useState } from "react";
import { FaUserCheck, FaUserTimes, } from "react-icons/fa";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { MdGroupAdd } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { Navbar } from "./Navbar";

const ManageAccountActivation = ({ setActivePage }) => {
  const [employees, setEmployees] = useState([
    {
      id: "EMP003",
      name: "Darlene Robertson",
      department: "Development",
      joinDate: "2024-02-15",
      status: "Pending",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: "EMP006",
      name: "Marvin McKinney",
      department: "Design",
      joinDate: "2024-02-19",
      status: "Active",
      avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    },
  ]);

  const [recentActivities, setRecentActivities] = useState([
    {
      action: "Account activation failed",
      employee: "Sarah Johnson",
      icon: <BsXCircleFill className="text-red-500 text-lg" />,
    },
    {
      action: "Account activated",
      employee: "John Smith",
      icon: <BsCheckCircleFill className="text-green-500 text-lg" />,
    },
    {
      action: "Batch email sent to 5 pending employees",
      employee: "",
      icon: <IoMdMail className="text-blue-500 text-lg" />,
    },
  ]);

  return (
    <div className="p-6 min-h-screen">
      {/* Header */}
      <Navbar heading="Account Management" />

      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          {
            title: "Pending Activation",
            count: "24",
            color: "text-blue-500",
            icon: <MdGroupAdd className="text-2xl text-blue-500" />,
          },
          {
            title: "Activated Today",
            count: "12",
            color: "text-red-500",
            icon: <FaUserCheck className="text-2xl text-red-500 " />,
          },
          {
            title: "Failed Activation",
            count: "3",
            color: "text-yellow-500",
            icon: <FaUserTimes className="text-2xl text-yellow-500" />,
          },
          {
            title: "Total Active Employee",
            count: "1286",
            color: "text-green-500",
            icon: <HiUserGroup className="text-2xl text-green-500" />,
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-4 border rounded-md flex items-center gap-4 bg-white shadow-md"
          >
            <div>{item.icon}</div>
            <div>
              <p className={`text-gray-600 ${item.color}`}>{item.title}</p>
              <p className="text-lg font-bold">{item.count}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-md mb-6 shadow-md">
        <h3 className="font-semibold mb-2">Employee Account Activation</h3>
        <p className="text-sm text-gray-500 mb-4">
          Manage pending account activations for new employees
        </p>

        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Search by name, ID or email"
            className="p-2 border rounded-md flex-1"
          />
          <input 
            type="text" 
            placeholder="All Departments" 
            className="p-2 border rounded-md"
          />
          <input 
            type="text" 
            placeholder="All Status" 
            className="p-2 border rounded-md"
          />
        </div>

        <table className="w-full border-collapse border border-gray-300 bg-white">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">Employee Name</th>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Join Date</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <tr key={index} className="border-b">
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={emp.avatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{emp.name}</p>
                    <p className="text-sm text-gray-500">{emp.id}</p>
                  </div>
                </td>
                <td className="p-3">{emp.department}</td>
                <td className="p-3">{emp.joinDate}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 text-xs rounded-md ${
                      emp.status === "Pending"
                        ? "bg-yellow-200 text-yellow-700"
                        : "bg-green-200 text-green-700"
                    }`}
                  >
                    {emp.status}
                  </span>
                </td>
                <td className="p-3 flex gap-3">
                  {emp.status === "Pending" ? (
                    <>
                      <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
                        Activate
                      </button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
                        Reject
                      </button>
                    </>
                  ) : (
                    <span className="text-gray-500">Activated</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-semibold mb-4">Recent Activity Log</h3>
        {recentActivities.map((activity, index) => (
          <div key={index} className="flex items-center gap-3 mb-3">
            {activity.icon}
            <p className="text-sm text-gray-700">
              {activity.action}{" "}
              {activity.employee && <strong>{activity.employee}</strong>}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAccountActivation;