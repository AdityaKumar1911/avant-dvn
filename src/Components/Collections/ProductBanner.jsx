import React from "react";
import Bannerimg from "../../Assets/images/Avant Devine8988.jpg";

const Banner = () => {
  return (
    <section className="relative w-full h-[50vh] min-h-[400px] max-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={Bannerimg}
          alt="Red textured background with artisan craft"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-serif max-w-2xl mb-6">
          Wave Co ord
        </h1>
        <a
          href="/product-page"
          className="inline-flex h-10 items-center justify-center rounded-none px-6 text-sm font-medium bg-zinc-900 text-white hover:bg-zinc-800 transition-colors"
        >
          EXPLORE NOW
        </a>
      </div>
    </section>
  );
};

export default Banner;
