import React from "react";
// Importing CSS for styling
import denimImage from "../../Assets/images/Avant Devine7960.jpg"; // Replace with your actual image
import eventImage from "../../Assets/images/Avant Devine7996 edit.jpg"; // Replace with your actual image

const App = () => {
  return (
    <>
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 mt-4">
        Avant Collections
      </h1>
      <main className="min-h-screen flex justify-center items-center">
        {/* Container for restricting width */}
        <div className="container max-w-[1200px] mx-auto p-4">
          <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-8">
            {/* Left Column - Oversized Denims */}
            <a
              href="/product-page"
              className="relative aspect-[3/4] w-full overflow-hidden group"
            >
              <img
                src={denimImage}
                alt="Model wearing oversized denims"
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Scarlet Seduction Bodysuit */}
                  Bodysuit
                </h2>
              </div>
            </a>

            {/* Right Column */}
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Top Section - Absolut X HUEMN */}
              <div className="space-y-6 bg-white p-6 md:p-8 group">
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
                    Scarlet Seduction Bodysuit
                  </h1>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600 md:text-base">
                      8 Billion Individuals
                    </p>
                    <p className="text-sm text-gray-600 md:text-base">
                      8 Billion Unique Flavours
                    </p>
                  </div>
                </div>
                <a
                  href="/product-page"
                  className="inline-block bg-black px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-900"
                >
                  SHOP NOW
                </a>
              </div>

              {/* Bottom Section - Event Image */}
              <a
                href="/product-page"
                className="relative aspect-[4/3] w-full overflow-hidden bg-blue-900 group"
                style={{ marginTop: "auto" }}
              >
                <img
                  src={eventImage}
                  alt="People at social event"
                  className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
