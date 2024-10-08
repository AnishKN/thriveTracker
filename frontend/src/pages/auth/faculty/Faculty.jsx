import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./routes/Dashboard";
import AddQuiz from "./routes/AddQuiz";
import ViewResults from "./routes/ViewResults";

function Faculty() {  
  return (
    <div>
      <div className="flex-grow flex flex-col">
        <Header />
        <div className="bg-gray-100">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="addQuiz" element={<AddQuiz />} />
            <Route path="viewResults" element={<ViewResults />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Faculty;
