import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Header/Navbar";
import { CartProvider } from "./Components/CartContext/CartContext";
import CollectionsSection from "./Components/Collections/Collections";
import ProductPage from "./Components/ProductPage/ProductPage";
import Bodysuit from "./Components/ProducCollactions/Bodysuit";
import VideoBanner from "./Components/VideoBanner/VideoBanner";
import CheckoutPage from "./Components/Checkout/Checkout";
import BuyNowPage from "./Components/Checkout/BuyNow";

function App() {
  return (
    <CartProvider>
      {" "}
      {/* Wrap everything that needs context access */}
      <Router>
        <div>
          <Navbar />
          <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<CollectionsSection />} />
            <Route path="/product-page" element={<ProductPage />} />
            <Route path="/bodysuit" element={<Bodysuit />} />
            <Route path="/videobanner" element={<VideoBanner />} />
            <Route path="/checkoutpage" element={<CheckoutPage />} />
            <Route path="/buynow" element={<BuyNowPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
