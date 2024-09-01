import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import Dashboard from "./routes/Dashboard";
import AddFaculty from "./routes/AddFaculty";
import AddDepartment from "./routes/AddDepartment";
import AddStudent from "./routes/AddStudent";
import ViewFaculty from "./routes/ViewFaculty";
import ViewStudent from "./routes/ViewStudent"
import ViewDepartment from "./routes/ViewDepartment";
import ViewResults from "./routes/ViewResults";
import PredictDashboard from "./routes/PredictDashboard";
import Charts from "./routes/Charts";

function Admin() {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="ml-64 w-full flex flex-grow flex-col">
          <Header />
          <div className="p-1">
            <Routes>
              <Route path="/" element={<Dashboard />} />

              <Route path="addFaculty" element={<AddFaculty />} />
              <Route path="viewFaculty" element={<ViewFaculty />} />

              <Route path="addDepartment" element={<AddDepartment />} />
              <Route path="viewDepartment" element={<ViewDepartment />} />

              <Route path="addStudent" element={<AddStudent />} />
              <Route path="viewStudent" element={<ViewStudent />} />

              <Route path="viewResults" element={<PredictDashboard />} />
              {/* <Route path="predictDashboard" element={<PredictDashboard />} /> */}
              <Route path="charts" element={<Charts />} />

            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
