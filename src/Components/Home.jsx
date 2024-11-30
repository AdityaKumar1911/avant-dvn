import React from "react";
import Banner from "./Banner/Banner";
import CollectionPage from "./Collections/TwoCollaction";
import FashionShowcase from "./Collections/FashionShowcase";
import VideoBanner from "./VideoBanner/VideoBanner";
import ShopPageb from "./Shoppage/Shoppage";
import OurNewArivals from "./OurNewArivals/OurNewArivals";
import Reels from "./ReelsSections/Reels";
import SlidingText from "./SlidingText/SlidingText";
import ProductBanner from "./Collections/ProductBanner";
// import Video1 from "../Assets/Videos/banner2.mp4";
import Footer from "./Footer/footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <SlidingText />
      <CollectionPage />
      <Reels />
      <FashionShowcase />
      <ProductBanner />
      <ShopPageb />
      <OurNewArivals />
      {/* <Reels /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
