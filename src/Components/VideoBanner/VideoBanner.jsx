// BannerPage.js
import React from "react";
import Video1 from "../../Assets/Videos/banner2.mp4";
const BannerPage = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Video Background */}
      <video
        className=" w-full h-full object-cover"
        src={Video1} // Replace with your video file path
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          Welcome to Our Platform
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-6">
          Experience immersive visuals and engaging content.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded hover:bg-blue-700 transition duration-300">
          Get Started
        </button>
      </div> */}
    </div>
  );
};

export default BannerPage;
