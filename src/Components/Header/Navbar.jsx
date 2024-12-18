import { useState, useRef, useEffect } from "react";
import { Menu, X, ShoppingBag, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../../Assets/Logos/Avant Divine Website logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const navigate = useNavigate();
  const cartRef = useRef(null);
  const userMenuRef = useRef(null);
  const menuRef = useRef(null); // Ref for the hamburger menu
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [storedUser, setStoredUser] = useState(null);

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedUserData = JSON.parse(localStorage.getItem("user"));
        if (
          storedUserData &&
          typeof storedUserData.isLoggedIn !== "undefined"
        ) {
          setIsLoggedIn(storedUserData.isLoggedIn);
          setStoredUser(storedUserData);
          console.log("Stored User:", storedUserData);
          console.log("User Name:", storedUserData.name);
          if (storedUserData.isLoggedIn) {
            const response = await axios.get(
              `${process.env.REACT_APP_API_URL}/cart/user/${storedUserData._id}`
            );
            if (response.data.status) {
              setCartItems(response.data.data.cart.items);
              const total = response.data.data.cart.items.reduce(
                (sum, item) => sum + item.productId.price * item.quantity,
                0
              );
              setCartTotal(total);
            } else {
              console.error("Failed to fetch cart data");
            }
          }
        } else {
          console.warn("No valid isLoggedIn value found in localStorage");
        }
      } catch (error) {
        console.error(
          "Error parsing localStorage data or fetching cart data:",
          error
        );
      }
    };

    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      if (storedUser && storedUser.email) {
        console.log(storedUser.email);
        console.log(`${process.env.REACT_APP_API_URL}/auth/logout`);
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/auth/logout`,
          { email: storedUser.email }
        );

        // Log the full API response for debugging
        console.log("Logout API Response:", response.data);

        // Adjust the success condition based on API response
        if (
          response.data.success ||
          response.data.message === "Logout successful"
        ) {
          localStorage.clear();
          setIsUserMenuOpen(false);
          navigate("/login");
        } else {
          console.error("Logout failed:", response.data.message);
        }
      } else {
        console.error("No email found in localStorage");
      }
    } catch (error) {
      console.error("Error during logout request:", error);
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate("/checkoutpage");
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsUserMenuOpen(false);
  };

  const handleUserClick = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      toggleUserMenu();
    }
  };

  // Increment Quantity
  const incrementQuantity = async (productId) => {
    const item = cartItems.find((item) => item.productId._id === productId);
    const updatedQuantity = item.quantity + 1;

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/cart/update/${productId}`,
        { quantity: updatedQuantity }
      );
      if (response.data.status) {
        // Update local cart state
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.productId._id === productId
              ? { ...item, quantity: updatedQuantity }
              : item
          )
        );
        // Update total price
        const total = cartItems.reduce(
          (sum, item) => sum + item.productId.price * item.quantity,
          0
        );
        setCartTotal(total);
      }
    } catch (error) {
      console.error("Error incrementing quantity:", error);
    }
  };

  // Decrement Quantity
  const decrementQuantity = async (productId) => {
    const item = cartItems.find((item) => item.productId._id === productId);
    if (item.quantity > 1) {
      const updatedQuantity = item.quantity - 1;

      try {
        const response = await axios.put(
          `${process.env.REACT_APP_API_URL}/cart/update/${productId}`,
          { quantity: updatedQuantity }
        );
        if (response.data.status) {
          // Update local cart state
          setCartItems((prevItems) =>
            prevItems.map((item) =>
              item.productId._id === productId
                ? { ...item, quantity: updatedQuantity }
                : item
            )
          );
          // Update total price
          const total = cartItems.reduce(
            (sum, item) => sum + item.productId.price * item.quantity,
            0
          );
          setCartTotal(total);
        }
      } catch (error) {
        console.error("Error decrementing quantity:", error);
      }
    }
  };

  // Close menus if click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target) &&
        isCartOpen
      ) {
        setIsCartOpen(false);
      }
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target) &&
        isUserMenuOpen
      ) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartOpen, isUserMenuOpen]);

  return (
    <>
      <div className="h-[64px] w-full"></div>

      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-[64px]">
        <div className="flex items-center justify-between px-4 py-4 h-full">
          <button
            ref={menuRef} // Added ref for hamburger menu
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

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="block" onClick={closeMenu}>
              <img src={Logo} alt="AVANT DIVINE" className="w-auto h-20" />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <a href="/callus">
              <button className="hidden md:block hover:text-gray-600 transition-colors">
                Call Us
              </button>
            </a>

            <button
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Shopping cart"
              onClick={toggleCart}
            >
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 h-5 w-5 text-xs flex items-center justify-center bg-black text-white rounded-full">
                {cartItemCount}
              </span>
            </button>

            <button
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="User account"
              onClick={handleUserClick}
            >
              <User className="h-6 w-6" />
            </button>

            {isUserMenuOpen && (
              <div
                ref={userMenuRef}
                className="absolute right-0 mt-2  bg-white shadow-lg rounded-lg p-2"
                style={{ marginTop: "150px" }}
              >
                {isLoggedIn ? (
                  <>
                    <p className="px-4 py-2 text-gray-700">{storedUser.name}</p>
                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100 rounded-lg"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handleLogin}
                    className="w-full px-4 py-2 text-left text-blue-600 hover:bg-gray-100 rounded-lg"
                  >
                    Login
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-[240px] bg-white shadow-xl z-40 h-full p-4">
          <ul className="space-y-4" style={{ marginTop: "3.5rem" }}>
            <li>
              <Link
                to="/"
                className="block px-4 py-2 text-lg hover:bg-gray-100"
                onClick={closeMenu} // Close menu on click
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className="block px-4 py-2 text-lg hover:bg-gray-100"
                onClick={closeMenu} // Close menu on click
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/callus"
                className="block px-4 py-2 text-lg hover:bg-gray-100"
                onClick={closeMenu} // Close menu on click
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}

      <div
        ref={cartRef}
        id="cart-sidebar"
        className={`${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-ou`}
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
                  <div key={item._id} className="flex items-center">
                    <img
                      src={`${process.env.REACT_APP_IMAGE_URL}/${item.productId.images[0]}`}
                      alt={item.productId.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="ml-4 flex-1">
                      <h3 className="text-sm font-medium text-gray-900">
                        {item.productId.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Price: ₹{item.productId.price}
                      </p>
                      <p className="text-sm text-gray-600">
                        Quantity: {item.quantity}
                      </p>
                      <div className="flex items-center space-x-2">
                        {/* Decrement button */}
                        <button
                          onClick={() => decrementQuantity(item.productId._id)}
                          className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                          -
                        </button>
                        {/* Increment button */}
                        <button
                          onClick={() => incrementQuantity(item.productId._id)}
                          className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
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
              <p>₹{cartTotal.toLocaleString()}</p>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
