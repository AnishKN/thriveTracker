import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Dashboard from './routes/Dashboard';
import AddQuiz from './routes/AddQuiz';
import Quiz1 from './routes/Quiz1';



function Faculty() {
  return (
    <div>
      <div className="flex-grow flex flex-col">
      <Header />
      <div className="bg-gray-100">
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="addQuiz" element={<AddQuiz/>}/>
        <Route path="quiz1" element={<Quiz1/>}/>
        
        

        </Routes>
        </div>
      </div>
    </div>
  )
}

export default Faculty
