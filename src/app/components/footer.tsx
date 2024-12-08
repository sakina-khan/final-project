import React from 'react';
import Link from 'next/link';  // Import Link from next

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Top Footer: Logo and Description */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-8">
          {/* Logo and Description */}
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <h1 className="text-2xl font-bold text-teal-500">Comforty</h1>
            <p className="text-gray-600 mt-2 max-w-md">
              Unique furniture for all needs. Visit and explore our modern product collection.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Category</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/bar-stools">Bar Stools</Link>
                </li>
                <li>
                  <Link href="/office-chairs">Office Chairs</Link>
                </li>
                <li>
                  <Link href="/dining-chairs">Dining Chairs</Link>
                </li>
                <li>
                  <Link href="/gaming-chairs">Gaming Chairs</Link>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Customer</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link href="/help-support">Help & Support</Link>
                </li>
                <li>
                  <Link href="/returns-exchanges">Returns & Exchanges</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms-conditions">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
              />
              <button className="bg-teal-500 text-white px-6 py-2 rounded-r-lg hover:bg-teal-600">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer: Copyright and Payment Options */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; 2024 Comforty - All rights reserved</p>
          <div className="flex gap-4 mt-4 lg:mt-0">
            <img src="/payments/paypal.png" alt="PayPal" className="h-6" />
            <img src="/payments/visa.png" alt="Visa" className="h-6" />
            <img src="/payments/mastercard.png" alt="MasterCard" className="h-6" />
            <img src="/payments/stripe.png" alt="Stripe" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
