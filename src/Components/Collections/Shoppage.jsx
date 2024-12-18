import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router
import Img from "../../Assets/images/Avant-Devine8797.jpg";

export default function WinterCollection() {
  const FadedEchoTeeProductId = "676178eb8dcbd922cb4e616a";
  return (
    <main className="min-h-screen mt-5">
      <section className="grid md:grid-cols-2 min-h-screen">
        {/* Image Section with Link */}
        <div className="relative h-[60vh] md:h-screen w-full">
          <Link to={`/product-details/${FadedEchoTeeProductId}`}>
            <img
              src={Img}
              alt="Two models wearing pieces from the winter collection"
              className="object-cover w-full h-full"
            />
          </Link>
        </div>

        {/* Content Section */}
        <div className="px-6 py-12 md:p-16 lg:p-10 flex flex-col justify-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-wide mb-8">
              Faded Echo Tee
            </h1>

            <p
              className="text-gray-600 text-lg leading-relaxed mb-12"
              style={{ textAlign: "justify" }}
            >
              The Faded Echo Tee is where minimalism meets character, with
              ultra-soft French terry cotton fabric and a faded print that adds
              depth and intrigue. This classic crew-neck tee offers effortless
              comfort and a touch of artistic expression, perfect for pairing
              with denim, joggers, or layering under a jacket. Its vintage
              appeal combined with modern versatility makes it a go-to piece for
              any occasion, whether you're hitting the town or keeping it
              low-key. A creation meticulously crafted by the artisans of Avant
              Divine, this tee is a bold, wearable statement of individuality.
            </p>

            <Link
              to={`/product-details/${FadedEchoTeeProductId}`}
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
