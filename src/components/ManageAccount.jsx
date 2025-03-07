import { useState } from "react";
import { FaUserCheck, FaUserTimes, FaEdit, FaTrashAlt, } from "react-icons/fa";
import { BsCheckCircleFill, BsXCircleFill, BsExclamationCircleFill, } from "react-icons/bs";
import { MdPerson, MdHourglassEmpty, MdPersonAdd } from "react-icons/md";
import { Navbar } from "./Navbar";
import { useNavigate } from "react-router-dom";

const ManageAccount = () => {
  const navigate = useNavigate(); // Initialize navigation
  const handleBatchActivateProcess = () => {
        navigate("/batch-activation")
      };
  const handleBatchDeactivateProcess = () => {
        navigate("/batch-deactivation")
      };
  const [employees] = useState([
    {
      id: "EMP003",
      name: "Darlene Robertson",
      department: "Development",
      lastActive: "2024-02-20 9:30 AM",
      status: "Active",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: "EMP006",
      name: "Marvin McKinney",
      department: "Design",
      lastActive: "2024-02-19 3:45 PM",
      status: "Inactive",
      avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    },
  ]);

  const recentActivities = [
    {
      action: "Account Deactivated",
      employee: "Marvin McKinney",
      id: "EMP006",
      date: "2024-02-19 15:45 PM",
      reason: "Termination",
      icon: <BsXCircleFill className="text-red-500 text-lg" />,
    },
    {
      action: "Account Activated",
      employee: "John Smith",
      id: "EMP025",
      date: "2024-01-12 11:20 AM",
      reason: "New Employee Onboarding",
      icon: <BsCheckCircleFill className="text-green-500 text-lg" />,
    },
    {
      action: "Account Suspended",
      employee: "Michael Chen",
      id: "EMP013",
      date: "2024-11-02 12:42 PM",
      reason: "Security Policy Violation",
      icon: <BsExclamationCircleFill className="text-yellow-500 text-lg" />,
    },
  ];

  return (
    <div className="p-6 min-h-screen">
      {/* Header */}
      <Navbar heading="Account Management" />

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
          <MdPerson className="text-blue-500 text-3xl" />
          <div>
            <p className="text-gray-600">Active Accounts</p>
            <p className="text-xl font-semibold">2847</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
          <FaUserTimes className="text-red-500 text-3xl" />
          <div>
            <p className="text-gray-600">Inactive Accounts</p>
            <p className="text-xl font-semibold">156</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
          <MdHourglassEmpty className="text-yellow-500 text-3xl" />
          <div>
            <p className="text-gray-600">Pending Action</p>
            <p className="text-xl font-semibold">2847</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
          <MdPersonAdd className="text-green-500 text-3xl" />
          <div>
            <p className="text-gray-600">New Accounts (30d)</p>
            <p className="text-xl font-semibold">2847</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-md mb-6 shadow-md">
        <h3 className="font-semibold mb-4">Employee Status Control</h3>
        <div className="flex gap-4">
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
        <div className="mt-4 flex gap-3">
          <button
            onClick={handleBatchActivateProcess}
            className="w-50 bg-blue-500 text-white p-2 rounded-md flex items-center justify-center hover:bg-blue-600 transition"
          >
            <FaUserCheck className="mr-2" /> Batch Activated
          </button>
          <button
            onClick={handleBatchDeactivateProcess}
            className="w-50 bg-red-500 text-white p-2 rounded-md flex items-center justify-center hover:bg-red-600 transition"
          >
            <FaUserCheck className="mr-2" /> Batch Deactivated
          </button>
        </div>

        <div className="mt-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">Employee Name</th>
                <th className="p-2 text-left">Department</th>
                <th className="p-2 text-left">Last Active</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id} className="border-t">
                  <td className="p-2 flex items-center gap-2">
                    <img
                      src={emp.avatar}
                      alt="avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p>{emp.name}</p>
                      <p className="text-xs text-gray-500">{emp.id}</p>
                    </div>
                  </td>
                  <td className="p-2">{emp.department}</td>
                  <td className="p-2">{emp.lastActive}</td>
                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded-md ${
                        emp.status === "Active"
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {emp.status}
                    </span>
                  </td>
                  <td className="p-2 flex gap-2">
                    <FaEdit className="text-blue-500 cursor-pointer" />
                    <FaTrashAlt className="text-red-500 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Status Update Form</h3>
          <label className="block text-sm font-medium">
            Reason for Deactivation
          </label>
          <select className="w-full border rounded-lg p-2 mt-1">
            <option>Select reason</option>
          </select>

          <label className="block text-sm font-medium mt-4">
            Effective Date
          </label>
          <input type="date" className="w-full border rounded-lg p-2 mt-1" />

          <label className="block text-sm font-medium mt-4">Comments</label>
          <textarea
            className="w-full border rounded-lg p-2 mt-1"
            rows="3"
            placeholder="Add comments..."
          ></textarea>

          <div className="flex items-center mt-4">
            <input type="checkbox" id="confirmAction" className="mr-2" />
            <label htmlFor="confirmAction" className="text-sm text-gray-600">
              I understand this action will affect user access to company
              resources.
            </label>
          </div>

          <button className="w-full bg-blue-600 text-white p-2 rounded-lg mt-4">
            Submit Update
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Recent Activity Log</h3>
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-center space-x-3 mb-3">
              {activity.icon}
              <div>
                <p className="text-sm font-medium">
                  {activity.action}: {activity.employee} ({activity.id})
                </p>
                <p className="text-xs text-gray-500">
                  {activity.date} - {activity.reason}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageAccount;
