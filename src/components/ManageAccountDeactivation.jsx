import { useState } from "react";
import { FaSearch, FaBell, FaCog } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { HiOutlineTrash, HiOutlinePencil } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

const ManageAccountDeactivation = ({ setActivePage }) => {
  const navigate = useNavigate(); // Initialize navigate function
  const handleDeactivateProcess = () => {
    navigate("/process-deactivation")
  };
  const [employees, setEmployees] = useState([
    {
      id: "EMP001",
      name: "Ram Mahish",
      department: "Marketing",
      lastWorkingDate: "2024-02-28",
      status: "Pending",
      priority: "High",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: "EMP004",
      name: "Ankush Singh",
      department: "IT",
      lastWorkingDate: "2024-02-20",
      status: "Deactivation Completed",
      priority: "Medium",
      profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
    },
  ]);

  const [notes, setNotes] = useState([
    {
      author: "Rashmika (HR)",
      time: "2 hours ago",
      comment:
        "Employee has returned all company assets. Pending final clearance from IT department.",
    },
    {
      author: "John Anderson",
      time: "5 hours ago",
      comment: "Email account deactivation completed for Sarah Johnson.",
    },
  ]);

  const [newNote, setNewNote] = useState("");

  const handleAddNote = () => {
    if (newNote.trim() === "") return;
    setNotes([{ author: "You", time: "Just now", comment: newNote }, ...notes]);
    setNewNote("");
  };

  return (
    <div className="p-6 min-h-screen">
      {/* Header */}
      <Navbar heading="Employee Deactivation Management" />

      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <FaSearch className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, ID or email"
              className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select className="border rounded-lg p-2 w-full">
            <option>All Department</option>
          </select>
          <select className="border rounded-lg p-2 w-full">
            <option>All Status</option>
          </select>
          <input type="date" className="border rounded-lg p-2 w-full" />
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <div className="flex justify-between items-center border-b pb-2 mb-3">
          <h3 className="text-lg font-semibold">Deactivation Queue</h3>
          <div className="flex gap-3">
            <select className="border rounded-lg p-2">
              <option>Bulk Action</option>
            </select>
            <button
            onClick={handleDeactivateProcess} 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <FaCog /> Process Deactivation
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
              Mark as Completed
            </button>
          </div>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left">Employee Name</th>
              <th className="p-2">Department</th>
              <th className="p-2">Last Working Date</th>
              <th className="p-2">Status</th>
              <th className="p-2">Priority</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id} className="border-t">
                <td className="p-2 flex items-center gap-2">
                  <img src={emp.profilePic} alt={emp.name} className="w-8 h-8 rounded-full" />
                  <div>
                    <div className="font-semibold">{emp.name}</div>
                    <div className="text-sm text-gray-500">ID: {emp.id}</div>
                  </div>
                </td>
                <td className="p-2 text-center">{emp.department}</td>
                <td className="p-2 text-center">{emp.lastWorkingDate}</td>
                <td className="p-2 text-center">
                  <span className={`px-2 py-1 rounded-lg text-white text-sm ${emp.status === "Pending" ? "bg-yellow-500" : "bg-green-500"}`}>
                    {emp.status}
                  </span>
                </td>
                <td className="p-2 text-center">
                  <span className={`px-2 py-1 rounded-lg text-white text-sm ${emp.priority === "High" ? "bg-red-500" : "bg-orange-500"}`}>
                    {emp.priority}
                  </span>
                </td>
                <td className="p-2 text-center">
                  <button className="text-blue-500 mr-2"><HiOutlinePencil size={20} /></button>
                  <button className="text-red-500"><HiOutlineTrash size={20} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Deactivation Checklist</h3>
          {["Email Account", "System Credentials", "Building Access", "VPN Access", "Software Licenses", "Company Assets"].map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <label>{item}</label>
            </div>
          ))}
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Notes & Comments</h3>
          <textarea className="w-full border rounded-lg p-2" rows={3} placeholder="Add a note here" value={newNote} onChange={(e) => setNewNote(e.target.value)} />
          <button onClick={handleAddNote} className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2">
            Add Note
          </button>

          {notes.map((note, index) => (
            <div key={index} className="mt-4 border-t pt-2">
              <p className="text-sm font-semibold">{note.author}</p>
              <p className="text-xs text-gray-500">{note.time}</p>
              <p className="text-sm">{note.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageAccountDeactivation;