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
      isVideo: true, // Add a flag to differentiate videos
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
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Divine Spotlight
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative aspect-[9/16]">
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
                {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <PlayIcon className="w-16 h-16 text-white opacity-80" />
                </div> */}
              </div>
              {/* <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{reel.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img
                      src={reel.user.avatar}
                      alt={reel.user.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="text-sm text-gray-600">
                      {reel.user.name}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {reel.views} views
                  </span>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
