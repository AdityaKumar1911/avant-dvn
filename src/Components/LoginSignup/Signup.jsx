import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [otp, setOtp] = useState("");
  const [isOtpValid, setIsOtpValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOtpVisible, setIsOtpVisible] = useState(false); // State to control OTP visibility

  // Handle OTP Change
  const handleOtpChange = (e) => {
    const otpValue = e.target.value;
    setOtp(otpValue);

    // Validate OTP (You can replace this with your actual OTP validation logic)
    if (otpValue.length === 6) {
      setIsOtpValid(true);
    } else {
      setIsOtpValid(false);
    }
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Normally, here you would send the signup data to your server.
    // Simulate the signup success, then show the OTP input box.
    setTimeout(() => {
      setIsSubmitting(false);
      setIsOtpVisible(true); // Show OTP box after successful signup
    }, 1000); // Simulating delay (network request)
  };

  // Handle OTP Verification
  const handleOtpSubmit = (e) => {
    e.preventDefault();

    // Simulate OTP verification (replace with actual OTP verification logic)
    if (otp === "123456") {
      // Simulated OTP (this should be replaced with actual logic)
      navigate("/login"); // Redirect to login page after successful OTP verification
    } else {
      alert("Invalid OTP! Please try again.");
    }
  };

  // Form validation check before enabling the button
  const isFormValid = () => {
    return (
      formData.name &&
      formData.email &&
      formData.password &&
      formData.password === formData.confirmPassword &&
      formData.agreeTerms
    );
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Illustration Section */}
      <div className="lg:w-1/2 p-8 flex items-center justify-center bg-purple-50">
        <div className="relative w-full max-w-md" style={{ height: "400px" }}>
          <img
            src="/placeholder.svg"
            alt="Signup illustration"
            className="object-contain"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      {/* Signup Form Section */}
      <div className="lg:w-1/2 p-8 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          {/* Logo and Welcome Text */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-purple-600 mb-2">
              Avant Divine
            </h1>
            <p className="text-gray-600">
              Create an account and start your journey with us
            </p>
          </div>

          {/* Signup Form */}
          {!isOtpVisible ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

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

              <div>
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </div>

              <div className="flex items-center">
                <input
                  id="agree-terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  checked={formData.agreeTerms}
                  onChange={(e) =>
                    setFormData({ ...formData, agreeTerms: e.target.checked })
                  }
                />
                <label
                  htmlFor="agree-terms"
                  className="ml-2 block text-sm text-gray-700"
                >
                  I agree to the{" "}
                  <Link
                    to="/terms"
                    className="text-purple-600 hover:text-purple-500"
                  >
                    Terms and Conditions
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
                  isSubmitting || !isFormValid()
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }`}
                disabled={isSubmitting || !isFormValid()}
              >
                Sign up
              </button>
            </form>
          ) : (
            // OTP Box
            <form onSubmit={handleOtpSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="otp"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter OTP
                </label>
                <input
                  id="otp"
                  type="text"
                  maxLength={6}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  value={otp}
                  onChange={handleOtpChange}
                  required
                />
              </div>

              <button
                type="submit"
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
                  !isOtpValid ? "cursor-not-allowed opacity-50" : ""
                }`}
                disabled={!isOtpValid}
              >
                Verify OTP
              </button>
            </form>
          )}

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          {/* Social Signup */}
          {/* <div className="flex justify-center space-x-4">
            {["facebook", "twitter", "github", "google"].map((social) => (
              <button
                key={social}
                className="p-2 border border-gray-300 rounded-md hover:bg-gray-50"
                aria-label={`Sign up with ${social}`}
              >
                <div className="w-5 h-5 text-gray-500" />
              </button>
            ))}
          </div> */}

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-purple-600 hover:text-purple-500 font-medium"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
