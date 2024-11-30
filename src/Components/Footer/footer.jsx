import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import AD from "../../Assets/images/AD.png";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Footer Sections */}
        <div className="flex flex-wrap justify-between  text-center md:text-left">
          {/* Social Section */}
          <div className="w-full md:w-1/4">
            <p className="text-lg font-bold uppercase tracking-wide mb-4">
              Avant
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="#shop"
                  className="hover:text-gray-300 transition duration-200"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-gray-300 transition duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="hover:text-gray-300 transition duration-200"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Info Section */}
          <div className="w-full md:w-1/4">
            <p className="text-lg font-bold uppercase tracking-wide mb-4">
              Info
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/termsAndConditions"
                  className="hover:text-gray-300 transition duration-200"
                >
                  TermsAndConditions
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-policy"
                  className="hover:text-gray-300 transition duration-200"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping-policy"
                  className="hover:text-gray-300 transition duration-200"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="hover:text-gray-300 transition duration-200"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/4">
            <p className="text-lg font-bold uppercase tracking-wide mb-4">
              Contact Us
            </p>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaWhatsapp /> WhatsApp
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaInstagram /> Instagram
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaFacebook /> Facebook
              </li>
            </ul>
          </div>

          {/* Address Section */}
          <div className="w-full md:w-1/4">
            <p className="text-lg font-bold uppercase tracking-wide mb-4">
              Address
            </p>
            <p className="text-gray-400 text-sm">
              <FaMapMarkerAlt className="inline-block text-gray-300 mr-2" />
              Pinakin Building, Plot No.18/2, opposite IKEA, Sector-III, HUDA
              Techno Enclave, HITEC City, Hyderabad, Telangana 500081
            </p>
            <p className="mt-3">Contact: 9000308811</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <div className="flex justify-center mb-4">
            <img src={AD} alt="Advertisement" className="w-48" />
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Avant. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
