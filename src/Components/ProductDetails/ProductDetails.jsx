import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Sizegide from "../../Assets/images/sizeguide.png";
import { useLoader } from "../Loader/Loader";


export default function ProductDetails() {
  const { productId } = useParams(); // Get the productId from the URL
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("PRODUCT INFORMATION");
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false); // State for popup visibility
  const { startLoader, stopLoader } = useLoader();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
        console.log("Fetched product data:", JSON.stringify(data, null, 2));
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (productId) {
      fetchProduct(); // Fetch the product details using the productId
    }
  }, [productId]); // Fetch product details whenever the productId changes

  // Handle scroll and change image based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get the vertical scroll position
      const totalScrollHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollPosition / totalScrollHeight) * 100;

      // Change image based on scroll percentage (you can adjust the logic for more smooth transitions)
      const imageIndex = Math.floor(
        (scrollPercentage / 100) * (product?.images?.length || 1)
      );
      setSelectedImage(imageIndex);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [product]);

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleAddToCart = async () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    // Start the loader
    startLoader();

    try {
      // Retrieve user data from local storage
      const storedUserData = JSON.parse(localStorage.getItem("user"));

      if (!storedUserData || !storedUserData._id) {
        window.location.href = "/login"; // Redirects to the login page
        stopLoader(); // Stop the loader if user is not logged in
        return;
      }

      const userId = storedUserData._id;
      const cartItem = {
        userId: userId,
        productId: product._id,
        quantity: quantity,
        size: selectedSize,
      };

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/cart/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cartItem),
        }
      );

      if (response.ok) {
        console.log("Your item has been successfully added to the cart!");
      } else {
        const errorData = await response.json();
        alert(`Error adding item to the cart: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
      alert("An error occurred while adding the item to the cart.");
    } finally {
      // Stop the loader after the API request (whether success or failure)
      stopLoader();
    }
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    // Add your "buy now" logic here (e.g., redirect to checkout or initiate the purchase)
  };

  const handleToggleSizeGuide = () => {
    setIsSizeGuideOpen(!isSizeGuideOpen); // Toggle popup visibility
  };

  if (!product) return <div>Loading...</div>;

  const sizes = product.sizes;
  const tabs = ["PRODUCT INFORMATION", "SHIPPING & RETURNS"];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Image Gallery */}
      <div className="relative">
        <div className="absolute left-0 top-0 flex flex-col gap-4">
          {product.images &&
            product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-16 h-16 border ${
                  selectedImage === index ? "border-black" : "border-gray-200"
                }`}
              >
                <img
                  src={`${process.env.REACT_APP_IMAGE_URL}/${img}`}
                  alt={`Product Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
        </div>
        <div className="ml-20">
          <img
            src={`${process.env.REACT_APP_IMAGE_URL}/${product.images[selectedImage]}`}
            alt={`Main Image of ${product.name}`}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-medium">{product.name}</h1>
          <p className="mt-2 text-gray-600" style={{ textAlign: "justify" }}>
            {product.description}
          </p>
        </div>

        {/* Size Selection */}
        <div>
          <h2 className="text-sm font-medium mb-2">Select Size</h2>
          <div className="flex gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-12 h-12 border ${
                  selectedSize === size
                    ? "border-black bg-black text-white"
                    : "border-gray-200 hover:border-black"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Size Guide Button */}
        <div>
          <button
            onClick={handleToggleSizeGuide}
            className="text-sm text-blue-600 hover:underline mt-4"
          >
            Size Guide
          </button>
        </div>

        {/* Quantity Selection */}
        <div>
          <h2 className="text-sm font-medium mb-2">Quantity</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={handleDecreaseQuantity}
              className="w-10 h-10 bg-gray-200 text-black text-lg flex justify-center items-center border border-gray-300 hover:bg-gray-300"
            >
              -
            </button>
            <p className="text-lg">{quantity}</p>
            <button
              onClick={handleIncreaseQuantity}
              className="w-10 h-10 bg-gray-200 text-black text-lg flex justify-center items-center border border-gray-300 hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>

        {/* Price and Action Buttons */}
        <div className="space-y-4">
          <p className="text-xl">
            ₹{(product.price * quantity).toLocaleString()}
          </p>
          <button
            onClick={handleAddToCart}
            className="w-full bg-[#14161A] text-white py-3 px-4 hover:bg-black transition-colors"
          >
            ADD TO CART
          </button>
          <Link to="/checkoutpage">
            <button
              className="w-full bg-red-600 text-white py-3 px-4 hover:bg-red-700 transition-colors"
              style={{ marginTop: "10px" }}
            >
              BUY NOW
            </button>
          </Link>
        </div>

        {/* Product Information Tabs */}
        <div className="pt-8">
          <div className="flex border-b">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm ${
                  activeTab === tab
                    ? "border-b-2 border-black"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="pt-4">
            {activeTab === "PRODUCT INFORMATION" ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Material</p>
                    <p className="text-gray-600">
                      {product.productInfo.material}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Weight</p>
                    <p className="text-gray-600">
                      {product.productInfo.weight}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Country of origin</p>
                    <p className="text-gray-600">
                      {product.productInfo.countryOfOrigin}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Dimensions</p>
                    <p className="text-gray-600">
                      {product.productInfo.dimensions}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Type</p>
                    <p className="text-gray-600">{product.productInfo.type}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-sm text-gray-600">
                <p>{product.shippingAndReturns}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Size Guide Popup */}
      {isSizeGuideOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={handleToggleSizeGuide}
        >
          <div
            className="bg-white p-6  max-w-full relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <button
              onClick={handleToggleSizeGuide}
              className="absolute top-2 right-2 text-xl text-black"
            >
              X
            </button>
            <img src={Sizegide} alt="Size Guide" className="w-full" />
          </div>
        </div>
      )}
    </div>
  );
}
