import { ShoppingCart } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { productsData, categories } from '../cat/ALL'; // Make sure this path is correct
import "swiper/css";
import "swiper/css/pagination";
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

function Products() {
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const categoryRefs = useRef({});
    const tabRefs = useRef({});
    const tabsContainerRef = useRef(null);
    const stickyRef = useRef(null);
    const { addToCart } = useCart(); // ← Get the function

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevents going to product detail

   addToCart({
  id: product.id,
  title: product.title,
  price: product.price,  // ← JUST THIS — pass exactly what comes from product
  image: product.image,
});
    toast.success(`${product.title} added to cart!`);
  };
    useEffect(() => {
        let rafId = null;
        let scrolling = false;

        const updateActiveCategory = () => {
            const stickyRect = stickyRef.current?.getBoundingClientRect();
            const triggerY = stickyRect ? stickyRect.bottom : 120;

            let newActive = activeCategory;

            categories.forEach((cat) => {
                const headerEl = categoryRefs.current[cat];
                if (headerEl) {
                    const top = headerEl.getBoundingClientRect().top;
                    if (top <= triggerY + 30) {
                        newActive = cat;
                    }
                }
            });

            if (newActive !== activeCategory) {
                setActiveCategory(newActive);
            }

            scrolling = false;
            rafId = null;
        };

        const onScroll = () => {
            if (!scrolling) {
                scrolling = true;
                rafId = requestAnimationFrame(updateActiveCategory);
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        updateActiveCategory();

        return () => {
            window.removeEventListener('scroll', onScroll);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [activeCategory]);

    useEffect(() => {
        const tabEl = tabRefs.current[activeCategory];
        if (tabEl && tabsContainerRef.current) {
            tabEl.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest",
            });
        }
    }, [activeCategory]);

    const scrollToCategory = (cat) => {
        setActiveCategory(cat);

        const headerEl = categoryRefs.current[cat];
        if (headerEl) {
            const stickyRect = stickyRef.current?.getBoundingClientRect();
            const stickyHeight = stickyRect ? stickyRect.height : (window.innerWidth >= 768 ? 80 : 110);

            const headerTop = headerEl.getBoundingClientRect().top + window.pageYOffset;
            const targetY = headerTop - stickyHeight - 16;

            window.scrollTo({
                top: targetY,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Sticky Category Tabs */}
            <div ref={stickyRef} className="sticky top-[100px] md:top-[80px] z-20 bg-white border-b border-gray-200"
>
                <div
                    ref={tabsContainerRef}
                    className="overflow-x-auto whitespace-nowrap scrollbar-hide px-3"
                >
                    <div className="flex gap-6 min-w-max py-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                ref={(el) => (tabRefs.current[cat] = el)}
                                onClick={() => scrollToCategory(cat)}
                                className={`relative text-xl md:text-2xl font-bold pb-3 transition-all whitespace-nowrap
                                    ${activeCategory === cat
                                        ? "text-orange-600"
                                        : "text-black hover:text-orange-600"
                                    }`}
                            >
                                {cat}
                                {activeCategory === cat && (
                                    <span className="absolute left-0 right-0 -bottom-[1px] h-[3px] bg-orange-600 rounded-full" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Products Sections */}
            <div className="max-w-7xl mx-auto px-3 py-8 pb-32">
                {categories.map((cat) => {
                    const products = productsData[cat] || [];

                    return (
                        <section key={cat} className="mb-16">
                            <div
                                ref={(el) => (categoryRefs.current[cat] = el)}
                                className="flex items-center mb-6 px-2"
                            >
                                <h2 className="text-4xl md:text-5xl font-bold text-orange-600 flex-1">{cat}</h2>
                                <span className="text-lg md:text-xl text-red-700">{products.length} products</span>
                            </div>

                            <Swiper
                                modules={[Pagination]}
                                pagination={{
                                    clickable: true,
                                    renderBullet: (index, className) => `<span class="${className}">${index + 1}</span>`,
                                }}
                                className="product-swiper"
                            >
                                {products.reduce((pages, product, idx) => {
                                    if (idx % 10 === 0) pages.push([]);
                                    pages[pages.length - 1].push(product);
                                    return pages;
                                }, []).map((page, pageIdx) => (
                                    <SwiperSlide key={pageIdx}>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                            {page.map((product) => (
                                                <Link
                                                    to={`/products/${product.id}`}
                                                    key={product.id}
                                                    className="block"
                                                >
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 50 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true, margin: "-50px" }}
                                                        transition={{ duration: 0.5, delay: page.indexOf(product) * 0.05 }}
                                                        className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group"
                                                    >
                                                        <div className="aspect-square bg-gray-100 relative overflow-hidden">
                                                            <img
                                                                src={product.image || "https://via.placeholder.com/300"}
                                                                alt={product.title}
                                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                                onError={(e) => e.target.src = "https://via.placeholder.com/300"}
                                                            />
                                                            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                                                CALL
                                                            </div>
                                                        </div>

                                                        <div className="p-3 flex flex-col flex-grow">
                                                            <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2">
                                                                {product.title}
                                                            </h3>

                                                            {product.desc && (
                                                                <p className="text-xs text-gray-500 line-clamp-2 mb-2">
                                                                    {product.desc}
                                                                </p>
                                                            )}

                                                            <div className="mb-2">
                                                                <span className="text-lg font-bold text-red-600">
                                                                    {typeof product.price === "number"
                                                                        ? `Rs. ${product.price.toLocaleString("en-IN")}`
                                                                        : product.price}
                                                                </span>
                                                                {product.originalPrice && (
                                                                    <span className="text-xs text-gray-500 line-through ml-2">
                                                                        Rs. {product.originalPrice.toLocaleString("en-IN")}
                                                                    </span>
                                                                )}
                                                            </div>

                                                            <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                                                                <span>{product.sold || "50+"} sold</span>
                                                                <ShoppingCart size={28}  onClick={(e) => handleAddToCart(product, e)}/>
                                                            </div>

                                                            <div className="flex items-center">
                                                                <div className="flex text-black text-sm">
                                                                    {"★★★★★".slice(0, Math.floor(product.rating || 4.6))}
                                                                    {"☆☆☆☆☆".slice(0, 5 - Math.floor(product.rating || 4.6))}
                                                                </div>
                                                                <span className="text-xs text-gray-500 ml-1">
                                                                    ({product.reviews || "100+"})
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                </Link>
                                            ))}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </section>
                    );
                })}
            </div>
        </div>
    );
}

export default Products;