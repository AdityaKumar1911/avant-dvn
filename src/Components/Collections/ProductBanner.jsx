import React from "react";
import { Link } from "react-router-dom";
import Bannerimg from "../../Assets/images/Avant-Devine8876.jpg";

const Banner = () => {
  const WaveCoordProductId = "67611d6a19371897305d7d6d";

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Clickable Link */}
      <Link
        to={`/product-details/${WaveCoordProductId}`}
        className="absolute inset-0 w-full h-full"
        style={{ display: "block" }} // Ensures the Link covers the full area
      >
        <img
          src={Bannerimg}
          alt="Red textured background with artisan craft"
          className="object-cover w-full h-full"
        />
      </Link>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-serif max-w-2xl mb-6">
          Wave Co ord
        </h1>
        <Link
          to={`/product-details/${WaveCoordProductId}`}
          className="inline-flex h-10 items-center justify-center rounded-none px-6 text-sm font-medium bg-zinc-900 text-white hover:bg-zinc-800 transition-colors pointer-events-auto"
        >
          EXPLORE NOW
        </Link>
      </div>
    </section>
  );
};

export default Banner;
