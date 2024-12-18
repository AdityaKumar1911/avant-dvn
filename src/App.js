import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Header/Navbar";
import { CartProvider } from "./Components/CartContext/CartContext";
import CollectionsSection from "./Components/Collections/Collections";
import Bodysuit from "./Components/ProducCollactions/Bodysuit";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import VideoBanner from "./Components/VideoBanner/VideoBanner";
import CheckoutPage from "./Components/Checkout/Checkout";
import BuyNowPage from "./Components/Checkout/BuyNow";
import Footer from "./Components/Footer/footer";
import SuccessfulPayment from "./Components/SuccessfulPayment/SuccessfulPayment";
import TermsAndConditions from "./Components/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./Components/TermsAndConditions/PrivacyPolicy";
import ReturnsandExchange from "./Components/TermsAndConditions/ReturnsandExchange";
import ShippingAndDelivery from "./Components/TermsAndConditions/ShippingDelivery";
import SignUp from "./Components/LoginSignup/Signup";
import Login from "./Components/LoginSignup/Login";
import CallUs from "./Components/CallUs/CallUs";
import AboutPage from "./Components/AboutUs/AboutUs";
import { LoaderProviderComponent } from "./Components/Loader/Loader";

function App() {
  return (
    <LoaderProviderComponent>
      <CartProvider>
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collections" element={<CollectionsSection />} />
              <Route path="/bodysuit" element={<Bodysuit />} />
              <Route path="/videobanner" element={<VideoBanner />} />
              <Route path="/checkoutpage" element={<CheckoutPage />} />
              <Route path="/buynow" element={<BuyNowPage />} />
              <Route
                path="/product-details/:productId"
                element={<ProductDetails />}
              />
              <Route path="/aboutus" element={<AboutPage />} />
              <Route
                path="/successfulpayment"
                element={<SuccessfulPayment />}
              />
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
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/callus" element={<CallUs />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </LoaderProviderComponent>
  );
}

export default App;
