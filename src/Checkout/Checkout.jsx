import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import {
  CreditCard,
  Truck,
  AlertCircle,
  MessageCircle,
  ShoppingCart,
  CheckCircle,
  Phone,
  Package,
} from "lucide-react";
import toast from "react-hot-toast";

function Checkout() {
  const { cartItems, totalAmount } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [cardData, setCardData] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    cardName: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ NEW: controls showing the confirmation screen
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";

    if (paymentMethod === "card") {
      if (!cardData.cardNumber.trim()) newErrors.cardNumber = "Card number is required";
      if (!cardData.expiry.trim()) newErrors.expiry = "Expiry date is required";
      if (!cardData.cvv.trim()) newErrors.cvv = "CVV is required";
      if (!cardData.cardName.trim()) newErrors.cardName = "Name on card is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ UPDATED: instead of navigating, show confirmation screen
  const handlePlaceOrder = async () => {
    if (!validateForm()) return;
    setIsSubmitting(true);
    // Simulate a brief processing moment
    await new Promise((res) => setTimeout(res, 800));
    setIsSubmitting(false);
    setOrderPlaced(true);
    toast.success("Order received! We'll contact you shortly.");
  };

  const handleWhatsAppOrder = () => {
    if (!formData.name.trim() || !formData.phone.trim() || !formData.address.trim()) {
      setErrors({
        name: !formData.name.trim() ? "Name is required" : "",
        phone: !formData.phone.trim() ? "Phone is required" : "",
        address: !formData.address.trim() ? "Address is required" : "",
      });
      return;
    }

    let message = "🛒 *New Order from S.S SAFETY SOLUTIONS*%0A%0A";
    message += `*Customer Details:*%0A`;
    message += `Name: ${formData.name}%0A`;
    if (formData.email) message += `Email: ${formData.email}%0A`;
    message += `Phone: ${formData.phone}%0A`;
    message += `City: ${formData.city}%0A`;
    message += `Address: ${formData.address}%0A%0A`;
    message += `*Order Items:*%0A`;
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.title} × ${item.quantity}%0A`;
      message += `   Price: ${
        typeof item.price === "number"
          ? `Rs. ${(item.price * item.quantity).toLocaleString("en-IN")}`
          : item.price || "Call for Price"
      }%0A`;
    });
    message += `%0A*Total Amount:* Rs. ${totalAmount.toLocaleString("en-IN")}%0A%0A`;
    message += `Payment Method: ${paymentMethod === "cod" ? "Cash on Delivery" : "Card"}%0A`;
    message += "Thank you! Please confirm the order.";

    const whatsappNumber = "923347616779";
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  // ─────────────────────────────────────────────
  // ✅ ORDER CONFIRMATION SCREEN
  // ─────────────────────────────────────────────
  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
        <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-10 text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center">
              <CheckCircle size={52} className="text-orange-600" />
            </div>
          </div>

          <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
            Thank You, {formData.name}! 🎉
          </h1>
          <p className="text-gray-500 text-lg mb-8">
            We've received your order. Our team will reach out to you shortly for confirmation and
            the best quotation.
          </p>

          {/* Order Summary */}
          <div className="bg-gray-50 rounded-2xl p-6 text-left mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Package size={20} className="text-orange-600" />
              Your Order Summary
            </h2>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 pb-3 border-b border-gray-200 last:border-0"
                >
                  <div className="w-14 h-14 bg-white rounded-xl border border-gray-200 flex-shrink-0 overflow-hidden">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 line-clamp-1">{item.title}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-bold text-orange-600 whitespace-nowrap">
                    {typeof item.price === "number"
                      ? `Rs. ${(item.price * item.quantity).toLocaleString("en-IN")}`
                      : item.price || "Call for Price"}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-300">
              <span className="text-xl font-bold text-gray-900">Total</span>
              <span className="text-xl font-bold text-orange-600">
                Rs. {totalAmount.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-8">
            <p className="text-gray-700 font-semibold text-lg mb-1">
              📞 For the best quotation, please contact us:
            </p>
            <p className="text-orange-700 font-bold text-xl tracking-wide mb-1">
              S.S Safety Solution
            </p>
            <a
              href="tel:+923347616779"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-800 font-semibold text-lg transition"
            >
              <Phone size={20} />
              +92 334 7616779
            </a>
          </div>

          {/* WhatsApp button on confirmation screen too */}
          <a
            href={`https://wa.me/923347616779?text=Hi%20I%20am%20${encodeURIComponent(
              formData.name
            )}%2C%20I%20just%20placed%20an%20order%20on%20S.S%20Safety%20Solution%20website.%20Please%20provide%20the%20best%20quotation.`}
            target="_blank"
            rel="noreferrer"
          >
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-3 mb-4">
              <MessageCircle size={24} />
              Chat with Us on WhatsApp
            </button>
          </a>

          <Link
            to="/products"
            className="text-gray-500 hover:text-orange-600 font-medium transition text-sm underline"
          >
            ← Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────
  // EMPTY CART
  // ─────────────────────────────────────────────
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <ShoppingCart size={80} className="text-gray-300 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <Link to="/products" className="text-orange-600 hover:text-orange-700 font-semibold">
            Go back to shopping
          </Link>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────
  // MAIN CHECKOUT FORM (unchanged)
  // ─────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Side - Form */}
          <div className="lg:col-span-2 space-y-10">
            {/* Shipping Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Truck size={28} className="text-orange-600" />
                Shipping Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={16} />
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={16} />
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                    placeholder="+92 300 1234567"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={16} />
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                    placeholder="Lahore"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={16} />
                      {errors.city}
                    </p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Address
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                    placeholder="House #, Street, Area..."
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle size={16} />
                      {errors.address}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <CreditCard size={28} className="text-orange-600" />
                Payment Method
              </h2>

              <div className="space-y-6">
                <label className="flex items-center gap-4 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-orange-500 transition">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="w-5 h-5 text-orange-600"
                  />
                  <span className="font-medium text-gray-900">Cash on Delivery (COD)</span>
                </label>

                <label className="flex items-center gap-4 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-orange-500 transition">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="w-5 h-5 text-orange-600"
                  />
                  <span className="font-medium text-gray-900">Credit / Debit Card</span>
                </label>

                {paymentMethod === "card" && (
                  <div className="mt-6 space-y-6 p-6 bg-gray-50 rounded-xl">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={cardData.cardNumber}
                        onChange={handleCardChange}
                        placeholder="1234 5678 9012 3456"
                        maxLength="19"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                      />
                      {errors.cardNumber && (
                        <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                          <AlertCircle size={16} />
                          {errors.cardNumber}
                        </p>
                      )}
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          name="expiry"
                          value={cardData.expiry}
                          onChange={handleCardChange}
                          placeholder="MM/YY"
                          maxLength="5"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                        />
                        {errors.expiry && (
                          <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            <AlertCircle size={16} />
                            {errors.expiry}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={cardData.cvv}
                          onChange={handleCardChange}
                          placeholder="123"
                          maxLength="3"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                        />
                        {errors.cvv && (
                          <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            <AlertCircle size={16} />
                            {errors.cvv}
                          </p>
                        )}
                      </div>
                      <div className="md:col-span-3">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Name on Card
                        </label>
                        <input
                          type="text"
                          name="cardName"
                          value={cardData.cardName}
                          onChange={handleCardChange}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                        />
                        {errors.cardName && (
                          <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                            <AlertCircle size={16} />
                            {errors.cardName}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Side - Sticky Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-4 max-h-96 overflow-y-auto mb-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 pb-4 border-b border-gray-100 last:border-0"
                  >
                    <div className="bg-gray-100 rounded-lg w-16 h-16 flex-shrink-0">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 line-clamp-2">{item.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">Quantity: {item.quantity}</p>
                      <p className="text-orange-600 font-semibold mt-1">
                        {typeof item.price === "number"
                          ? `Rs. ${(item.price * item.quantity).toLocaleString("en-IN")}`
                          : item.price || "Call for Price"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-6 space-y-5">
                <div className="flex justify-between text-xl font-bold text-gray-900 mb-6">
                  <span>Total</span>
                  <span>Rs. {totalAmount.toLocaleString("en-IN")}</span>
                </div>

                {/* Place Order Button */}
                <button
                  onClick={handlePlaceOrder}
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 text-white font-bold text-xl py-5 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? "Processing..." : "Place Order"}
                </button>

                {/* WhatsApp Order Button */}
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-xl py-5 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center gap-4"
                >
                  <MessageCircle size={28} />
                  Order via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;