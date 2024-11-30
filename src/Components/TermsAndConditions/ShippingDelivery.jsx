import React from 'react';

export default function ShippingAndDelivery() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-3xl font-bold text-gray-900">Shipping & Delivery</h1>
        </div>
        <div className="border-t border-gray-200">
          <nav className="px-4 py-3 sm:px-6 bg-gray-50">
            <ul className="flex flex-wrap gap-4 text-sm font-medium text-gray-600">
              <li><a href="#dispatch-time" className="hover:text-gray-900">Dispatch Time</a></li>
              <li><a href="#address-details" className="hover:text-gray-900">Address Details</a></li>
              <li><a href="#order-confirmation" className="hover:text-gray-900">Order Confirmation</a></li>
              <li><a href="#delivery-responsibility" className="hover:text-gray-900">Delivery Responsibility</a></li>
            </ul>
          </nav>
          <div className="px-4 py-5 sm:p-6 space-y-8">
            <section id="dispatch-time" className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Dispatch Time</h2>
              <p className="text-gray-600">
                Orders are dispatched within 10 days of placement. Please note that this is the time it takes for us to process and ship your order, not the total delivery time.
              </p>
            </section>

            <section id="address-details" className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Address Details</h2>
              <p className="text-gray-600">
                Please ensure you complete your address details correctly when placing your order. Incorrect or incomplete address information may lead to delays or failed deliveries.
              </p>
              <p className="text-gray-600">
                If you fail to take delivery of the goods, we may at our discretion charge you for the additional shipping cost.
              </p>
            </section>

            <section id="order-confirmation" className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Order Confirmation and Status</h2>
              <p className="text-gray-600">
                You will receive an email receipt when you complete the purchase process at avantdivine.com. You can request a full paper VAT receipt when placing your order if required.
              </p>
              <p className="text-gray-600">
                For status updates on your orders, please email us at <a href="mailto:contact@avantdivine.com" className="text-blue-600 hover:underline">contact@avantdivine.com</a>.
              </p>
            </section>

            <section id="delivery-responsibility" className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Delivery Responsibility</h2>
              <p className="text-gray-600">
                We are not responsible for any delays caused by third-party delivery agencies and/or due to time required for statutory clearances during the delivery process.
              </p>
              <p className="text-gray-600">
                While we strive to ensure timely delivery, please understand that certain factors are beyond our control. We appreciate your patience and understanding in such situations.
              </p>
            </section>

            <section id="contact" className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about our Shipping & Delivery policy, please contact us at:
              </p>
              <p className="text-gray-600 font-medium">
                <a href="mailto:contact@avantdivine.com" className="text-blue-600 hover:underline">contact@avantdivine.com</a>
              </p>
            </section>
          </div>
        </div>
        <div className="px-4 py-4 sm:px-6 bg-gray-50 border-t border-gray-200">
          <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
