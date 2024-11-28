import { useState, useRef, useEffect } from "react";
import { Menu, X, ShoppingBag, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext/CartContext"; // Adjust path as needed
import Logo from "../../Assets/Logos/Avant Divine Website logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { cartItems, updateCartItemQuantity } = useCart(); // Assuming you have a function to update cart quantity
  const navigate = useNavigate(); // For navigation

  const cartRef = useRef(null); // Add this line to create a reference for the cart
  const handleOutsideClick = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setIsCartOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener to handle click outside of cart
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      // Clean up the event listener
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Increment and decrement quantity
  const handleQuantityChange = (id, action) => {
    if (action === "increment") {
      updateCartItemQuantity(id, 1); // Increment quantity
    } else if (action === "decrement") {
      updateCartItemQuantity(id, -1); // Decrement quantity
    }
  };

  const handleCheckout = () => {
    setIsCartOpen(false); // Close the cart modal
    navigate("/checkoutpage"); // Navigate to the checkout page
  };

  return (
    <>
      {/* Placeholder div to block navbar space */}
      <div className="h-[64px] w-full"></div>

      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-[64px]">
        <div className="flex items-center justify-between px-4 py-4 h-full">
          {/* Left - Menu Icon */}
          <button
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Center - Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="block">
              <img
                src={Logo} // Replace this with the actual path to your logo image
                alt="AVANT DIVINE"
                className="w-auto h-20" // Adjust width and height as per your needs
              />
            </Link>
          </div>

          {/* Right - Call Us, Cart, User */}
          <div className=" gapcont flex  items-center gap-4">
            <button className="hidden md:block hover:text-gray-600 transition-colors">
              Call Us
            </button>

            <button
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Shopping cart"
              onClick={toggleCart}
            >
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 h-5 w-5 text-xs flex items-center justify-center bg-black text-white rounded-full">
                {cartItemCount} {/* Show total cart item count */}
              </span>
            </button>

            <button
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="User account"
            >
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Menu Dropdown (Beside Navbar) */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-[240px] bg-white shadow-xl z-40 h-full p-4">
          <ul className="space-y-4 " style={{ marginTop: "3.5rem" }}>
            <li>
              <Link
                to="/"
                className="block px-4 py-2 text-lg hover:bg-gray-100"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block px-4 py-2 text-lg hover:bg-gray-100"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-4 py-2 text-lg hover:bg-gray-100"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block px-4 py-2 text-lg hover:bg-gray-100"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Cart Modal on Right Side */}
      <div
        ref={cartRef} // Reference for cart sidebar
        id="cart-sidebar"
        className={`${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out`}
      >
        <div className="h-full flex flex-col">
          <div className="px-4 py-6 bg-gray-100" style={{ paddingTop: "13px" }}>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Your Cart</h2>
              <button
                onClick={toggleCart}
                className="text-gray-800 hover:text-gray-900 focus:outline-none"
              >
                <span className="sr-only">Close cart</span>
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-6">
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center">
                    <img
                      src={item.image || "/placeholder.svg?height=64&width=64"}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="ml-4 flex-1">
                      <h3 className="text-sm font-medium text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600">Size: {item.size}</p>
                      <p className="text-sm text-gray-600">
                        Color: {item.color}
                      </p>
                      <p className="text-sm text-gray-600">
                        Price: ₹{item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2">
                        <button
                          className="px-2 py-1 bg-gray-200 rounded-md"
                          onClick={() =>
                            handleQuantityChange(item.id, "decrement")
                          }
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="px-2 py-1 bg-gray-200 rounded-md"
                          onClick={() =>
                            handleQuantityChange(item.id, "increment")
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="px-4 py-6 bg-gray-100">
            <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
              <p>Subtotal</p>
              <p>₹{totalPrice.toLocaleString()}</p>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-500 transition-colors"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
