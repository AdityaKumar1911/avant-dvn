import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router
import Img from "../../Assets/images/Avant Devine8797.jpg";

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
              Faded Echo Tee
            </h1>

            <p
              className="text-gray-600 text-lg leading-relaxed mb-12"
              style={{ textAlign: "justify" }}
            >
              Discover effortless style with our relaxed fit washed dye T-shirt,
              where modern design meets bold expression. Crafted from premium
              fabric, this T-shirt features a unique washed dye finish that
              gives it a soft, lived-in feel and a rich, vintage-inspired color
              palette. The relaxed fit ensures comfort and ease, making it a
              go-to piece for any casual day out.
              <br />
              The standout feature is the striking motif of a face emblazoned on
              the back , a statement of individuality and artistic flair.
              Complemented by subtle branding, this T-shirt embodies the spirit
              of Avant Divine—where fashion is a form of visual storytelling.
            </p>

            <Link
              to="/fadedecho"
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
