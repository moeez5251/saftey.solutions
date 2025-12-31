import React from 'react'
import { useState } from 'react';
import { Menu, X, User, ShoppingCart } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import {  Star, Heart } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay,Scrollbar,A11y } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Home() {
    const products = [
  {
    id: 1,
    name: "Premium Safety Boots Pro-X",
    price: 7000,
    oldPrice: 10000,
    rating: 4.9,
    badge: "BEST SELLER",
    image: "https://m.media-amazon.com/images/I/71Dn8rcuo7L._AC_UY900_.jpg",
    description: "Steel-toe protection with anti-slip sole. EN ISO 20345 certified for ultimate comfort in heavy-duty environments."
  },
  {
    id: 2,
    name: "Tactical Ballistic Helmet",
    price: 4000,
    oldPrice: 6000,
    rating: 4.8,
    badge: "NEW ARRIVAL",
    image: "https://acelinkarmor.com/wp-content/uploads/2024/08/helmet-category-banner.jpg",
    description: "NIJ Level IIIA protection. Lightweight, adjustable fit for security and tactical operations."
  },
  {
    id: 3,
    name: "High-Visibility Safety Vest",
    price: 9000,
    oldPrice: 12000,
    rating: 4.7,
    badge: null,
    image: "https://cdn.prod.website-files.com/647888ca92d03e3fca3f1ea0/647888ca92d03e3fca3f23a6_Safety%20yellow%20and%20orange%20vests.jpg",
    description: "ANSI Class 2 reflective vest. Breathable mesh for all-day comfort in road and construction zones."
  },
  {
    id: 4,
    name: "Full-Body Fall Arrest Harness",
    price: 3500,
    oldPrice: 5000,
    rating: 5.0,
    badge: "TOP RATED",
    image: "https://sbc-content.s3.amazonaws.com/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/S/a/Safety-Lanyards_1.jpg",
    description: "OSHA compliant full-body harness with quick-connect buckles and padded support."
  },
  {
    id: 5,
    name: "Fire-Resistant Gloves Pro",
    price: 4000,
    oldPrice: 7000,
    rating: 4.6,
    badge: "LIMITED STOCK",
    image: "https://cdn11.bigcommerce.com/s-tumf4kk1l4/images/stencil/original/l/apikrtmf9__92534.original.jpg",
    description: "Heat-resistant up to 500°C. Dexterity and grip for firefighting and industrial use."
  }
  ,{
     id: 6,
    name: "Fire-Resistant Gloves Pro",
    price: 3400,
    oldPrice: 2500,
    rating: 4.6,
    badge: "LIMITED STOCK",
    image: "https://cdn11.bigcommerce.com/s-tumf4kk1l4/images/stencil/original/l/apikrtmf9__92534.original.jpg",
    description: "Heat-resistant up to 500°C. Dexterity and grip for firefighting and industrial use."
  }
];

const categories = [
  {
    title: "Security Equipment",
    desc: "Tactical gear, body armor, helmets & protective suits for high-risk operations.",
    img: "https://acelinkarmor.com/wp-content/uploads/2024/08/helmet-category-banner.jpg",
  },
  {
    title: "Rescue Equipment",
    desc: "Ropes, harnesses, stretchers & specialized tools for emergency response.",
    img: "https://www.cmcpro.com/wp-content/uploads/wd/products/500104_AZTEK_ProSeries_System__5.jpg?ver=1731612266",
  },
  {
    title: "Fire Fighting Equipment",
    desc: "Extinguishers, hoses, nozzles & essential firefighting tools.",
    img: "https://i0.wp.com/newelaf.com/wp-content/uploads/2023/05/Fire-Fighting-Equipments.webp",
  },
  {
    title: "Safety Shoes",
    desc: "Steel-toe, anti-slip boots meeting international safety standards.",
    img: "https://m.media-amazon.com/images/I/71Dn8rcuo7L._AC_UY900_.jpg",
  },
  {
    title: "Road Safety",
    desc: "Cones, reflective signs, barriers & safety signage.",
    img: "https://skyk.in/wp-content/uploads/2025/03/13146690_Traffic-barriers-collection-min-800x600.jpg",
  },
  {
    title: "Fire Fighting Vehicles",
    desc: "Specialized fire trucks for rapid emergency deployment.",
    img: "https://www.fireapparatusmagazine.com/wp-content/uploads/2025/01/2501FA_appshow_p01.jpg",
  },
  {
    title: "Fire Alarm Systems",
    desc: "Smoke detectors, sensors & early warning panels.",
    img: "https://douglaselectric.us/wp-content/uploads/2023/06/fire-alarm-system-installation-2-859x600.jpg",
  },
  {
    title: "Fall Arrest Systems",
    desc: "Harnesses, lanyards & anchors for height safety.",
    img: "https://sbc-content.s3.amazonaws.com/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/S/a/Safety-Lanyards_1.jpg",
  },
  {
    title: "Personal Protective Wear",
    desc: "High-visibility jackets & weather-resistant clothing.",
    img: "https://cdn.prod.website-files.com/647888ca92d03e3fca3f1ea0/647888ca92d03e3fca3f23a6_Safety%20yellow%20and%20orange%20vests.jpg",
  },
  {
    title: "Medical Equipment for Ambulance",
    desc: "Defibrillators, oxygen systems & emergency kits.",
    img: "http://mfimedical.com/cdn/shop/articles/stretcher-in-ambulance-1_7982e7b7-ef61-4213-8138-fcb05ceeddc7.jpg?v=1748437823",
  },
  {
    title: "Personal Protective Equipment",
    desc: "Helmets, gloves, glasses & full PPE kits.",
    img: "https://cdn11.bigcommerce.com/s-tumf4kk1l4/images/stencil/original/l/apikrtmf9__92534.original.jpg",
  },
];


   
  return (
    <>
  


<main>
  <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden ">
    
    {/* Your Original Background Image */}
    <img 
      src="https://wallpapercave.com/wp/wp2592365.jpg" 
      alt="Fire Safety"
      className="absolute inset-0 w-full h-full object-cover -z-10"
    />

    {/* Lighter Dim Overlay - So image is visible */}
    <div className="absolute inset-0 bg-opacity-50  -z-10"></div>

    {/* Content - Simple */}
    <div className="max-w-4xl mx-auto">
      
      {/* Logo + Name */}
      <div className="mb-8 opacity-0 animate-fadeIn">
        <img 
          src="https://png.pngtree.com/png-vector/20250112/ourmid/pngtree-bright-orange-flame-icon-illustration-with-vibrant-yellow-and-red-tones-png-image_15160948.png" 
          alt="Flame Icon"
          className="h-20 w-20 mx-auto mb-4"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-2xl">
          <span className="text-orange-500">SS</span>.SAFETY SOLUTIONS
        </h1>
      </div>

      {/* 5 Simple Lines */}
      <p className="text-lg sm:text-xl text-white mb-10 leading-relaxed opacity-0 animate-fadeIn animation-delay-500 drop-shadow-lg">
        We deal in high-quality fire safety products<br />
        Advanced fire extinguishers and alarm systems<br />
        Reliable and certified equipment<br />
        Trusted for homes, offices, and industries<br />
        Your partner in safety and protection
      </p>

      {/* Read More Button */}
      <div className="opacity-0 animate-fadeIn animation-delay-1000">
        <button className="px-10 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg rounded-lg shadow-2xl transition transform hover:scale-105">
          Read More
        </button>
      </div>
    </div>
  </section>

  {/* Fade-In Animation */}
  <style jsx>{`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn {
      animation: fadeIn 1s ease-out forwards;
    }
    .animation-delay-500 { animation-delay: 0.5s; }
    .animation-delay-1000 { animation-delay: 1s; }
  `}</style>
</main>


<div className='w-full h-[1px] mt-20 bg-orange-500'></div>

 
<main className="min-h-screen bg-gradient-to-br from-gray-50 via-red-50/30 to-gray-50 py-20 px-4">

  <motion.h1
    initial={{ opacity: 0, y: -40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="text-4xl md:text-6xl font-extrabold text-center text-red-800 uppercase tracking-wider mb-20"
  >
    Premium Safety Equipment Categories
  </motion.h1>

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
    
    {categories.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: index * 0.1 }}
        className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border-t-4 border-red-700"
      >
        <div className="relative overflow-hidden">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold text-red-700 mb-3">
            {item.title}
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            {item.desc}
          </p>
          <button className="inline-flex items-center gap-2 bg-red-700 text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-red-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Explore <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    ))}

  </div>
</main>


<products>
      <motion.h1 
    initial={{ opacity: 0, y: -40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="text-4xl md:text-6xl font-extrabold text-center text-red-800 uppercase tracking-wider mb-20"
  >
    Our Featured Products
  </motion.h1>

 
     


      <motion.div
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="your-classes-here"
>
  <Swiper
    modules={[Navigation, Pagination, A11y, Autoplay]}
    slidesPerView={2}
    slidesPerGroup={1}
    spaceBetween={20}
    loop={true}
    centeredSlides={false}
    className="w-full max-w-6xl ml-10"
    pagination={{
      el: ".custom-pagination",
      clickable: true,
      renderBullet: (index, className) => {
        return `<span class="${className}">${index + 1}</span>`;
      },
    }}
    scrollbar={{ draggable: true }}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    breakpoints={{
      0: { slidesPerView: 1, slidesPerGroup: 1 },
      640: { slidesPerView: 2, slidesPerGroup: 1 },
    }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    {products.map((product) => (
      <SwiperSlide key={product.id}>
        <div className="group bg-white rounded-2xl border-1 border-red-900 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Badge */}
            {product.badge && (
              <div className="absolute top-4 left-4 bg-red-700 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider shadow-lg">
                {product.badge}
              </div>
            )}

            {/* Rating */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-1 shadow-md">
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              <span className="text-sm font-bold text-gray-800">{product.rating}</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 text-center">
            <h3 className="text-2xl font-bold text-red-700 mb-3">
              {product.name}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl font-extrabold text-red-700">
                Rs.{product.price.toFixed()}
              </span>
              {product.oldPrice && (
                <span className="text-lg text-gray-500 line-through ml-3">
                  Rs.{product.oldPrice.toFixed()}
                </span>
              )}
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-center gap-3">
              <button className="inline-flex items-center gap-2 bg-red-700 text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-red-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>

              {/* Replaced Heart with Details button */}
              <button className="px-6 py-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-300 shadow-md font-semibold text-gray-700 hover:text-gray-900">
                Details
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}

    <div className="custom-pagination flex justify-center mt-8 gap-2"></div>
  </Swiper>
</motion.div>


   <motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  className="bg-white py-16 md:py-24"
>
  <div className="max-w-7xl mx-auto px-6">
    {/* Heading - Matching your website style exactly */}
    <h2 className="text-4xl md:text-6xl font-extrabold text-center text-red-800 uppercase tracking-wider mb-16 md:mb-20">
      Message from the <span className="text-orange-600">CEO</span>
    </h2>

    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left: CEO Image with Straight CEO Badge on Top-Right */}
      <div className="flex justify-center lg:justify-end order-first lg:order-first">
        <div className="relative group">
          {/* Subtle Orange Glow - Responsive */}
          <div className="absolute -inset-4 md:-inset-6 bg-orange-400/20 rounded-full blur-3xl opacity-60 group-hover:opacity-90 transition duration-700"></div>
          
          {/* Main Circular Image - Responsive Size */}
          <div className="relative w-72 h-72 md:w-96 md:h-96  rounded-full overflow-hidden shadow-2xl border-8 md:border-12 border-white " >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdwNykcGgRL1r-sexfy1CJJ7GeHXNolyS2w&s"  // Replace with your actual CEO photo URL
              alt="Mr. Sanjay Kumar - CEO"
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 bg-black"
            />
          </div>

          {/* Straight CEO Badge - Top Right, Responsive Positioning & Size */}
          <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-gradient-to-br from-orange-600 to-red-700 text-white px-8 py-4 md:px-10 md:py-5 rounded-full shadow-2xl border-4 border-white animate-pulse">
            <p className="text-xl md:text-2xl font-extrabold tracking-wider">
              CEO
            </p>
          </div>

          {/* Subtle Flame Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-tr from-orange-500 via-transparent to-red-600 opacity-30"></div>
        </div>
      </div>

      {/* Right: Clean & Professional Message - Appears below image on mobile */}
      <div className="text-gray-700 space-y-8 order-last lg:order-last">
        <div className="bg-white rounded-3xl p-8 md:p-10 lg:p-12 shadow-lg border border-gray-100">
          <p className="text-lg md:text-xl leading-relaxed text-justify">
            At <span className="font-bold text-orange-600">SS.SAFETY SOLUTIONS</span>, we believe safety is the foundation of progress. 
            We are dedicated to providing <span className="font-semibold text-red-700">world-class, certified safety equipment</span> 
            that protects lives and empowers industries, workplaces, and families across the nation.
          </p>
          
          <p className="text-lg md:text-xl leading-relaxed text-justify mt-6">
            Every product we offer is built on trust, innovation, and uncompromising quality. 
            Our commitment is simple: to deliver reliable protection you can count on, every single time.
          </p>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <p className="text-2xl md:text-3xl font-bold text-red-800">
              — Mr. SUFYAIN ALI
            </p>
            <p className="text-lg font-medium text-orange-700 mt-1">
              Founder & Chief Executive Officer
            </p>
            <p className="text-base text-gray-600">
              SS.SAFETY SOLUTIONS
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</motion.div>
    



  
     
</products>





    </>
  )
}

export default Home;