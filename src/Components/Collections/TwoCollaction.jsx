import React from "react";
import { Link } from "react-router-dom";
import denimImage from "../../Assets/images/Avant-Devine7960.jpg";
import eventImage from "../../Assets/images/Avant-Devine7996-edit.jpg";

const App = () => {
  const bodysuitProductId = "6760760a6de32005e732d499"; // Unique product ID for the bodysuit

  return (
    <>
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 mt-6 text-gray-900">
        Avant Collections
      </h1>
      <main className="min-h-screen flex justify-center items-center bg-gray-50">
        <div className="container max-w-full mx-auto p-4 h-full flex items-center justify-center">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8 w-full h-full">
            {/* First Product Image Section */}
            <Link
              to={`/product-details/${bodysuitProductId}`}
              className="relative aspect-[3/4] w-full overflow-hidden group rounded-lg shadow-lg hover:shadow-xl"
            >
              <img
                src={denimImage}
                alt="Model wearing oversized denims"
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex justify-center items-center  bg-opacity-50 group-hover:bg-opacity-60">
                <h2 className="text-3xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Bodysuit
                </h2>
              </div>
            </Link>

            {/* Product Description and Button Section */}
            <div className="flex flex-col gap-6 md:gap-8 h-full">
              <div className="space-y-6 bg-white p-6 md:p-8 flex-1 flex flex-col items-start justify-center shadow-lg hover:shadow-xl rounded-lg">
                <h1 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl text-gray-900">
                  Scarlet Seduction Bodysuit
                </h1>
                <p className="text-sm text-gray-600 md:text-base">
                  Discover the allure of the Scarlet Seduction Bodysuit,
                  designed for confidence and elegance.
                </p>
                <Link
                  to={`/product-details/${bodysuitProductId}`}
                  className="inline-block bg-black px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-900 rounded-lg"
                >
                  SHOP NOW
                </Link>
              </div>

              {/* Second Image Section */}
              <Link
                to={`/product-details/${bodysuitProductId}`}
                className="relative aspect-[4/3] w-full overflow-hidden bg-blue-900 group rounded-lg shadow-lg hover:shadow-xl"
                style={{ marginTop: "auto" }}
              >
                <img
                  src={eventImage}
                  alt="People at a social event"
                  className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 flex justify-center items-center  bg-opacity-50 group-hover:bg-opacity-60">
                  <h2 className="text-3xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Social Event
                  </h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
