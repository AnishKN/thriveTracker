import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    let loginUrl = "";
    switch (userType) {
      case "admin":
        loginUrl = `${BASE_URL}auth/admin/login`;
        break;
      case "faculty":
        loginUrl = `${BASE_URL}auth/faculty/login`;
        break;
      case "student":
        loginUrl = `${BASE_URL}auth/student/login`;
        break;
      default:
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Please select a user type",
        });
        return;
    }

    try {
      const response = await axios.post(loginUrl, { email, password });
      const token = response.data.token;
      const id = response.data.data._id;

      // Store token and userType in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("userType", userType);
      localStorage.setItem("id", id);

      // Navigate based on user type
      if (userType === "admin") {
        navigate("/admin");
      } else if (userType === "faculty") {
        navigate("/faculty");
      } else if (userType === "student") {
        navigate("/student");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password",
      });
    }
  };

  // Redirect to dashboard if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userType = localStorage.getItem("userType");
    if (token) {
      if (userType === "admin") {
        navigate("/admin");
      } else if (userType === "faculty") {
        navigate("/faculty");
      } else if (userType === "student") {
        navigate("/student");
      }
    }
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen auth-bg">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Welcome to ThriveTracker
        </h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Email"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Password"
            />
          </div>
          <div>
            <label
              htmlFor="userType"
              className="block text-sm font-medium text-gray-700"
            >
              User Type
            </label>
            <select
              id="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select user type</option>
              <option value="admin">Admin</option>
              <option value="faculty">Faculty</option>
              <option value="student">Student</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <NavLink to="/register">
            <p className="font-medium text-indigo-600 hover:text-indigo-500">
              New Here? <span className="font-bold">Create an account</span>
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
