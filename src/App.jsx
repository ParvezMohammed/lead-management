import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import ManageAccount from "./components/ManageAccount";
import ManageAccountActivation from "./components/ManageAccountActivation";
import ManageAccountDeactivation from "./components/ManageAccountDeactivation";
import ProcessDeactivation from "./components/ProcessDeactivation";
import EmployeeDeactivation from "./components/EmployeeDeactivation";
import ManageWork from "./components/ManageWork";
import Notification from "./components/Notification";


function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/manage-account" element={<ManageAccount />} />
          <Route path="/batch-activation" element={<ManageAccountActivation />}/>
          <Route path="/batch-deactivation" element={<ManageAccountDeactivation />}/>
          <Route path="/process-deactivation" element={<ProcessDeactivation />}/>
          <Route path="/employee-deactivation" element={<EmployeeDeactivation />}/>
          <Route path="/manage-work" element={<ManageWork />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="*" element={<h1 className="text-2xl font-semibold">Page not found</h1>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
