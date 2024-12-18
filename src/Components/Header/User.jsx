// src/components/Navbar/UserMenu.js

import { useState } from "react";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserMenu({ isLoggedIn, storedUser, toggleUserMenu }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      if (storedUser && storedUser.email) {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/auth/logout`,
          { email: storedUser.email }
        );
        if (
          response.data.success ||
          response.data.message === "Logout successful"
        ) {
          localStorage.clear();
          toggleUserMenu();
          navigate("/login");
        } else {
          console.error("Logout failed:", response.data.message);
        }
      }
    } catch (error) {
      console.error("Error during logout request:", error);
    }
  };

  const handleUserClick = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      toggleUserMenu();
    }
  };

  return (
    <div className="relative">
      <button
        className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="User account"
        onClick={handleUserClick}
      >
        <User className="h-6 w-6" />
      </button>

      {isLoggedIn && storedUser ? (
        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-2">
          <p className="px-4 py-2 text-gray-700">{storedUser.name}</p>
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100 rounded-lg"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-2">
          <button
            onClick={() => navigate("/login")}
            className="w-full px-4 py-2 text-left text-blue-600 hover:bg-gray-100 rounded-lg"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}
