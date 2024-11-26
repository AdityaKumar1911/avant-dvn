import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router
import Img from "../../Assets/images/Avant Devine8757.jpg";

export default function WinterCollection() {
  return (
    <main className="min-h-screen mt-5">
      <section className="grid md:grid-cols-2 min-h-screen">
        {/* Image Section */}
        <div className="relative h-[60vh] md:h-screen w-full">
          <img
            src={Img}
            alt="Two models wearing pieces from the winter collection"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content Section */}
        <div className="px-6 py-12 md:p-16 lg:p-24 flex flex-col justify-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-wide mb-8">
              CLASSIC WINTER COLLECTION
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus,
              gravida orci, fringilla a. Ac sed eu fringilla odio mi. Consequat
              pharetra at magna imperdiet cursus ac faucibus sit libero.
              Ultricies quam nunc, lorem sit lorem urna, pretium aliquam ut. In
              vel, quis donec dolor id in. Pulvinar commodo mollis diam sed
              facilisis at cursus imperdiet cursus ac faucibus sit faucibus sit
              libero.
            </p>

            <Link
              to="/shop"
              className="inline-block bg-black text-white px-8 py-4 text-sm tracking-wider hover:bg-gray-900 transition-colors"
            >
              SHOP COLLECTION
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
