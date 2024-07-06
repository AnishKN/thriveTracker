import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'

// auth
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'

// landing
import Home from './pages/landing/Home'

// routes
import Dashboard from "./pages/routes/Dashboard";
import AddFaculty from "./pages/routes/AddFaculty";
import AddDepartment from "./pages/routes/AddDepartment";
import AddStudent from "./pages/routes/AddStudent"
import Admin from "./pages/auth/Admin";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index path='' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route index path='admin/*' element={<Admin />} />
            <Route path='*' element="404" />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}
