import React, { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLoader } from "../Loader/Loader";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { startLoader, stopLoader } = useLoader();

  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    addressLine: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("online");

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        // Retrieve user data from local storage
        const storedUserData = JSON.parse(localStorage.getItem("user"));

        if (!storedUserData || !storedUserData._id) {
          console.warn("User not logged in or no user ID found");
          return;
        }

        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/cart/user/${storedUserData._id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch cart items");
        }

        const data = await response.json();

        if (data.status && data.data?.cart?.items?.length > 0) {
          setCartItems(data.data.cart.items); // Set cart items
          setSubtotal(data.data.totalPrice); // Set total price
        } else {
          console.warn("No items found in the cart");
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  // Handle address form changes
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  // Update subtotal based on cart items and their quantities
  const updateSubtotal = () => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.productId.price * item.quantity,
      0
    );
    setSubtotal(total);
  };

  // Increment quantity
  const incrementQuantity = async (itemId) => {
    try {
      const item = cartItems.find((item) => item.productId._id === itemId);
      const updatedQuantity = item.quantity + 1;
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/cart/update/${item.productId._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId: item.productId._id,
            quantity: updatedQuantity,
          }),
        }
      );

      if (response.ok) {
        // Update the local state with the new quantity
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.productId._id === itemId
              ? { ...item, quantity: updatedQuantity }
              : item
          )
        );
        updateSubtotal(); // Recalculate subtotal
      } else {
        console.error("Failed to update quantity.");
      }
    } catch (error) {
      console.error("Error incrementing quantity:", error);
    }
  };

  // Decrement quantity
  const decrementQuantity = async (itemId) => {
    try {
      const item = cartItems.find((item) => item.productId._id === itemId);
      if (item.quantity > 1) {
        const updatedQuantity = item.quantity - 1;
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/cart/update/${item.productId._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              productId: item.productId._id,
              quantity: updatedQuantity,
            }),
          }
        );

        if (response.ok) {
          // Update the local state with the new quantity
          setCartItems((prevItems) =>
            prevItems.map((item) =>
              item.productId._id === itemId
                ? { ...item, quantity: updatedQuantity }
                : item
            )
          );
          updateSubtotal(); // Recalculate subtotal
        } else {
          console.error("Failed to update quantity.");
        }
      }
    } catch (error) {
      console.error("Error decrementing quantity:", error);
    }
  };

  // Handle form submission

  const checkPaymentStatus = async (transactionId) => {
    try {
      // Construct the status API URL with the transaction ID
      const statusApiUrl = `${process.env.REACT_APP_API_URL}/payment/status?id=${transactionId}`;

      // Make the API call to check payment status
      const response = await axios.get(statusApiUrl);

      // Handle the response
      if (response.data.success) {
        console.log("Payment status:", response.data);
        // Further logic based on payment status can be added here
      } else {
        console.error("Failed to fetch payment status:", response.data.message);
      }
    } catch (error) {
      // Log the error details
      console.error("Error checking payment status:", error.message || error);
    }
  };

  // Function to handle payment initiation based on selected method
  const initiateOrder = async () => {
    console.log("Clicked");

    // Check the payment method and call the appropriate function
    if (paymentMethod === "online") {
      initiatePhonePayPayment();
    } else if (paymentMethod === "cod") {
      initiateCOD();
    }
  };

  // Main function to handle payment initiation and status check
  const initiateCOD = async () => {
    console.log("Initiating Cash on Delivery...");
    startLoader();

    // Simulate a 3-second delay
    setTimeout(() => {
      stopLoader();
      navigate("/successfulpayment");
    }, 3000);
  };
  // Main function to handle payment initiation and status check
  const initiatePhonePayPayment = async () => {
    const storedUserData = JSON.parse(localStorage.getItem("user"));
    if (
      !address.fullName.trim() ||
      !address.phone.trim() ||
      !address.addressLine.trim() ||
      !address.city.trim() ||
      !address.state.trim() ||
      !address.postalCode.trim()
    ) {
      alert("Please fill in all address fields.");
      return;
    }

    // Validate phone number (10 digits)
    if (!/^\d{10}$/.test(address.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // Validate postal code (e.g., 6 digits)
    if (!/^\d{6}$/.test(address.postalCode)) {
      alert("Please enter a valid 6-digit postal code.");
      return;
    }

    try {
      // Prepare the request payload
      const requestData = {
        transactionId: `uniqueTransaction${Date.now()}`, // Generate a unique transaction ID
        amount: subtotal, // Use dynamic subtotal
        userId: storedUserData._id, // Use userId from localStorage
        address: {
          fullName: address.fullName,
          phoneNumber: address.phone,
          address: address.addressLine,
          city: address.city,
          state: address.state,
          postalCode: address.postalCode,
        },
      };

      // Log the data being sent
      console.log("Request Data:", requestData);

      // Make the API call to create an order
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/payment/create-order`,
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle the response
      if (response.data.success) {
        console.log("Order created successfully:", response.data);

        // Extract the merchantTransactionId
        const transactionId = response.data.data?.merchantTransactionId;

        if (transactionId) {
          console.log("Checking payment status for:", transactionId);
          await checkPaymentStatus(transactionId);
        } else {
          console.error("No transaction ID found in response");
        }

        // Handle redirection if required
        const redirectInfo =
          response.data.data?.instrumentResponse?.redirectInfo;
        if (redirectInfo && redirectInfo.url) {
          if (redirectInfo.method === "POST") {
            const form = document.createElement("form");
            form.action = redirectInfo.url;
            form.method = "POST";
            document.body.appendChild(form);
            form.submit();
          } else if (redirectInfo.method === "GET") {
            window.location.href = redirectInfo.url;
          }
        }
      } else {
        console.error("Order creation failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error creating payment order:", error.message || error);
    }
  };

  // Update subtotal whenever cart items change
  useEffect(() => {
    updateSubtotal();
  }, [cartItems]);

  if (cartItems.length === 0) {
    return <p>Loading cart items...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout Page</h1>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Your Cart
          </h2>
          {cartItems.map((item) => (
            <div
              key={item.productId._id}
              className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={`${process.env.REACT_APP_IMAGE_URL}/${item.productId.images[0]}`}
                  alt={item.productId.name}
                  className="rounded-lg w-20 h-20 object-cover"
                />
                <div>
                  <h3 className="font-medium text-lg text-gray-800">
                    {item.productId.name}
                  </h3>
                  <p className="text-gray-600">
                    Price: {item.productId.price} INR
                  </p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => incrementQuantity(item.productId._id)}
                  className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200"
                >
                  +
                </button>
                <button
                  onClick={() => decrementQuantity(item.productId._id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200"
                >
                  -
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4">
            <p className="flex justify-between text-lg text-gray-800">
              <span>Subtotal:</span>
              <span>{subtotal} INR</span>
            </p>
          </div>
        </div>

        {/* Address Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Shipping Address
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault(); // Prevent default submission
              initiatePhonePayPayment(); // Trigger payment
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={address.fullName}
                  onChange={handleAddressChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={address.phone}
                  onChange={handleAddressChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your phone number"
                  pattern="^\d{10}$" // Enforce a 10-digit phone number
                  title="Phone number must be 10 digits"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  name="addressLine"
                  value={address.addressLine}
                  onChange={handleAddressChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your address"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={address.city}
                  onChange={handleAddressChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your city"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  value={address.state}
                  onChange={handleAddressChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your state"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Postal Code
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={address.postalCode}
                  onChange={handleAddressChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Enter your postal code"
                  pattern="^\d{6}$" // Enforce a 6-digit postal code
                  title="Postal code must be 6 digits"
                  required
                />
              </div>
            </div>
          </form>
        </div>

        {/* Payment Method */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Payment Method
          </h2>
          <div className="flex items-center space-x-6">
            <label className="flex items-center text-gray-700">
              <input
                type="radio"
                name="paymentMethod"
                value="online"
                checked={paymentMethod === "online"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
              />
              Online
            </label>

            <label className="flex items-center text-gray-700">
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
              />
              Cash on Delivery
            </label>
          </div>
        </div>
        {/* Button to trigger the order initiation */}
        <button
          onClick={initiateOrder}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 w-full transition-colors duration-200"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
