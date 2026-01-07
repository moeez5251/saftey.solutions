// src/pages/ProductDetails.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

import {
  ShoppingCart,
  Phone,
  MessageCircle,
  Truck,
  ShieldCheck,
  RefreshCw,
  ArrowLeft,
  Star,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { productsData } from "../cat/ALL";
import "swiper/css";
import "swiper/css/pagination";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const productId = id;

  const { addToCart } = useCart();

  // CORRECTED: handleAddToCart now uses the current quantity state
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: quantity, // ← This now correctly adds the selected quantity
    });

    toast.success(`${product.title} × ${quantity} added to cart!`);
  };

  // Find product across categories
  let product = null;
  let currentCategory = null;
  for (const category in productsData) {
    const found = productsData[category].find((p) => p.id === productId);
    if (found) {
      product = found;
      currentCategory = category;
      break;
    }
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center py-24">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">
            We couldn't find the product you're looking for.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-medium px-8 py-4 rounded-xl transition"
          >
            <ArrowLeft size={20} />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const [quantity, setQuantity] = useState(1);

  const isContactPrice =
    typeof product.price === "string" && product.price.toLowerCase().includes("contact");

  const rating = product.rating || 4.8;
  const filledStars = Math.floor(rating);

  // Related products
  const relatedProducts = (productsData[currentCategory] || [])
    .filter((p) => p.id !== productId)
    .slice(0, 15);

  return (
    <div className="min-h-screen bg-gray-50 pt-20 lg:pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-orange-600 font-medium mb-10 transition"
        >
          <ArrowLeft size={20} />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="aspect-square">
              <img
                src={product.image || "https://via.placeholder.com/800"}
                alt={product.title}
                className="w-full h-full object-contain p-8 lg:p-16"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/800?text=Image+Not+Found";
                }}
              />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {product.title}
              </h1>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={24}
                        fill={i < filledStars ? "currentColor" : "none"}
                        stroke="currentColor"
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-800">{rating.toFixed(1)}</span>
                </div>
                <span className="text-gray-600">
                  ({product.reviews || "200+"} reviews)
                </span>
                <span className="text-green-600 font-medium">
                  • {product.sold || "300+"} sold
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="py-4">
              {isContactPrice ? (
                <p className="text-4xl font-bold text-orange-600">{product.price}</p>
              ) : (
                <p className="text-4xl font-bold text-gray-900">
                  Rs. {Number(product.price).toLocaleString("en-IN")}
                </p>
              )}
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">
                {product.desc ||
                  "Premium-grade professional safety equipment built to the highest standards. Engineered for superior protection, durability, and comfort in demanding environments."}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-6">
              <span className="font-medium text-gray-800">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-5 py-3 text-xl hover:bg-gray-100 transition"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="px-8 py-3 text-lg font-semibold min-w-20 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-5 py-3 text-xl hover:bg-gray-100 transition"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons - EXACTLY SAME AS YOUR ORIGINAL */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button 
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold text-lg py-4 rounded-xl shadow-md transition flex items-center justify-center gap-3" 
                onClick={handleAddToCart} // ← Now correctly uses selected quantity
              >
                <ShoppingCart size={24} />
                {isContactPrice ? "Buy Now" : "Add to Cart"}
              </button>

              <a
                href="https://wa.me/+923001234567" // Update with your number
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-4 rounded-xl shadow-md transition flex items-center justify-center gap-3"
              >
                <MessageCircle size={24} />
                WhatsApp / Call
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Truck size={32} className="text-gray-700" />
                </div>
                <p className="font-medium text-gray-800">Nationwide Delivery</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck size={32} className="text-gray-700" />
                </div>
                <p className="font-medium text-gray-800">100% Authentic</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <RefreshCw size={32} className="text-gray-700" />
                </div>
                <p className="font-medium text-gray-800">Easy Returns</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 lg:mt-24">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-10 lg:mb-12">
              Related Products
            </h2>

            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={{
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className}">${index + 1}</span>`;
                },
              }}
              spaceBetween={20}
              slidesPerView={2}
              breakpoints={{
                640: { slidesPerView: 3, spaceBetween: 24 },
                768: { slidesPerView: 4, spaceBetween: 24 },
                1024: { slidesPerView: 5, spaceBetween: 28 },
              }}
              className="related-products-swiper !pb-16"
            >
              {relatedProducts.map((relProduct) => (
                <SwiperSlide key={relProduct.id}>
                  <Link to={`/products/${relProduct.id}`} className="block h-full">
                    <motion.div
                      whileHover={{ y: -6 }}
                      className="bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 h-full flex flex-col"
                    >
                      <div className="aspect-square bg-gray-50 overflow-hidden">
                        <img
                          src={relProduct.image || "https://via.placeholder.com/400"}
                          alt={relProduct.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                        />
                      </div>

                      <div className="p-4 lg:p-5 flex flex-col flex-grow">
                        <h3 className="font-medium text-gray-800 text-sm lg:text-base line-clamp-2 mb-3">
                          {relProduct.title}
                        </h3>

                        <div className="mt-auto flex items-center justify-between">
                          <span className="text-lg lg:text-xl font-bold text-gray-900">
                            {typeof relProduct.price === "number"
                              ? `Rs. ${relProduct.price.toLocaleString("en-IN")}`
                              : relProduct.price}
                          </span>

                          <div className="flex text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={14}
                                fill={i < Math.floor(relProduct.rating || 4.6) ? "currentColor" : "none"}
                                stroke="currentColor"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;