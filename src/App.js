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
import BodysuitP from "./Components/ProductPage/BodysuitP";
import RoseNoir from "./Components/ProductPage/RoseNoir";
import Chromepulsejeans from "./Components/ProductPage/Chromepulsejeans";
import Wave from "./Components/ProductPage/WaveCoord";
import Fadedecho from "./Components/ProductPage/FadedEcho";
import Footer from "./Components/Footer/footer"; // Corrected import
import SuccessfulPayment from "./Components/SuccessfulPayment/SuccessfulPayment";
import TermsAndConditions from "./Components/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./Components/TermsAndConditions/PrivacyPolicy";
import ReturnsandExchange from "./Components/TermsAndConditions/ReturnsandExchange";
import ShippingAndDelivery from "./Components/TermsAndConditions/ShippingDelivery";

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<CollectionsSection />} />
            <Route path="/product-page" element={<ProductPage />} />
            <Route path="/bodysuit" element={<Bodysuit />} />
            <Route path="/videobanner" element={<VideoBanner />} />
            <Route path="/checkoutpage" element={<CheckoutPage />} />
            <Route path="/buynow" element={<BuyNowPage />} />
            <Route path="/bodysuitp" element={<BodysuitP />} />
            <Route path="/rosenoir" element={<RoseNoir />} />
            <Route path="/chromepulsejeans" element={<Chromepulsejeans />} />
            <Route path="/wave" element={<Wave />} />
            <Route path="/fadedecho" element={<Fadedecho />} />
            <Route path="/successfulpayment" element={<SuccessfulPayment />} />
            <Route
              path="/termsAndConditions"
              element={<TermsAndConditions />}
            />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route
              path="/returnsandexchange"
              element={<ReturnsandExchange />}
            />
            <Route
              path="/shippinganddelivery"
              element={<ShippingAndDelivery />}
            />
          </Routes>
          <Footer /> {/* This will appear on all pages */}
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
