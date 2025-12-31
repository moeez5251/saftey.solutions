import React from "react";
import { NavLink } from "react-router-dom";

function Fotter() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Logo & Company */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16">
                <img
                  src="data:image/png;base64,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"
                  alt="logo"
                />
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight">
                <span className="text-red-500">SS.</span>saftey solutions
              </h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xs">
              Your trusted partner in premium safety equipment and protective solutions since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-red-500">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Safety Standards", path: "/standards" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-lg flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-red-500 transition-all duration-500 group-hover:w-8"></span>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-red-500">Product Categories</h3>
            <ul className="space-y-4">
              {[
                "Head Protection",
                "Eye & Face Protection",
                "Hearing Protection",
                "Respiratory Protection",
                "Hand Protection",
                "Fall Protection",
                "Foot Protection",
              ].map((item) => (
                <li key={item}>
                  <NavLink
                    to={`/products/${item.toLowerCase().replace(/ & | /g, "-")}`}
                    className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-lg flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-red-500 transition-all duration-500 group-hover:w-8"></span>
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-red-500">Stay Connected</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-lg">Ss.safetysolutions25@gmail.com</span>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-lg">+92 334 7616779</span>
              </div>

              {/* Newsletter */}
              <div className="mt-8">
                <p className="text-gray-300 mb-4 text-lg">
                  Subscribe for latest safety updates
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-6 py-4 rounded-xl bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-red-600 w-full"
                  />
                  <button className="px-8 py-4 bg-red-700 rounded-xl font-bold hover:bg-red-800 transition-all duration-300 shadow-lg hover:shadow-red-700/50 transform hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-center md:text-left">
            © 2025 SafeGuard Pro. All rights reserved. | Premium Safety Equipment Provider
          </p>

          <div className="flex items-center gap-8">
            <span className="text-gray-500 text-sm">Developed by</span>
            <span className="text-2xl font-extrabold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Fasee Developer
            </span>
            <span className="text-gray-400 text-lg font-semibold">
              → contact for websites
            </span>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-red-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-red-900/20 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
}

export default Fotter;
