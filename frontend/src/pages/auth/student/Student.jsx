import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./routes/Dashboard";
import Quiz from "./routes/Quiz";

function Student() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="test/:id" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default Student;
