import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BannerImage from "../../Assets/images/Avant Divine Website Banner copy.jpg";
import Banner2Img from "../../Assets/images/Avant Divine Website Banner2 copy.jpg";

const bannerData = [
  {
    type: "image",
    src: BannerImage,
    alt: "Banner Image 1",
    text: "Summer Collection",
  },
  // {
  //   type: "video",
  //   src: "https://example.com/video.mp4",
  //   text: "New Arrivals",
  // },
  {
    type: "image",
    src: Banner2Img,
    alt: "Banner Image 2",
    text: "Exclusive Deals",
  },
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showButtons, setShowButtons] = useState(false); // State to hide/show buttons

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerData.length) % bannerData.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {bannerData.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.type === "image" ? (
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              src={slide.src}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
            />
          )}
          {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
            <h2 className="text-4xl font-bold mb-4">{slide.text}</h2>
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
              Shop Now
            </button>
          </div> */}
        </div>
      ))}

      {/* Conditionally render the buttons based on the showButtons state */}
      {showButtons && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </>
      )}
    </div>
  );
}
