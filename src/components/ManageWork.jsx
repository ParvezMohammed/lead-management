import { useState, useEffect } from "react";
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Navbar } from "./Navbar"; // Import Navbar

const ManageWork = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const employees = [
    {
      name: "Anjali Mehta",
      designation: "UI/UX Designer Intern",
      project: "E-commerce site",
      lead: "Kadi Manela",
    },
    {
      name: "Ali Alhamdan",
      designation: "Graphic Designer",
      project: "Food App Design",
      lead: "Kadi Manela",
    },
    {
      name: "Mono Alghafar",
      designation: "Graphic Designer",
      project: "IT Department",
      lead: "Kadi Manela",
    },
    {
      name: "Moustafa Adel",
      designation: "Graphic Designer",
      project: "HR Department",
      lead: "Kadi Manela",
    },
    {
      name: "Jhon Neleson",
      designation: "Graphic Designer",
      project: "HR Department",
      lead: "Kadi Manela",
    },
    {
      name: "Kadi Manela",
      designation: "Graphic Designer",
      project: "HR Department",
      lead: "Kadi Manela",
    },
  ];
  const totalPages = Math.max(10, Math.ceil(employees.length / itemsPerPage));

  return (
    <div className="flex flex-col h-screen w-full bg-gray-100">
      <Navbar heading="Intern Work Management" />

      {/* Content Wrapper */}
      <div className="flex-1 overflow-y-auto">
        {/* Header Row */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800 whitespace-nowrap">
            Employee Management & Assigned Work
          </h3>

          {/* Search Bar */}
          <div className="relative w-[700px]">
            <FaSearch className="absolute left-4 top-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Search Here"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-2.5 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-gray-700 bg-white shadow-sm"
            />
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="p-3 text-left">Full Name</th>
                <th className="p-3 text-left">Designation</th>
                <th className="p-3 text-left">Assigned Project Name</th>
                <th className="p-3 text-left">Team Lead</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees
                .filter((emp) =>
                  emp.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((emp, index) => (
                  <tr key={index} className="border-b hover:bg-gray-100">
                    <td className="p-3">{emp.name}</td>
                    <td className="p-3 font-semibold">{emp.designation}</td>
                    <td className="p-3">{emp.project}</td>
                    <td className="p-3">{emp.lead}</td>
                    <td className="p-3 flex gap-2">
                      <FaEye className="text-grey-500 cursor-pointer" />
                      <FaEdit className="text-grey-500 cursor-pointer" />
                      <FaTrash className="text-grey-500 cursor-pointer" />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-gray-600 text-sm">Page 1 of 100</div>
          {/* Pagination Footer */}
          {/* Pagination Buttons */}
          <div className="flex items-center gap-2">
            <button className="p-1  border rounded disabled:opacity-50 grey">
              <FaChevronLeft />
            </button>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3  border rounded disabled:opacity-50 grey"
            >
              Prev
            </button>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3  border rounded disabled:opacity-50 bg-blue-100"
            >
              Next
            </button>
            <button className="p-1  border rounded disabled:opacity-50 grey">
              <FaChevronRight />
            </button>
            <span>
              Page:
              <input
                value={currentPage}
                placeholder="page"
                name="current-page"
                className="inline w-[50px] border rounded-lg px-2 mx-2 py-0.5"
              />
              of {totalPages}
            </span>

            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="border rounded-lg p-1 ml-3"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
          </div>

          {/* Items per page dropdown */}
        </div>
      </div>
    </div>
  );
};

export default ManageWork;