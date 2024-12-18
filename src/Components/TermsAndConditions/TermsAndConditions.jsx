import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Terms and Conditions
          </h1>
        </div>
        <div className="border-t border-gray-200">
          <nav className="px-4 py-3 sm:px-6 bg-gray-50">
            <ul className="flex flex-wrap gap-4 text-sm font-medium text-gray-600">
              <li>
                <a href="#acceptance" className="hover:text-gray-900">
                  Acceptance
                </a>
              </li>
              <li>
                <a href="#general" className="hover:text-gray-900">
                  General
                </a>
              </li>
              <li>
                <a href="#amendments" className="hover:text-gray-900">
                  Amendments
                </a>
              </li>
              <li>
                <a href="#communications" className="hover:text-gray-900">
                  Communications
                </a>
              </li>
              <li>
                <a href="#purchases" className="hover:text-gray-900">
                  Purchases
                </a>
              </li>
            </ul>
          </nav>
          <div className="px-4 py-5 sm:p-6 space-y-6">
            <section id="acceptance">
              <h2 className="text-xl font-semibold text-gray-900">
                Acceptance of Terms
              </h2>
              <p className="mt-2 text-gray-600">
                You ("you" or "End User" or "your" or "Buyer" or "Customer") are
                required to read and accept all of the terms and conditions laid
                down in this Terms and Conditions ("Terms and Conditions" or
                "TERMS AND CONDITIONS" or "Terms" or "Agreement") and the linked
                Privacy Policy, before you may use avantdivine.com (hereinafter
                referred to as "Site" or "Avant Divine" or "we" or "our"). The
                Site allows you to browse, select and purchase Clothing and
                Accessories ("Goods" or "Products" or "Services").
              </p>
            </section>

            <section id="general">
              <h2 className="text-xl font-semibold text-gray-900">General</h2>
              <p className="mt-2 text-gray-600">
                This Agreement sets forth the terms and conditions that apply to
                the use of the Site by the User. By using this Site, the User
                agrees to comply with all of the TERMS AND CONDITIONS hereof.
                The right to use the Site is personal to the User and is not
                transferable to any other person or entity. The User shall be
                responsible for protecting the confidentiality of their
                password(s), if any.
              </p>
              <p className="mt-2 text-gray-600">
                The User acknowledges that, although the internet is often a
                secure environment, sometimes there are interruptions in service
                or events that are beyond the control of the Company, and the
                Company shall not be responsible for any data lost while
                transmitting information on the internet. While it is the
                Company's objective to make the Site accessible 24 hours per
                day, 7 days per week, the Site may be unavailable from time to
                time for any reason including, without limitation, routine
                maintenance.
              </p>
              <p className="mt-2 text-gray-600">
                You understand and acknowledge that due to circumstances both
                within and outside of the control of the Company, access to the
                Site may be interrupted, suspended or terminated from time to
                time. The Company shall have the right at any time to change or
                discontinue any aspect or feature of the Site, including, but
                not limited to, content, hours of availability and equipment
                needed for access or use. Further, the Company may discontinue
                disseminating any portion of information or category of
                information, may change or eliminate any transmission method,
                and may change transmission speeds or other signal
                characteristics.
              </p>
            </section>

            <section id="amendments">
              <h2 className="text-xl font-semibold text-gray-900">
                Amendments to the Agreement
              </h2>
              <p className="mt-2 text-gray-600">
                The Company may amend this Agreement and/or the Privacy Policy
                at any time by posting a revised version on the Site. All
                updates and amendments shall be notified to you via posts on
                website or through e-mail. The revised version will be effective
                at the time we post it on the Site, and in the event you
                continue to use our Site, you are impliedly agreeing to the
                revised TERMS AND CONDITIONS and Privacy Policy expressed
                herein.
              </p>
            </section>

            <section id="communications">
              <h2 className="text-xl font-semibold text-gray-900">
                Communications
              </h2>
              <p className="mt-2 text-gray-600">
                As a condition of purchase, the Site requires your permission to
                send you administrative and promotional emails. We will send you
                information regarding your account activity and purchases, as
                well as updates about our products and promotional offers. You
                can opt out of our promotional emails anytime by clicking the
                UNSUBSCRIBE link at the bottom of any of our email
                correspondences. Please see our Privacy Policy for details.
              </p>
              <p className="mt-2 text-gray-600">
                We shall have no responsibility in any manner whatsoever
                regarding any promotional emails or SMS/MMS sent to you. The
                offers made in those promotional emails or SMS/MMS shall be
                subject to change at the sole discretion of the Company and the
                Company owes no responsibility to provide you any information
                regarding such change.
              </p>
            </section>

            <section id="purchases">
              <h2 className="text-xl font-semibold text-gray-900">Purchases</h2>
              <p className="mt-2 text-gray-600">
                By placing an order, you make an offer to us to purchase
                products you have selected based on standard Site restrictions,
                Merchant specific restrictions, and on the terms and conditions
                stated below. You are required to create an account in order to
                purchase any product from the Site. This is required so we can
                provide you with easy access to print your orders and view your
                past purchases.
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
};

export default TermsAndConditions;
