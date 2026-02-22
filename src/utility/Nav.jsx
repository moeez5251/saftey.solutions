import React, { useState, useEffect, useRef } from "react";
import { Menu, X, User, ShoppingCart, UserCheck, LogOut, Trash2, Search } from "lucide-react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import auths from "../appwrite/appwrite";

// ← NEW: Import the real cart
import { useCart } from "../context/CartContext";

// ← NEW: Import your products data (adjust the path if needed)
import { productsData, categories } from '../cat/ALL'; // ← CHANGE THIS PATH TO WHERE YOUR productsData IS EXPORTED

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showLogout, setShowLogout] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // ← NEW: Search states
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef(null);
  const mobileSearchRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  // ← NEW: Use real global cart
  const { 
    cartItems, 
    totalItems, 
    totalAmount, 
    removeFromCart,
    updateQuantity
  } = useCart();

  // ← NEW: Flatten all products for search (static, so no performance issue)
  const allProducts = Object.values(productsData).flat();

  // ← NEW: Filtered results (max 10)
  const filteredProducts = allProducts
    .filter((p) => p.title.toLowerCase().includes(query.toLowerCase()))
    .slice(0, 10);

  // ← NEW: Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileSearchRef.current && !mobileSearchRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ← FIXED: Handle product selection → close mobile menu + dropdown, then navigate & scroll
  const handleProductSelect = (product) => {
    setQuery("");
    setShowDropdown(false);
    setIsOpen(false); // ← FIXED: Close mobile menu so it doesn't block navigation

    // Navigate to products + hash for this product id
    navigate(`/products#${product.id}`);

    // Small delay to let page settle then scroll to the item
    setTimeout(() => {
      const el = document.getElementById(product.id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 400);
  };


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  }, [location.pathname]);

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
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center md:h-20 h-26">
            {/* Hamburger */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-100 transition"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* LOGO */}
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
                    <span className="text-orange-600">S.S </span>SAFETY
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

            {/* Icons + Search (Search only visible on large screens) */}
            <div className="flex items-center space-x-4">
              {/* ← NEW: Search Bar */}
              <div className="hidden lg:block relative" ref={searchRef}>
                <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-72 transition-shadow focus-within:ring-2 focus-within:ring-orange-600">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setShowDropdown(true);
                    }}
                    onFocus={() => setShowDropdown(true)}
                    placeholder="Search products..."
                    className="bg-transparent outline-none flex-1 text-gray-700 placeholder-gray-500"
                  />
                  <Search size={20} className="text-gray-500 ml-2" />
                </div>

                {/* Dropdown suggestions – same layout as your screenshot (image + title + desc) */}
                {showDropdown && query.trim() && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 max-h-96 overflow-y-auto z-50">
                    {filteredProducts.length === 0 ? (
                      <div className="px-4 py-3 text-gray-500 text-center">No products found</div>
                    ) : (
                      filteredProducts.map((product) => (
                        <button
                          key={product.id}
                          onClick={() => handleProductSelect(product)}
                          className="flex items-center w-full px-4 py-3 hover:bg-orange-50 transition border-l-4 border-transparent hover:border-l-4 hover:border-orange-600 text-left"
                        >
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-12 h-12 object-cover rounded mr-4 flex-shrink-0 border border-gray-200"
                            onError={(e) => (e.target.src = "/placeholder.jpg")}
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900 truncate">{product.title}</p>
                            {product.desc && (
                              <p className="text-sm text-gray-500 truncate mt-1">{product.desc}</p>
                            )}
                          </div>
                        </button>
                      ))
                    )}
                  </div>
                )}
              </div>

              {/* User & Cart Icons */}
              {isLoggedIn ? (
                <button
                  onClick={() => setShowLogout(true)}
                  className="p-2 rounded-full hover:bg-gray-100 transition text-orange-600"
                >
                  <UserCheck size={20} />
                </button>
              ) : (
                <Link
                  to="/signup"
                  className="p-2 rounded-full hover:bg-gray-100 transition text-gray-700 hover:text-orange-600"
                >
                  <User size={20} />
                </Link>
              )}

              {/* Cart button with real count */}
              <button
                onClick={() => setShowCart(true)}
                className="relative text-gray-700 hover:text-orange-600 p-2 rounded-full hover:bg-gray-100 transition"
              >
                <ShoppingCart size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 ">
            <div className="px-2 pt-2 pb-4 space-y-1 z-1000000">
              <div className="mb-4">
                <div className="relative" ref={mobileSearchRef}>
                  <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 transition-shadow focus-within:ring-2 focus-within:ring-orange-600">
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => {
                        setQuery(e.target.value);
                        setShowDropdown(true);
                      }}
                      onFocus={() => setShowDropdown(true)}
                      placeholder="Search products..."
                      className="bg-transparent outline-none flex-1 text-gray-700 placeholder-gray-500"
                    />
                    <Search size={20} className="text-gray-500 ml-2" />
                  </div>

                  {/* Mobile Dropdown suggestions */}
                  {showDropdown && query.trim() && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 max-h-96 overflow-y-auto z-50">
                      {filteredProducts.length === 0 ? (
                        <div className="px-4 py-3 text-gray-500 text-center">No products found</div>
                      ) : (
                        filteredProducts.map((product) => (
                          <button
                            key={product.id}
                            onMouseDown={() => handleProductSelect(product)} // ← FIXED: onMouseDown fires before onBlur so dropdown stays open long enough
                            className="flex items-center w-full px-4 py-3 hover:bg-orange-50 transition border-l-4 border-transparent hover:border-l-4 hover:border-orange-600 text-left"
                          >
                            <img
                              src={product.image}
                              alt={product.title}
                              className="w-12 h-12 object-cover rounded mr-4 flex-shrink-0 border border-gray-200"
                              onError={(e) => (e.target.src = "/placeholder.jpg")}
                            />
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-gray-900 truncate">{product.title}</p>
                              {product.desc && (
                                <p className="text-sm text-gray-500 truncate mt-1">{product.desc}</p>
                              )}
                            </div>
                          </button>
                        ))
                      )}
                    </div>
                  )}
                </div>
              </div>
              <NavLink to="/" end className={mobileLinkClass}>Home</NavLink>
              <NavLink to="/products" className={mobileLinkClass}>Products</NavLink>
              <NavLink to="/services" className={mobileLinkClass}>Services</NavLink>
              <NavLink to="/about-us" className={mobileLinkClass}>About Us</NavLink>
              <NavLink to="/contact" className={mobileLinkClass}>Contact</NavLink>
            </div>
          </div>
        )}

        {/* Logout Modal */}
        {showLogout && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            onClick={() => setShowLogout(false)}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowLogout(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition text-gray-500"
              >
                <X size={24} />
              </button>
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

        {/* Toast */}
        {toastMessage && (
          <div className="fixed inset-x-0 bottom-6 flex justify-center z-50 pointer-events-none">
            <div className="bg-gray-800 text-white font-medium text-lg px-8 py-4 rounded-xl shadow-2xl">
              {toastMessage}
            </div>
          </div>
        )}

        {/* Cart Popup */}
        {showCart && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50" onClick={() => setShowCart(false)}>
            <div
              className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">Your Cart</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition text-gray-600"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="flex flex-col h-full">
                {cartItems.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
                    <ShoppingCart size={80} className="text-gray-300 mb-6" />
                    <p className="text-xl font-medium text-gray-600">Your cart is empty</p>
                    <p className="text-gray-500 mt-2">Add items to get started</p>
                  </div>
                ) : (
                  <>
                    <div className="flex-1 overflow-y-auto px-6 py-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex gap-4 py-5 border-b border-gray-100 last:border-0">
                          <div className="bg-gray-100 rounded-lg w-20 h-20 flex-shrink-0">
                            {item.image && (
                              <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-lg" />
                            )}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 line-clamp-2">{item.title}</h4>
                            <p className="text-orange-600 font-semibold mt-2">
                              {typeof item.price === "number"
                                ? `Rs. ${(item.price * item.quantity).toLocaleString("en-IN")}`
                                : item.price || "Call for Price"}
                            </p>
                            <div className="flex items-center gap-4 mt-4">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400 flex items-center justify-center text-xl font-bold transition shadow-sm"
                                disabled={item.quantity <= 1}
                              >
                                −
                              </button>
                              <span className="text-lg font-bold w-16 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-10 h-10 rounded-full bg-orange-600 hover:bg-orange-700 text-white flex items-center justify-center text-xl font-bold transition shadow-sm"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition shadow-sm"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-gray-200 bg-gray-50 px-6 py-6 mt-auto space-y-5">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-semibold text-gray-900">Total</span>
                        <span className="text-3xl font-bold text-orange-600">
                          Rs. {totalAmount.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <Link
                        to="/checkout"
                        onClick={() => setShowCart(false)}
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-xl py-5 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-3"
                      >
                        Proceed to Checkout
                      </Link>
                      <button
                        onClick={() => setShowCart(false)}
                        className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold text-lg py-4 rounded-xl transition shadow-md"
                      >
                        Continue Shopping
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ←←← OFFICIAL WHATSAPP FLOATING BUTTON →→→ */}
        <div className="fixed bottom-6 right-6 z-[1000] md:bottom-8 md:right-8">
          <a
            href="https://wa.me/923347616779?text=Hi%20I%20am%20MR-sufiyan%20CEO%20of%20SS.%20Safety%20Solution.%20How%20can%20I%20help%20you"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20b858] text-white rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-110"
            aria-label="Contact us on WhatsApp"
          >
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping"></span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-icon lucide-message-square"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/></svg>
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black/80 text-white text-sm font-medium px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              Contact
            </span>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Nav;