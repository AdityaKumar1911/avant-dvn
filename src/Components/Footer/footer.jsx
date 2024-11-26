import React from "react";
import { Link } from "react-router-dom";
import AD from "../../Assets/images/AD.png";

function Footer() {
  return (
    <div className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* HELP Section */}
          <div className="mt-3">
            <p className="text-lg font-semibold">HELP</p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="./CallUs" className="hover:underline">
                  A Client Advisor is available at
                  <br />
                  You can also{" "}
                  <Link to="#" className="underline">
                    chat
                  </Link>{" "}
                  or{" "}
                  <Link to="#" className="underline">
                    email
                  </Link>{" "}
                  us
                </Link>
              </li>
              <li>
                <Link to="/help/faq" className="hover:underline">
                  FAQ's
                </Link>
              </li>
              <li>
                <Link to="/help/shipping" className="hover:underline">
                  Stores
                </Link>
              </li>
              <li>
                <Link to="/help/returns" className="hover:underline">
                  Follow Us
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES Section */}
          <div className="mt-3">
            <p className="text-lg font-semibold">SERVICES</p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/services/consulting" className="hover:underline">
                  Repairs
                </Link>
              </li>
              <li>
                <Link to="/services/design" className="hover:underline">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/services/design" className="hover:underline">
                  Personalisation
                </Link>
              </li>
              <li>
                <Link to="/services/marketing" className="hover:underline">
                  Download our Apps
                </Link>
              </li>
            </ul>
          </div>

          {/* ABOUT Section */}
          <div className="mt-3">
            <p className="text-lg font-semibold">ABOUT</p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about/careers" className="hover:underline">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/about/blog" className="hover:underline">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/about/blog" className="hover:underline">
                  Privacy And Policy
                </Link>
              </li>
              <li>
                <Link to="/about/blog" className="hover:underline">
                  Terms And Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* CONNECT Section */}
          <div className="mt-3">
            <p className="text-lg font-semibold">CONNECT</p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/help/contact" className="hover:underline">
                  <span className="underline">Sign up</span> for first access to
                  latest collections,
                  <br />
                  campaigns and video
                </Link>
              </li>
            </ul>
            <p className="mt-6 text-lg font-semibold">ADDRESS</p>
            <ul className="mt-4">
              <li>
                <Link className="text-white">
                  35- Ferozeshah Road
                  <br />
                  New Delhi - 110001 <br />
                  011-23604650
                </Link>
              </li>
            </ul>
          </div>
        </div>

       
        <div className="flex justify-center mt-10">
          <img src={AD} alt="Descriptive Alt Text" className="max-w-full" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
