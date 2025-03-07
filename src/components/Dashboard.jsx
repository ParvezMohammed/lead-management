import { Card, CardContent } from "./Card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaUsers, FaProjectDiagram } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { MdOutlineWork } from "react-icons/md";
import { Search } from "lucide-react";
import { useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Navbar } from "./Navbar";

const data = [
  { name: "Mon", Sales: 20, Marketing: 30, Design: 10 },
  { name: "Tue", Sales: 40, Marketing: 20, Design: 20 },
  { name: "Wed", Sales: 35, Marketing: 40, Design: 25 },
  { name: "Thu", Sales: 50, Marketing: 30, Design: 30 },
  { name: "Fri", Sales: 60, Marketing: 50, Design: 35 },
  { name: "Sat", Sales: 90, Marketing: 70, Design: 50 },
  { name: "Sun", Sales: 100, Marketing: 80, Design: 55 },
];

export default function Dashboard() {
  return (
    <main className="flex-1 p-6">
      <Navbar heading="Dashboard" />
      <div className="grid grid-cols-4 gap-4 mt-6">
        <Card>
          <CardContent className="p-4 text-center">
            <FaUsers className="text-blue-500 text-2xl mx-auto" />
            <h2 className="text-xl font-semibold">560</h2>
            <p className="text-gray-500">Total Employees</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <IoIosPeople className="text-green-500 text-2xl mx-auto" />
            <h2 className="text-xl font-semibold">1050</h2>
            <p className="text-gray-500">Active Accounts</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <MdOutlineWork className="text-red-500 text-2xl mx-auto" />
            <h2 className="text-xl font-semibold">250</h2>
            <p className="text-gray-500">Inactive Accounts</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <FaProjectDiagram className="text-purple-500 text-2xl mx-auto" />
            <h2 className="text-xl font-semibold">470</h2>
            <p className="text-gray-500">Total Projects</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Employee Performance</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="Sales"
              stroke="red"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="Marketing"
              stroke="green"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="Design"
              stroke="blue"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}
