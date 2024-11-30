import React from "react";

export default function ReturnsAndExchange() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Returns and Exchange Policy
          </h1>
        </div>
        <div className="border-t border-gray-200">
          <nav className="px-4 py-3 sm:px-6 bg-gray-50">
            <ul className="flex flex-wrap gap-4 text-sm font-medium text-gray-600">
              <li>
                <a href="#general-policy" className="hover:text-gray-900">
                  General Policy
                </a>
              </li>
              <li>
                <a href="#conditions" className="hover:text-gray-900">
                  Conditions
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-gray-900">
                  Return Process
                </a>
              </li>
            </ul>
          </nav>
          <div className="px-4 py-5 sm:p-6 space-y-8">
            <section id="general-policy" className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                General Return and Exchange Policy
              </h2>
              <p className="text-gray-600">
                We may accept returns for account credit only. For this purpose
                we must receive the merchandise within 7 days from the date it
                was shipped to you. Items must be unused, and undamaged by you.
                Goods will be returned only if they are returned in their
                original packaging.
              </p>
              <p className="text-gray-600">
                We do not provide refunds on any goods sold. Goods once sold can
                only be exchanged for replacement or store credit if they meet
                our terms and conditions. Since we keep limited inventory, the
                amount paid by you can be used for future purchases.
              </p>
              <p className="text-gray-600">
                All conditions applicable to the return of goods also apply to
                the exchange of goods. To return an item, the customer must
                contact us at{" "}
                <a
                  href="mailto:contact@avantdivine.com"
                  className="text-blue-600 hover:underline"
                >
                  contact@avantdivine.com
                </a>
                . A prompt response is assured to such emails.
              </p>
              <p className="text-gray-600">
                If you are not satisfied with the product you received, you may
                have the option to exchange it, and at our sole discretion,
                receive a refund. We are not liable for any damages caused to
                the product during transit.
              </p>
            </section>

            <section id="conditions" className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Terms and Conditions for Returns and Exchanges
              </h2>
              <p className="text-gray-600">
                You may return or exchange goods using our returns and exchanges
                collection service, the cost of which will be separately
                notified to you. Our return and exchange policy is subject to
                the following conditions:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>
                  Items should be returned unused with all tags still attached.
                  Returns that are damaged may not be accepted and may be sent
                  back to the customer, or a refund may be refused. Please
                  inform our customer care department if any goods/products are
                  delivered without tags.
                </li>
                <li>
                  All items returned should have a Return Merchandise
                  Authorisation (RMA) number to allow easy identification and
                  prompt processing. Unidentified returns may be returned to the
                  sender.
                </li>
                <li>
                  Goods are faulty if they are damaged. Items that are damaged
                  due to normal wear and tear are not considered faulty. If you
                  wish to exchange a faulty item instead of obtaining a credit,
                  please note that we can only replace it with the same product
                  in the same size, subject to availability. Where possible, we
                  will offer to repair faulty items.
                </li>
              </ul>
            </section>

            <section id="process" className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Return Process
              </h2>
              <ol className="list-decimal pl-6 space-y-2 text-gray-600">
                <li>
                  You must request a 'Return Merchandise Authorisation' (RMA)
                  number through the site within 7 days of receiving your order.
                </li>
                <li>
                  Return your unwanted product/goods within 7 days of receiving
                  your RMA number.
                </li>
                <li>
                  You may exchange the item for the same product in a different
                  size, based on stock availability.
                </li>
                <li>
                  If you wish to exchange your item for an alternative product,
                  we suggest returning it for a credit and purchasing the new
                  item separately.
                </li>
              </ol>
            </section>

            <section id="contact" className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Contact Us
              </h2>
              <p className="text-gray-600">
                If you have any questions about our Returns and Exchange Policy,
                please contact us at:
              </p>
              <p className="text-gray-600 font-medium">
                <a
                  href="mailto:contact@avantdivine.com"
                  className="text-blue-600 hover:underline"
                >
                  contact@avantdivine.com
                </a>
              </p>
            </section>
          </div>
        </div>
        <div className="px-4 py-4 sm:px-6 bg-gray-50 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
