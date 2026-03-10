// src/pages/ProductDetails.jsx
import React, { useState, useRef, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

import "swiper/css";

import {
  ShoppingCart,
  Phone,
  MessageCircle,
  Truck,
  ShieldCheck,
  RefreshCw,
  ArrowLeft,
  Star,
  ZoomIn,
  X,
  Tag,
  CheckCircle,
  Package,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { productsData } from "../cat/ALL";
import "swiper/css";
import "swiper/css/pagination";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

// ─── Interactive Zoom Modal ───────────────────────────────────────────────────
const ZoomModal = ({ image, alt, onClose }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const lastPosition = useRef({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const lastPinchDist = useRef(null);
  const lastTouchCenter = useRef(null);

  const MIN_SCALE = 1;
  const MAX_SCALE = 6;

  const clampPosition = useCallback((pos, currentScale) => {
    if (!containerRef.current) return pos;
    const rect = containerRef.current.getBoundingClientRect();
    const maxX = ((currentScale - 1) * rect.width) / 2;
    const maxY = ((currentScale - 1) * rect.height) / 2;
    return {
      x: Math.max(-maxX, Math.min(maxX, pos.x)),
      y: Math.max(-maxY, Math.min(maxY, pos.y)),
    };
  }, []);

  const handleWheel = useCallback(
    (e) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.15 : 0.15;
      setScale((prev) => {
        const next = Math.min(MAX_SCALE, Math.max(MIN_SCALE, prev + delta));
        setPosition((p) => clampPosition(p, next));
        return next;
      });
    },
    [clampPosition]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  const handleMouseDown = (e) => {
    if (scale === 1) return;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    lastPosition.current = position;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    setPosition(
      clampPosition(
        { x: lastPosition.current.x + dx, y: lastPosition.current.y + dy },
        scale
      )
    );
  };

  const handleMouseUp = () => setIsDragging(false);

  const getDistance = (t1, t2) =>
    Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);

  const getCenter = (t1, t2) => ({
    x: (t1.clientX + t2.clientX) / 2,
    y: (t1.clientY + t2.clientY) / 2,
  });

  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      lastPinchDist.current = getDistance(e.touches[0], e.touches[1]);
      lastTouchCenter.current = getCenter(e.touches[0], e.touches[1]);
    } else if (e.touches.length === 1 && scale > 1) {
      dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      lastPosition.current = position;
    }
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    if (e.touches.length === 2) {
      const dist = getDistance(e.touches[0], e.touches[1]);
      if (lastPinchDist.current !== null) {
        const ratio = dist / lastPinchDist.current;
        setScale((prev) => {
          const next = Math.min(MAX_SCALE, Math.max(MIN_SCALE, prev * ratio));
          setPosition((p) => clampPosition(p, next));
          return next;
        });
      }
      lastPinchDist.current = dist;
      const center = getCenter(e.touches[0], e.touches[1]);
      if (lastTouchCenter.current) {
        const dx = center.x - lastTouchCenter.current.x;
        const dy = center.y - lastTouchCenter.current.y;
        setPosition((p) =>
          clampPosition({ x: p.x + dx, y: p.y + dy }, scale)
        );
      }
      lastTouchCenter.current = center;
    } else if (e.touches.length === 1 && scale > 1) {
      const dx = e.touches[0].clientX - dragStart.current.x;
      const dy = e.touches[0].clientY - dragStart.current.y;
      setPosition(
        clampPosition(
          { x: lastPosition.current.x + dx, y: lastPosition.current.y + dy },
          scale
        )
      );
    }
  };

  const handleTouchEnd = (e) => {
    if (e.touches.length < 2) {
      lastPinchDist.current = null;
      lastTouchCenter.current = null;
    }
    if (e.touches.length === 0) {
      lastPosition.current = position;
    }
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3 z-10">
        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              setScale((p) => {
                const next = Math.max(MIN_SCALE, p - 0.5);
                setPosition((pos) => clampPosition(pos, next));
                return next;
              })
            }
            className="bg-white/20 hover:bg-white/30 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition"
            aria-label="Zoom out"
          >
            −
          </button>
          <button
            onClick={handleReset}
            className="bg-white/20 hover:bg-white/30 text-white text-sm font-medium px-3 py-1 rounded-full transition min-w-[56px] text-center"
            aria-label="Reset zoom"
          >
            {Math.round(scale * 100)}%
          </button>
          <button
            onClick={() =>
              setScale((p) => {
                const next = Math.min(MAX_SCALE, p + 0.5);
                setPosition((pos) => clampPosition(pos, next));
                return next;
              })
            }
            className="bg-white/20 hover:bg-white/30 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition"
            aria-label="Zoom in"
          >
            +
          </button>
        </div>
        <span className="text-white/50 text-xs hidden sm:block select-none">
          Scroll or pinch to zoom · Drag to pan
        </span>
        <button
          onClick={onClose}
          className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition"
          aria-label="Close zoomed image"
        >
          <X size={24} className="text-white" />
        </button>
      </div>

      <div
        ref={containerRef}
        className="w-full h-full flex items-center justify-center overflow-hidden select-none"
        style={{ cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "default" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={image || "https://via.placeholder.com/800"}
          alt={alt}
          draggable={false}
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transition: isDragging ? "none" : "transform 0.1s ease-out",
            maxWidth: "90vw",
            maxHeight: "85vh",
            objectFit: "contain",
            userSelect: "none",
            WebkitUserSelect: "none",
          }}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/800?text=Image+Not+Found";
          }}
        />
      </div>

      <p className="absolute bottom-4 text-white/40 text-xs sm:hidden select-none">
        Pinch to zoom · Drag to pan
      </p>
    </div>
  );
};
// ─────────────────────────────────────────────────────────────────────────────

const ProductDetails = () => {
 const { id } = useParams();
// Normalize both sides to first-2-words slug for matching
const normalize = (str) =>
  str?.toLowerCase().replace(/[^a-z0-9]+/g, "-").split("-").filter(Boolean).slice(0, 2).join("-");
const productId = id;
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: quantity,
    });
    toast.success(`${product.title} × ${quantity} added to cart!`);
  };

  let product = null;
  let currentCategory = null;
  for (const category in productsData) {
const found = productsData[category]?.find(
  (p) => p?.id && normalize(p.id) === normalize(productId)
);
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
  const [showZoomModal, setShowZoomModal] = useState(false);

  const isContactPrice =
    typeof product.price === "string" && product.price.toLowerCase().includes("contact");

  const rating = product.rating || 4.8;
  const filledStars = Math.floor(rating);

  const relatedProducts = (productsData[currentCategory] || [])
  .filter((p) => p?.id && String(p.id) !== String(productId))
  .slice(0, 15);

  // SEO
  const siteUrl = "https://www.sssafetysolutions.com";
  const productUrl = `${siteUrl}/products/${product.id}`;
  const productPrice = typeof product.price === "number" ? product.price : 0;
  const productPriceFormatted =
    typeof product.price === "number"
      ? `Rs. ${product.price.toLocaleString("en-IN")}`
      : product.price;

  const seoTitle = `${product.title} | SS Safety Solutions Pakistan`;
  const seoDescription =
    product.desc ||
    `Buy ${product.title} at SS Safety Solutions Pakistan. Premium quality ${currentCategory} with nationwide delivery. ${productPriceFormatted}. Call now!`;
  const seoKeywords = `${product.title}, ${currentCategory}, safety equipment Pakistan, protective gear, ${product.title} price, buy ${product.title} online Pakistan`;

  const breadcrumbs = [
    { name: "Home", url: siteUrl },
    { name: "Products", url: `${siteUrl}/products` },
    { name: product.title, url: productUrl },
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description:
      product.desc || `Premium quality ${product.title} for safety and protection`,
    image: product.image,
    url: productUrl,
    brand: { "@type": "Brand", name: "SS Safety Solutions" },
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: "PKR",
      price: productPrice,
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
      availability: product.sold
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      seller: { "@type": "Organization", name: "SS Safety Solutions" },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating || 4.8,
      reviewCount: product.reviews || 200,
    },
    category: currentCategory,
    sku: product.id,
    mpn: product.id,
  };

  return (
    <div className="min-h-screen bg-[#f5f6f8] pt-20 lg:pt-28 pb-20">
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        url={productUrl}
        image={product.image}
        type="product"
        breadcrumbs={breadcrumbs}
        schema={[productSchema]}
        productPrice={productPrice > 0 ? productPrice : undefined}
        productPriceCurrency="PKR"
        productAvailability={product.sold ? "instock" : "oos"}
        productBrand="SS Safety Solutions"
        productRating={product.rating || 4.8}
        productReviewCount={product.reviews || 200}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Breadcrumb / Back ── */}
        <div className="flex items-center gap-2 mb-8 text-sm text-gray-500">
          <Link to="/products" className="inline-flex items-center gap-1.5 hover:text-orange-600 font-medium transition">
            <ArrowLeft size={16} />
            Products
          </Link>
          <span>/</span>
          <span className="text-gray-800 font-medium truncate max-w-xs">{product.title}</span>
        </div>

        {/* ══════════════════════════════════════════════════════
            MAIN PRODUCT CARD
        ══════════════════════════════════════════════════════ */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* ── LEFT: Image Panel ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              className="relative bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center min-h-[340px] lg:min-h-[560px]"
            >
              {/* In-Stock Badge */}
              <div className="absolute top-5 left-5 z-10 flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                In Stock
              </div>

              {/* Zoom button */}
              <button
                onClick={() => setShowZoomModal(true)}
                className="absolute top-5 right-5 z-10 bg-white hover:bg-orange-50 border border-gray-200 hover:border-orange-300 rounded-full p-2.5 shadow-md transition-all duration-200 hover:scale-110 group"
                aria-label="Zoom in on product image"
              >
                <ZoomIn size={22} className="text-gray-600 group-hover:text-orange-600 transition" />
              </button>

              <div className="p-10 lg:p-16 w-full h-full flex items-center justify-center">
                <img
                  src={product.image || "https://via.placeholder.com/800"}
                  alt={product.title}
                  className="w-full max-h-[420px] object-contain drop-shadow-lg"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/800?text=Image+Not+Found";
                  }}
                />
              </div>
            </motion.div>

            {/* ── RIGHT: Info Panel ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              className="flex flex-col p-7 sm:p-10 lg:p-12 gap-6"
            >

              {/* Category pill */}
              <div>
                <span className="inline-block bg-orange-50 text-orange-600 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-orange-100 mb-3">
                  {currentCategory}
                </span>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl lg:text-[2rem] font-extrabold text-gray-900 leading-tight tracking-tight">
                  {product.title}
                </h1>
              </div>

              {/* Rating row */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1.5 bg-yellow-50 px-3 py-1.5 rounded-lg border border-yellow-100">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        fill={i < filledStars ? "currentColor" : "none"}
                        stroke="currentColor"
                      />
                    ))}
                  </div>
                  <span className="font-bold text-gray-800 text-sm">{rating.toFixed(1)}</span>
                </div>
                <span className="text-gray-500 text-sm">
                  ({product.reviews || "200+"} reviews)
                </span>
                <span className="flex items-center gap-1 text-green-600 text-sm font-semibold">
                  <Package size={14} />
                  {product.sold || "300+"} sold
                </span>
              </div>

              {/* ── Price ── */}
              <div className="flex items-end gap-4 py-3 border-y border-gray-100">
                {isContactPrice ? (
                  <p className="text-3xl font-extrabold text-orange-600 tracking-tight">
                    {product.price}
                  </p>
                ) : (
                  <>
                    <p className="text-3xl font-extrabold text-gray-900 tracking-tight">
                      Rs.&nbsp;{Number(product.price).toLocaleString("en-IN")}
                    </p>
                    {product.originalPrice && (
                      <p className="text-lg text-gray-400 line-through mb-0.5">
                        Rs.&nbsp;{Number(product.originalPrice).toLocaleString("en-IN")}
                      </p>
                    )}
                  </>
                )}
              </div>

              {/* ── Quantity ── */}
              <div className="flex items-center gap-5">
                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Qty</span>
                <div className="flex items-center border-2 border-gray-200 hover:border-orange-300 rounded-xl overflow-hidden transition-colors">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-11 h-11 text-xl font-bold text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="w-12 text-center text-lg font-bold text-gray-900 select-none">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-11 h-11 text-xl font-bold text-gray-600 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* ══ CTA BUTTONS ══ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Add to Cart */}
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={handleAddToCart}
                  className="relative overflow-hidden group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-base py-4 rounded-2xl shadow-lg shadow-orange-200 transition-all duration-200 flex items-center justify-center gap-2.5"
                >
                  <ShoppingCart size={20} />
                  <span>{isContactPrice ? "Buy Now" : "Add to Cart"}</span>
                  {/* shine sweep */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </motion.button>

                {/* WhatsApp / Call */}
                <motion.a
                  whileTap={{ scale: 0.97 }}
                  whileHover={{ scale: 1.02 }}
                  href="https://wa.me/923347616779?text=Hi%20I%20am%20Mr.%20Sufyan%20from%20S.S%20Safety%20Solutions.%20How%20can%20I%20help%20you?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-base py-4 rounded-2xl shadow-lg shadow-green-200 transition-all duration-200 flex items-center justify-center gap-2.5"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp / Call</span>
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </motion.a>
              </div>

              {/* ── Trust Badges ── */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {[
                  { icon: <Truck size={20} />, label: "Nationwide Delivery" },
                  { icon: <ShieldCheck size={20} />, label: "100% Authentic" },
                  { icon: <RefreshCw size={20} />, label: "Easy Returns" },
                ].map(({ icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl py-3 px-2 text-center"
                  >
                    <span className="text-orange-500">{icon}</span>
                    <span className="text-xs font-medium text-gray-600 leading-tight">{label}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            DESCRIPTION + TAGS — BELOW THE MAIN CARD
        ══════════════════════════════════════════════════════ */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ── Description (2/3 width) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2 bg-white rounded-2xl shadow-md p-7 sm:p-9"
          >
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-1 h-6 bg-orange-500 rounded-full" />
              <h2 className="text-xl font-bold text-gray-900">Product Description</h2>
            </div>
            <p className="text-gray-600 leading-[1.85] text-[0.95rem]">
              {product.desc ||
                "Premium-grade professional safety equipment built to the highest standards. Engineered for superior protection, durability, and comfort in demanding environments."}
            </p>
          </motion.div>

          {/* ── Quick Highlights (1/3 width) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-md p-7 text-white"
          >
            <h2 className="text-lg font-bold mb-5 flex items-center gap-2">
              <CheckCircle size={20} />
              Key Highlights
            </h2>
            <ul className="space-y-3">
              {[
                "Professional Grade Quality",
                "CE & Safety Certified",
                "Fast Nationwide Shipping",
                "1-Year Warranty",
                "Expert After-Sale Support",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-white/90">
                  <span className="mt-0.5 w-4 h-4 shrink-0 bg-white/25 rounded-full flex items-center justify-center text-[10px] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ── Tags Section ── */}
        {product.tags && product.tags.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 bg-white rounded-2xl shadow-md p-7 sm:p-9"
          >
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-1 h-6 bg-orange-500 rounded-full" />
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <Tag size={18} className="text-orange-500" />
                Related Tags
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-300 text-gray-600 hover:text-orange-600 text-xs font-medium px-3 py-1.5 rounded-full transition-colors cursor-default"
                >
                  # {tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* ══════════════════════════════════════════════════════
            ZOOM MODAL
        ══════════════════════════════════════════════════════ */}
        {showZoomModal && (
          <ZoomModal
            image={product.image}
            alt={product.title}
            onClose={() => setShowZoomModal(false)}
          />
        )}

        {/* ══════════════════════════════════════════════════════
            RELATED PRODUCTS
        ══════════════════════════════════════════════════════ */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 lg:mt-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-8 bg-orange-500 rounded-full" />
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Related Products
              </h2>
            </div>

            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              spaceBetween={16}
              slidesPerView={2}
              breakpoints={{
                640: { slidesPerView: 3, spaceBetween: 20 },
                768: { slidesPerView: 4, spaceBetween: 20 },
                1024: { slidesPerView: 5, spaceBetween: 24 },
              }}
              className="related-products-swiper !pb-14"
            >
              {relatedProducts.map((relProduct) => (
                <SwiperSlide key={relProduct.id}>
                  <Link to={`/products/${relProduct.id}`} className="block h-full">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 h-full flex flex-col group"
                    >
                      <div className="aspect-square bg-gray-50 overflow-hidden">
                        <img
                          src={relProduct.image || "https://via.placeholder.com/400"}
                          alt={relProduct.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>

                      <div className="p-3 sm:p-4 flex flex-col flex-grow">
                        <h3 className="font-semibold text-gray-800 text-xs sm:text-sm line-clamp-2 mb-3 leading-snug">
                          {relProduct.title}
                        </h3>

                        <div className="mt-auto flex items-center justify-between gap-1">
                          <span className="text-sm sm:text-base font-bold text-orange-600">
                            {typeof relProduct.price === "number"
                              ? `Rs. ${relProduct.price.toLocaleString("en-IN")}`
                              : relProduct.price}
                          </span>

                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={11}
                                fill={
                                  i < Math.floor(relProduct.rating || 4.6)
                                    ? "currentColor"
                                    : "none"
                                }
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