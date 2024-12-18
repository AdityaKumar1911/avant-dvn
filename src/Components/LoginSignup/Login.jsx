import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loginimg from "../../Assets/images/login.png";

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errorMessage, setErrorMessage] = useState(""); // State to store error messages
  const [isSubmitting, setIsSubmitting] = useState(false); // State to manage loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(""); // Reset any previous error message

    try {
      // Sending login credentials to backend API
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/signin`,
        {
          email: formData.email,
          password: formData.password,
        }
      );

      if (response.status === 200) {
        const { token, user } = response.data;

        // Extract only required user fields
        const filteredUser = {
          _id: user._id,
          name: user.name,
          email: user.email,
          phoneNumber: user.phoneNumber,
          isLoggedIn: user.isLoggedIn,
        };

        // Store token and filtered user in local storage
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(filteredUser));

        navigate("/"); // Redirect to the dashboard or home page
      }
    } catch (error) {
      // Handle error
      setErrorMessage(
        error.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Illustration Section */}
      <div className="lg:w-1/2 p-8 flex items-center justify-center bg-purple-50">
        <div className="relative w-full max-w-md h-[400px]">
          <img
            src={Loginimg}
            alt="Login illustration"
            className="object-contain"
            style={{ width: "100%", height: "400px" }}
          />
        </div>
      </div>

      {/* Login Form Section */}
      <div className="lg:w-1/2 p-8 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          {/* Logo and Welcome Text */}
          <div className="text-center">
            <h1 className="text-2xl font-bold  mb-2" style={{color: "#40565e"}}>
              Avant Divine
            </h1>
            <p className="text-gray-600">
              Please sign in to your account and start the adventure
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
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
                id="password"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  checked={formData.rememberMe}
                  onChange={(e) =>
                    setFormData({ ...formData, rememberMe: e.target.checked })
                  }
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>

              <Link
                to="/forgot-password"
                className="text-sm text-purple-600 hover:text-purple-500"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="text-red-600 text-sm text-center">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
                isSubmitting ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing In..." : "Sign in"}
            </button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600">
            New on our platform?{" "}
            <Link
              to="/signup"
              className="text-purple-600 hover:text-purple-500 font-medium"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
