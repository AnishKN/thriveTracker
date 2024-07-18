import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'

// auth
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

// landing
import Home from './pages/landing/Home'

// routes
import Admin from "./pages/auth/admin/Admin";
import Faculty from "./pages/auth/faculty/Faculty"
import Student from "./pages/auth/student/Student"

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index path='' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route index path='admin/*' element={<Admin />} />
            <Route index path='faculty/*' element={<Faculty />} />
            <Route index path='student/*' element={<Student />} />
            <Route path='*' element="404" />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}
