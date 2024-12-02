import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BannerImage from "../../Assets/images/Avant Divine Website Banner copy.jpg";
import Banner2Img from "../../Assets/images/Avant Divine Website Banner2 copy.jpg";

// MobileBanner images
import Mbanner from "../../Assets/images/MobileBanner/Avant Divine Website Mobile Banner copy.jpg";
import Mbanner2 from "../../Assets/images/MobileBanner/Avant Divine Website Mobile Banner2 copy avn.jpg";

const bannerData = [
  {
    type: "image",
    src: BannerImage,
    alt: "Banner Image 1",
    text: "Summer Collection",
  },
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
  const [isMobile, setIsMobile] = useState(false); // State to detect if on mobile view

  // Update the isMobile state when the window size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Change breakpoint if necessary
    };

    handleResize(); // Check size initially
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener on unmount
    };
  }, []);

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
      {/* Show Mobile Banners on Mobile View */}
      {isMobile ? (
        <>
          <div
            key={0}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              0 === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={Mbanner}
              alt="Mobile Banner 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            key={1}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              1 === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={Mbanner2}
              alt="Mobile Banner 2"
              className="w-full h-full object-cover"
            />
          </div>
        </>
      ) : (
        // Show Desktop Banners on larger screens
        bannerData.map((slide, index) => (
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
          </div>
        ))
      )}

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
