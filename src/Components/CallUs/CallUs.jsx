import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-semibold mb-2">Get In Touch!</h1>
        <p className="text-gray-600">We'd love to hear from you</p>
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Address Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-gray-100 rounded-full">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Address</h3>
              <p className="text-sm text-gray-600">
                Pinakin Building, Plot No.18/2, opposite IKEA, Sector-III, HUDA
                Techno Enclave, HITEC City, Hyderabad, Telangana 500081{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Customer Care Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-gray-100 rounded-full">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Customer Care</h3>
              <p className="text-sm text-gray-600">+91 9000308811</p>
            </div>
          </div>
        </div>

        {/* Free Shipping Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-gray-100 rounded-full">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a2 2 0 104 0m-4 0a2 2 0 104 0"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Always Free Shipping</h3>
              <p className="text-sm text-gray-600">For all orders</p>
            </div>
          </div>
        </div>

        {/* Email Card */}
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-gray-100 rounded-full">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-sm text-gray-600">contact@avantdivine.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="What can we help you with?"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
