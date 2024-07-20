import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Dashboard from './routes/Dashboard';

function Faculty() {
  return (
    <div>
      <div className="flex-grow flex flex-col">
      <Header />
      <div className="bg-gray-100">
        <Routes>
        <Route path="/" element={<Dashboard />} />

        </Routes>
        </div>
      </div>
    </div>
  )
}

export default Faculty
