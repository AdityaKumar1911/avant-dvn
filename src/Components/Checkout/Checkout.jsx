import React, { useState } from "react";
import { useCart } from "../CartContext/CartContext"; // Adjust the path based on your project structure
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cartItems, removeItemFromCart, calculateCartSubtotal } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    phone: "",
    upiId: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    phone: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    upiId: "",
  });

  const handleRemove = (id) => {
    removeItemFromCart(id); // Call the remove function from CartContext
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let validationErrors = {};

    // Address Validation
    if (!formData.name) validationErrors.name = "Name is required";
    if (!formData.streetAddress)
      validationErrors.streetAddress = "Street address is required";
    if (!formData.city) validationErrors.city = "City is required";
    if (!formData.state) validationErrors.state = "State is required";
    if (!formData.postalCode)
      validationErrors.postalCode = "Postal code is required";
    if (!formData.country) validationErrors.country = "Country is required";
    if (!formData.phone) validationErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      validationErrors.phone = "Phone number must be 10 digits";

    // Payment method validation
    if (paymentMethod === "card") {
      if (!formData.cardNumber) {
        validationErrors.cardNumber = "Card number is required";
      } else if (!/^\d{16}$/.test(formData.cardNumber)) {
        validationErrors.cardNumber = "Card number must be 16 digits";
      }

      if (!formData.expirationDate) {
        validationErrors.expirationDate = "Expiration date is required";
      }

      if (!formData.cvv) {
        validationErrors.cvv = "CVV is required";
      } else if (!/^\d{3}$/.test(formData.cvv)) {
        validationErrors.cvv = "CVV must be 3 digits";
      }
    } else if (paymentMethod === "upi" && !formData.upiId) {
      validationErrors.upiId = "UPI ID is required";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with payment submission
      console.log("Form submitted successfully", formData);

      // Redirect to success page

      navigate("/successfulpayment");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Checkout Page</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cart Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between mb-4 pb-4 border-b"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-md mr-4"
                      style={{ width: "80px", height: "80px" }}
                    />
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-600">Price : {item.price}</p>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
              <div className="mt-4">
                <p className="flex justify-between">
                  <span>Subtotal (INR):</span>
                  <span>{calculateCartSubtotal()} INR</span>
                </p>
              </div>
            </div>

            {/* Payment Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Payment</h2>
              <form onSubmit={handleSubmit}>
                {/* Address Fields */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs">{errors.name}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your street address"
                  />
                  {errors.streetAddress && (
                    <p className="text-red-500 text-xs">
                      {errors.streetAddress}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your city"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-xs">{errors.city}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your state"
                  />
                  {errors.state && (
                    <p className="text-red-500 text-xs">{errors.state}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your postal code"
                  />
                  {errors.postalCode && (
                    <p className="text-red-500 text-xs">{errors.postalCode}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your country"
                  />
                  {errors.country && (
                    <p className="text-red-500 text-xs">{errors.country}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs">{errors.phone}</p>
                  )}
                </div>

                {/* Payment Method */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">
                    Payment Method
                  </label>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="card"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={handlePaymentMethodChange}
                    />
                    <label htmlFor="card" className="ml-2">
                      Card
                    </label>
                    <input
                      type="radio"
                      id="upi"
                      name="paymentMethod"
                      value="upi"
                      checked={paymentMethod === "upi"}
                      onChange={handlePaymentMethodChange}
                      className="ml-4"
                    />
                    <label htmlFor="upi" className="ml-2">
                      UPI
                    </label>
                    <input
                      type="radio"
                      id="cod"
                      name="paymentMethod"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={handlePaymentMethodChange}
                      className="ml-4"
                    />
                    <label htmlFor="cod" className="ml-2">
                      Cash on Delivery
                    </label>
                  </div>
                </div>

                {/* Conditional Rendering Based on Payment Method */}
                {paymentMethod === "card" && (
                  <>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className="w-full border rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter your card number"
                      />
                      {errors.cardNumber && (
                        <p className="text-red-500 text-xs">
                          {errors.cardNumber}
                        </p>
                      )}
                    </div>

                    <div className="flex gap-4">
                      <div className="mb-4 w-1/2">
                        <label className="block text-sm font-medium mb-1">
                          Expiration Date
                        </label>
                        <input
                          type="text"
                          name="expirationDate"
                          value={formData.expirationDate}
                          onChange={handleInputChange}
                          className="w-full border rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
                          placeholder="MM/YY"
                        />
                        {errors.expirationDate && (
                          <p className="text-red-500 text-xs">
                            {errors.expirationDate}
                          </p>
                        )}
                      </div>
                      <div className="mb-4 w-1/2">
                        <label className="block text-sm font-medium mb-1">
                          CVV
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          className="w-full border rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
                          placeholder="CVV"
                        />
                        {errors.cvv && (
                          <p className="text-red-500 text-xs">{errors.cvv}</p>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {paymentMethod === "upi" && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      UPI ID
                    </label>
                    <input
                      type="text"
                      name="upiId"
                      value={formData.upiId}
                      onChange={handleInputChange}
                      className="w-full border rounded-md p-2 focus:ring-2 focus:ring-indigo-500"
                      placeholder="Enter your UPI ID"
                    />
                    {errors.upiId && (
                      <p className="text-red-500 text-xs">{errors.upiId}</p>
                    )}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-indigo-500 text-white font-medium py-2 rounded-md hover:bg-indigo-600"
                >
                  Pay Now
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
