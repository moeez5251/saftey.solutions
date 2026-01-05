import React, { useState, useEffect } from "react";
import { Menu, X, User, ShoppingCart, UserCheck, LogOut } from "lucide-react";
import { NavLink, Link, useLocation } from "react-router-dom";
import auths from "../appwrite/appwrite";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showLogout, setShowLogout] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const location = useLocation();

  // ✅ Scroll to top & close mobile menu on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  }, [location.pathname]);

  // ✅ Check current user once
  useEffect(() => {
    (async () => {
      try {
        const currentUser = await auths.currentuser();
        if (currentUser) {
          setIsLoggedIn(true);
          setUser(currentUser);
        }
      } catch {
        setIsLoggedIn(false);
        setUser(null);
      }
    })();
  }, []);

  const handleLogout = async () => {
    await auths.logout();
    setIsLoggedIn(false);
    setUser(null);
    setShowLogout(false);
    setToastMessage("Logout success");
    setTimeout(() => setToastMessage(""), 3000);
  };

  const linkClass = ({ isActive }) =>
    `text-gray-700 font-medium transition hover:text-orange-600 ${
      isActive ? "text-orange-600" : ""
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block w-full text-left px-4 py-3 rounded-md text-base font-medium transition ${
      isActive
        ? "text-orange-600 bg-gray-50"
        : "text-gray-700 hover:text-orange-600 hover:bg-gray-50"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center md:h-20 h-26">

          {/* Hamburger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100 transition"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* ✅ LOGO — EXACTLY SAME AS YOUR ORIGINAL */}
          <div className="flex items-center absolute inset-x-0 justify-center pointer-events-none lg:pointer-events-auto lg:static">
            <NavLink
              to="/"
              className="flex lg:flex-row flex-col items-center lg:space-x-3 pointer-events-auto group px-4"
            >
              <img
                src="data:image/png;base64,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"
                alt="Flame Icon"
                className="md:h-20 md:w-12 h-12 w-8 object-contain drop-shadow-md group-hover:scale-110 transition-all"
              />

              <span className="font-extrabold tracking-tight text-gray-900 text-center lg:text-left">
                <span className="block text-xl lg:text-2xl">
                  <span className="text-orange-600">S.S-</span>SAFETY
                </span>
                <span className="block text-xl lg:hidden">SOLUTIONS</span>
                <span className="hidden lg:inline lg:ml-1 text-2xl">
                  SOLUTIONS
                </span>
              </span>
            </NavLink>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            <NavLink to="/" end className={linkClass}>Home</NavLink>
            <NavLink to="/products" className={linkClass}>Products</NavLink>
            <NavLink to="/services" className={linkClass}>Services</NavLink>
            <NavLink to="/about-us" className={linkClass}>About Us</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </div>

          {/* Icons – Row on all screens (exactly like original) */}
          <div className="flex items-center space-x-3 sm:space-x-5">

            {/* USER / LOGOUT */}
            {isLoggedIn ? (
              <button
                onClick={() => setShowLogout(true)}
                className="p-2 rounded-full hover:bg-gray-100 transition text-orange-600"
              >
                <UserCheck size={24} />
              </button>
            ) : (
              <Link
                to="/signup"
                className="p-2 rounded-full hover:bg-gray-100 transition text-gray-700 hover:text-orange-600"
              >
                <User size={24} />
              </Link>
            )}

            {/* Cart */}
            <button className="text-gray-700 hover:text-orange-600 p-2 rounded-full hover:bg-gray-100 transition">
              <ShoppingCart size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu – Now properly column-wise with full-width tappable links */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 ">
          <div className="px-2 pt-2 pb-4 space-y-1 z-1000000">
            <NavLink to="/" end className={mobileLinkClass}>Home</NavLink>
            <NavLink to="/products" className={mobileLinkClass}>Products</NavLink>
            <NavLink to="/services" className={mobileLinkClass}>Services</NavLink>
            <NavLink to="/about-us" className={mobileLinkClass}>About Us</NavLink>
            <NavLink to="/contact" className={mobileLinkClass}>Contact</NavLink>
          </div>
        </div>
      )}

      {/* Clean & Decent Logout Modal (kept from previous clean version) */}
      {showLogout && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          onClick={() => setShowLogout(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowLogout(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition text-gray-500"
            >
              <X size={24} />
            </button>

            {/* Content */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Hi, <span className="text-orange-600">{user?.name || "User"}</span>
              </h2>

              <button
                onClick={handleLogout}
                className="w-full py-4 px-6 bg-red-600 hover:bg-red-700 text-white font-semibold text-lg rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-center gap-3"
              >
                <LogOut size={24} />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Clean Toast */}
      {toastMessage && (
        <div className="fixed inset-x-0 bottom-6 flex justify-center z-50 pointer-events-none">
          <div className="bg-gray-800 text-white font-medium text-lg px-8 py-4 rounded-xl shadow-2xl">
            {toastMessage}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;