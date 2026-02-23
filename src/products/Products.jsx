import { ShoppingCart } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { productsData, categories } from '../cat/ALL';
import "swiper/css";
import "swiper/css/pagination";
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';
import SEO from '../components/SEO';

function Products() {
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const siteUrl = "https://www.sssafetysolutions.com";
    const productsUrl = `${siteUrl}/products`;

    const breadcrumbs = [
        { name: "Home", url: siteUrl },
        { name: "Products", url: productsUrl }
    ];

    const productsSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "All Products - SS Safety Solutions",
        "description": "Browse our complete range of premium safety equipment including security equipment, rescue equipment, fire fighting systems, PPE, and more.",
        "url": productsUrl,
        "publisher": {
            "@type": "Organization",
            "name": "SS Safety Solutions"
        }
    };

    const categoryRefs = useRef({});
    const tabRefs = useRef({});
    const tabsContainerRef = useRef(null);
    const stickyRef = useRef(null);
    const isProgrammaticScroll = useRef(false);

    const location = useLocation();
    const { addToCart } = useCart();
    const [searchParams] = useSearchParams()

    const handleAddToCart = (product, e) => {
        e.preventDefault();
        e.stopPropagation();

        addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1,
        });

        toast.success(`${product.title} added to cart!`);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (isProgrammaticScroll.current) return;

                const visible = entries
                    .filter(e => e.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top -
                            b.boundingClientRect.top
                    );

                if (visible.length > 0) {
                    const cat = visible[0].target.dataset.category;
                    setActiveCategory(cat);
                }
            },
            {
                rootMargin: "-120px 0px -60% 0px",
                threshold: 0,
            }
        );

        categories.forEach((cat) => {
            const el = categoryRefs.current[cat];
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    /* ---------------- CENTER ACTIVE TAB ---------------- */
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

    /* ---------------- TAB CLICK SCROLL ---------------- */
    const scrollToCategory = (cat) => {
        window.scrollTo(0,0)
        console.log(cat);
        isProgrammaticScroll.current = true;
        setActiveCategory(cat);
        const headerEl = categoryRefs.current[cat];
        if (headerEl) {
            const stickyRect = stickyRef.current?.getBoundingClientRect();
            const stickyHeight = stickyRect
                ? stickyRect.height
                : window.innerWidth >= 768
                    ? 80
                    : 110;

            const headerTop =
                headerEl.getBoundingClientRect().top + window.pageYOffset;

            const targetY = headerTop - stickyHeight - 16;

            window.scrollTo({
                top: targetY,
                behavior: "smooth",
            });
        }

        setTimeout(() => {
            isProgrammaticScroll.current = false;
        }, 500);
    };

    /* ---------------- HASH ID ---------------- */
    const getHashId = (title) =>
        title
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/&/g, 'and')
            .replace(/s$/g, '');

    /* ---------------- HASH SCROLL ---------------- */
    useEffect(() => {
        scrollToCategory(searchParams.get("id"))

        return () => {

        }
    }, [])

    // ── NEW: Highlight product when arrived via search hash (#product-id) ──
    useEffect(() => {
        if (!location.hash) return;

        const productId = location.hash.substring(1);
        if (!productId) return;

        const element = document.getElementById(productId);
        if (!element) return;

        // Scroll to product
        element.scrollIntoView({ behavior: "smooth", block: "center" });

        // Apply orange border + light background highlight
        element.classList.add(
            'border-orange-600',
            'border-4',
            'bg-orange-50/70',
            'shadow-lg'
        );

        // Remove highlight after 5 seconds
        const timer = setTimeout(() => {
            element.classList.remove(
                'border-orange-600',
                'border-4',
                'bg-orange-50/70',
                'shadow-lg'
            );
        }, 5000);

        return () => clearTimeout(timer);
    }, [location.hash]);

    return (
        <div className="min-h-screen bg-gray-50">
            <SEO
                title="All Safety Equipment Products | SS Safety Solutions Pakistan"
                description="Browse our complete range of premium safety equipment including security equipment, rescue equipment, fire fighting systems, PPE, safety shoes, road safety, and more. Nationwide delivery in Pakistan."
                keywords="safety equipment Pakistan, buy safety gear online, protective equipment, fire fighting equipment, rescue tools, security equipment, industrial safety products"
                url={productsUrl}
                image={`${siteUrl}/products-og.jpg`}
                type="website"
                breadcrumbs={breadcrumbs}
                schema={[productsSchema]}
            />
            {/* Sticky Category Tabs */}
            <div
                ref={stickyRef}
                className="sticky top-[100px] md:top-[80px] z-20 bg-white border-b border-gray-200"
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
                    const hashId = getHashId(cat);

                    return (
                        <section key={cat} id={hashId} className="mb-16">
                            <div
                                ref={(el) => (categoryRefs.current[cat] = el)}
                                data-category={cat}
                                className="flex items-center mb-6 px-2"
                            >
                                <h2 className="text-4xl md:text-5xl font-bold text-orange-600 flex-1">
                                    {cat}
                                </h2>
                                <span className="text-lg md:text-xl text-red-700">
                                    {products.length} products
                                </span>
                            </div>

                            {products.length > 0 ? (
                                <Swiper
                                    modules={[Pagination]}
                                    pagination={{
                                        clickable: true,
                                        renderBullet: (i, c) =>
                                            `<span class="${c}">${i + 1}</span>`,
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
                                                            id={product.id}
                                                        >
                                                            <div className="aspect-square bg-gray-100 relative overflow-hidden">
                                                                <img
                                                                    src={product.image || "https://via.placeholder.com/300"}
                                                                    alt={product.title}
                                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                                    loading="lazy"
                                                                />
                                                                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                                                    CALL
                                                                </div>
                                                            </div>

                                                            <div className="p-3 flex flex-col flex-grow">
                                                                <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2">
                                                                    {product.title}
                                                                </h3>

                                                                <div className="mb-2">
                                                                    <span className="text-lg font-bold text-red-600">
                                                                        {typeof product.price === "number"
                                                                            ? `Rs. ${product.price.toLocaleString("en-IN")}`
                                                                            : product.price}
                                                                    </span>
                                                                </div>

                                                                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                                                                    <span>{product.sold || "50+"} sold</span>
                                                                    <ShoppingCart
                                                                        size={28}
                                                                        className="cursor-pointer hover:text-orange-600 transition"
                                                                        onClick={(e) => handleAddToCart(product, e)}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            ) : (
                                <div className="text-center py-24 text-gray-500">
                                    <p className="text-2xl font-medium mb-4">
                                        No products available yet
                                    </p>
                                    <p className="text-lg">Coming soon!</p>
                                </div>
                            )}
                        </section>
                    );
                })}
            </div>
        </div>
    );
}

export default Products;