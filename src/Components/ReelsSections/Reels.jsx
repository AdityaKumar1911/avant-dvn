import React from "react";
import { PlayIcon } from "lucide-react";
import Reels1 from "../../Assets/Videos/AVANT DIVINE 2_2.mp4";
import Reels2 from "../../Assets/Videos/AVANT DIVINE 3_1.mp4";
import Reels3 from "../../Assets/Videos/AVANT DIVINE 5 Final.mp4";
import Reels4 from "../../Assets/Videos/AVANT DIVINE REEL 1_7.mp4";

export default function ReelsSection() {
  const reels = [
    {
      id: 1,
      thumbnail: Reels1,
      title: "Summer Fashion Trends",
      views: "1.2M",
      user: {
        name: "FashionGuru",
        avatar: "/placeholder.svg",
      },
      isVideo: true,
    },
    {
      id: 2,
      thumbnail: Reels2,
      title: "Streetwear Lookbook",
      views: "890K",
      user: {
        name: "UrbanStyler",
        avatar: "/placeholder.svg",
      },
      isVideo: true,
    },
    {
      id: 3,
      thumbnail: Reels3,
      title: "Accessories Must-Haves",
      views: "650K",
      user: {
        name: "AccessoryQueen",
        avatar: "/placeholder.svg",
      },
      isVideo: true,
    },
    {
      id: 4,
      thumbnail: Reels4,
      title: "Sustainable Fashion",
      views: "1.5M",
      user: {
        name: "EcoChic",
        avatar: "/placeholder.svg",
      },
      isVideo: true,
    },
  ];

  return (
    <section className="bg-gray-100 py-12 w-full">
      <div className="container mx-auto px-4 w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Divine Spotlight
        </h2>
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="bg-white rounded-lg overflow-hidden shadow-md w-full"
            >
              <div className="relative aspect-[9/16] w-full">
                {reel.isVideo ? (
                  <video
                    src={reel.thumbnail}
                    className="object-cover w-full h-full"
                    controls={false}
                    autoPlay
                    muted
                    loop
                  ></video>
                ) : (
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Horizontal scroll container for mobile view */}
        <div className="flex sm:hidden overflow-x-scroll scrollbar-hide space-x-4">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="bg-white rounded-lg overflow-hidden shadow-md min-w-[80%] sm:min-w-0"
            >
              <div className="relative aspect-[9/16] w-full">
                {reel.isVideo ? (
                  <video
                    src={reel.thumbnail}
                    className="object-cover w-full h-full"
                    controls={false}
                    autoPlay
                    muted
                    loop
                  ></video>
                ) : (
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
