import React from 'react';
import { Menu, X, User, ShoppingCart } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';
import SEO from '../components/SEO';

function Home() {
  const siteUrl = "https://www.sssafetysolutions.com";
  
  const breadcrumbs = [
    { name: "Home", url: siteUrl }
  ];

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SS Safety Solutions - Home",
    "description": "Leading supplier of premium safety equipment, protective gear, fire fighting systems, and rescue equipment in Pakistan. Quality safety solutions for industrial, construction, and emergency services.",
    "url": siteUrl,
    "publisher": {
      "@type": "Organization",
      "name": "SS Safety Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/android-chrome-192x192.png`
      }
    }
  };
  
 const products = [
    {
      id: 1,
      name: "Premium Safety Boots Pro-X",
      price: "Call for Price",
      rating: 4.9,
      badge: "BEST SELLER",
      image: "https://m.media-amazon.com/images/I/71Dn8rcuo7L._AC_UY900_.jpg",
      description: "Steel-toe protection with anti-slip sole. EN ISO 20345 certified for ultimate comfort in heavy-duty environments."
    },
    {
      id: 2,
      name: "Tactical Ballistic Helmet",
      price: "Call for Price",
      rating: 4.8,
      badge: "NEW ARRIVAL",
      image: "https://acelinkarmor.com/wp-content/uploads/2024/08/helmet-category-banner.jpg",
      description: "NIJ Level IIIA protection. Lightweight, adjustable fit for security and tactical operations."
    },
    {
      id: 3,
      name: "High-Visibility Safety Vest",
      price: "Call for Price",
      rating: 4.7,
      badge: null,
      image: "https://cdn.prod.website-files.com/647888ca92d03e3fca3f1ea0/647888ca92d03e3fca3f23a6_Safety%20yellow%20and%20orange%20vests.jpg",
      description: "ANSI Class 2 reflective vest. Breathable mesh for all-day comfort in road and construction zones."
    },
    {
      id: 4,
      name: "Full-Body Fall Arrest Harness",
      price: "Call for Price",
      rating: 5.0,
      badge: "TOP RATED",
      image: "https://sbc-content.s3.amazonaws.com/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/S/a/Safety-Lanyards_1.jpg",
      description: "OSHA compliant full-body harness with quick-connect buckles and padded support."
    },
    {
      id: 5,
      name: "Fire-Resistant Gloves Pro",
      price: "Call for Price",
      rating: 4.6,
      badge: "LIMITED STOCK",
      image: "https://cdn11.bigcommerce.com/s-tumf4kk1l4/images/stencil/original/l/apikrtmf9__92534.original.jpg",
      description: "Heat-resistant up to 500°C. Dexterity and grip for firefighting and industrial use."
    },
    {
      id: 6,
      name: "Fire-Resistant Gloves Pro",
      price: "Call for Price",
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
      title: "Fire Fighting Vehicle",
      desc: "Specialized fire trucks for rapid emergency deployment.",
      img: "https://media.gettyimages.com/id/89909590/photo/modern-red-fire-engine-truck-isolated-on-white-clipping-path.jpg?s=612x612&w=gi&k=20&c=prDUir8GOlpxi-ul0Pa7m4oKTG6X9tWNEoJk2MAFqNY=",
    },
    {
      title: "Fire Alarm System",
      desc: "Smoke detectors, sensors & early warning panels.",
      img: "https://douglaselectric.us/wp-content/uploads/2023/06/fire-alarm-system-installation-2-859x600.jpg",
    },
    {
      title: "Fall Arrest System",
      desc: "Harnesses, lanyards & anchors for height safety.",
      img: "https://www.shutterstock.com/image-photo/harness-fall-arrest-lanyard-260nw-2535477175.jpg",
    },
    {
      title: "Personal Protective Wear",
      desc: "High-visibility jackets & weather-resistant clothing.",
      img: "https://cdn.prod.website-files.com/647888ca92d03e3fca3f1ea0/647888ca92d03e3fca3f23a6_Safety%20yellow%20and%20orange%20vests.jpg",
    },
    {
      title: "Medical Equipment For Ambulance",
      desc: "Defibrillators, oxygen systems & emergency kits.",
      img: "http://mfimedical.com/cdn/shop/articles/stretcher-in-ambulance-1_7982e7b7-ef61-4213-8138-fcb05ceeddc7.jpg?v=1748437823",
    },
    {
      title: "Personal Protective Equipments",
      desc: "Helmets, gloves, glasses & full PPE kits.",
      img: "https://thumbs.dreamstime.com/b/personal-protective-equipment-ppe-kit-hospital-doctors-nurses-personal-protective-equipment-ppe-kit-180073267.jpg",
    },
    {
      title: "Laboratory safety System",
      desc: "Goggles, lab coats, gloves & safety equipment for laboratory work.",
      img: "https://media.istockphoto.com/id/918825222/photo/woman-scientist-adjusts-protective-goggles-staring-intently.jpg?s=612x612&w=0&k=20&c=SC0wMROl6EG69TUoKXnlQ-lssKlQzVAHjswjUTWiGSk=",
    },
    {
      title: "Safety Containment System",
      desc: "Secondary containment solutions for hazardous materials storage.",
      img: "https://assets.production.denios.io/article/327073_20220809-092005.jpg",
    },
    {
      title: "Spill Prevention Containment and Control",
      desc: "Spill kits, absorbents & containment systems for emergency response.",
      img: "https://www.absorbentsonline.com/spill-containment-blog/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3J/jPWh0dHBzJTNBJTJGJTJGd3d3LmFic29yYmVudHNvbmxpbmUuY29tJTJGc3BpbGwtY29udGFpbm1lbnQtYmxvZyUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA0JTJGV2hhdC1Jcy1BLVNwaWxsLUtpdC0xMDI0eDY4My5qcGcmY2FjaGVNYXJrZXI9MTY0OTE2MzIzNi00NDgwNyZ0b2tlbj0xY2E2YmU1NWQ5ZGU5YmRk.q.jpg",
    },
    {
      title: "Industrial Tools",
      desc: "Heavy-duty machinery & equipment for industrial applications.",
      img: "https://media.istockphoto.com/id/1157027831/photo/industrial-factory-interior-with-equipment-conveyor-line-and-steel-tools-industry-background.jpg?s=612x612&w=0&k=20&c=YsNqcfwIgc8V_FU--eztNOQrZB1PWRFruUVS0M1w36U=",
    },
    {
      title: "Hand tools",
      desc: "Wrenches, hammers, pliers & essential manual tools.",
      img: "https://media.istockphoto.com/id/596042932/photo/set-of-hand-various-work-tools-on-grey-background.jpg?s=612x612&w=0&k=20&c=Tpz6mmcCZs_tVPd_yq0lmDvPqkvp0Zo5XMWpICP6rZk=",
    },
    {
      title: "Power Tools",
      desc: "Drills, saws, grinders & electric power tools.",
      img: "https://www.shutterstock.com/image-photo/construction-carpentry-tools-electric-corded-260nw-1990855535.jpg",
    },
  ];

  const { addToCart } = useCart();

  // Helper to create URL-safe hash from title (exact match with Products page)
  const getHashId = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
  };

  return (
    <>
      <SEO
        title="SS Safety Solutions | Premium Safety Equipment & Protective Gear Pakistan"
        description="Leading supplier of premium safety equipment, protective gear, fire fighting systems, and rescue equipment in Pakistan. Quality safety solutions for industrial, construction, and emergency services."
        keywords="safety equipment Pakistan, protective gear, fire fighting equipment, rescue equipment, PPE, safety shoes, road safety, fire alarm systems, fall arrest systems, laboratory safety"
        url={siteUrl}
        image={`${siteUrl}/og-image.jpg`}
        type="website"
        breadcrumbs={breadcrumbs}
        schema={[homeSchema]}
      />
      <main>
        <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden ">
          <img 
            src="https://wallpapercave.com/wp/wp2592365.jpg" 
            alt="Fire Safety"
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
          <div className="absolute inset-0 bg-opacity-50  -z-10"></div>

          <div className="max-w-4xl mx-auto">
            <div className="mb-8 opacity-0 animate-fadeIn">
              <img 
                src="https://png.pngtree.com/png-vector/20250112/ourmid/pngtree-bright-orange-flame-icon-illustration-with-vibrant-yellow-and-red-tones-png-image_15160948.png" 
                alt="Flame Icon"
                className="h-20 w-20 mx-auto mb-4"
              />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-2xl">
                <span className="text-orange-500">S.S</span> SAFETY SOLUTIONS
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-white mb-10 leading-relaxed opacity-0 animate-fadeIn animation-delay-500 drop-shadow-lg">
              We deal in high-quality fire safety products<br />
              Advanced fire extinguishers and alarm systems<br />
              Reliable and certified equipment<br />
              Trusted for homes, offices, and industries<br />
              Your partner in safety and protection
            </p>

            <div className="opacity-0 animate-fadeIn animation-delay-1000">
              <button className="px-10 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg rounded-lg shadow-2xl transition transform hover:scale-105">
                Read More
              </button>
            </div>
          </div>
        </section>

        <style>{`
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
          {categories.map((item, index) => {
            const hashId = getHashId(item.title);

            return (
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
                  <Link to={`/products?id=${item.title}`}>
                    <button className="inline-flex items-center gap-2 bg-red-700 text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-red-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                      Explore <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>

      <section className="py-20 px-4 bg-gray-50">
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
          >
            {products.map((product) => {
              const handleAddToCart = (e) => {
                e.preventDefault();
                e.stopPropagation();

                addToCart({
                  id: product.id,
                  title: product.name,
                  price: product.price,
                  image: product.image,
                  quantity: 1,
                });

                toast.success(`${product.name} × 1 added to cart!`);
              };

              return (
                <SwiperSlide key={product.id}>
                  <div className="group bg-white rounded-2xl border-1 border-red-900 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {product.badge && (
                        <div className="absolute top-4 left-4 bg-red-700 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider shadow-lg">
                          {product.badge}
                        </div>
                      )}

                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-1 shadow-md">
                        <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        <span className="text-sm font-bold text-gray-800">{product.rating}</span>
                      </div>
                    </div>

                    <div className="p-8 text-center">
                      <h3 className="text-2xl font-bold text-red-700 mb-3">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed mb-6">
                        {product.description}
                      </p>

                   <div className="mb-6">
  {typeof product.price === "number" ? (
    <>
      <span className="text-3xl font-extrabold text-red-700">
        Rs.{product.price.toFixed()}
      </span>
      {product.oldPrice && (
        <span className="text-lg text-gray-500 line-through ml-3">
          Rs.{product.oldPrice.toFixed()}
        </span>
      )}
    </>
  ) : (
    <span className="text-3xl font-extrabold text-red-700">
      {product.price}
    </span>
  )}
</div>


                      <div className="flex items-center justify-center gap-3">
                        <button 
                          className="inline-flex items-center gap-2 bg-red-700 text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-red-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                          onClick={handleAddToCart}
                        >
                          <ShoppingCart className="w-5 h-5" />
                          Add to Cart
                        </button>

                      
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}

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
            <h2 className="text-4xl md:text-6xl font-extrabold text-center text-red-800 uppercase tracking-wider mb-16 md:mb-20">
              Message from the <span className="text-orange-600">CEO</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="flex justify-center lg:justify-end order-first lg:order-first">
                <div className="relative group">
                  <div className="absolute -inset-4 md:-inset-6 bg-orange-400/20 rounded-full blur-3xl opacity-60 group-hover:opacity-90 transition duration-700"></div>
                  
                  <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-8 md:border-12 border-white">
                    <img
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMHBhISBwgPFhUXFRUXExcSFhcVGBcXFxEWFhYXFRcYHSggGBolHxUWITEhJSkrMS4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQBB//EADcQAQABAgIHBQUGBwAAAAAAAAABAgMEEQUSIUFRYXETMZGh0SIygbHhIzM0UqLBFEJDcrLw8f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM7dqq7P2duZ6Rm6KdGXao+68ZgHIOydGXY/p+Ew57tiq195bqjrGzxBrAAAAAAAAAAAAAAAAAAAAAAB7bom5XEURnM9wPbVubtcRbpzlM4TRVNEZ3/anhuj1dOBwkYW1lHfvnj9HSDymmKYypjLo9AB5MZxtegODFaMpvbbcas8u74whcRYqw9zK7T9ei0tOKw8Ym1q3I6cp4wCsDZiLM4e7NNz/scWsAAAAAAAAAAAAAAAAAABMaEw2VM11R37I6b/8AeSHiM52LVZt9laimN0RAMwAAAAAAAR+l8N2uH1qY207fhv8AVBLZMZxtVa/b7K9VTwmY8wYAAAAAAAAAAAAAAAAAA24SNbFUZ/mp+a0KthqtXE0TO6qPmtIAAAAAAAACu6VjLH1Zcv8AGFiVzSlWtj68uUeEQDlAAAAAAAAAAAAAAAAAB4tOFu9vh6auMee9V0noXE6lU0Vz37aeu+ATQAAAAAAAMblWpRM1d0RnPwVa5X2lyZnfMz4yl9NYnVt6lE7Z7+iGAAAAAAAAAAAAAAAAAAAInKdkgCe0dj4xFOrcn2vnzh3qlE5TslJ4TS00RliIz5x3/HiCaGmziqL8fZXInlv8G4AGq7iKbMfa3Ijr6A2uTHY2MLRxq3R+88nHitL7MsNT8Z/aPVFV1TXVnXOc7wLlc3K5muc5nveAAAAAAAAAAAAAAAAAAAAAADO1ZqvT9lbmenqDW2U3qqI9m7VHSZdlvRFdXvzTHn8m+nQv5r/6fqCNqv11e9er8Za0tOheF/8AT9Wm5oiun3KqZ8gR423sNXZ+9tTHy8WoAAAAAAAAAAAAAAAAAAAABtw+GqxNWVqnrO6Pi68Bo2b+VV7OKd0b59ITduiLdGVFOUA4cLoqm3tve1Pl4b3fTTFMZUxl0egAAAAExnG1w4nRlF7bRGrPLu8HcArWKwdWGn26dnGO76OdbKo1oyqhD4/RernVho60+noCLAAAAAAAAAAAAAAAASei9H9plXfjZ/LHHnPJp0Xg/wCJu51x7Mec8E/EZRsB6AAAAAAAAAAACL0no/XzrsRt3xx5xzQy2oTS+D7OrXtxsn3o4TxBGgAAAAAAAAAAAMrVubtyKaI2zOTFK6DsZzNdUco/cEph7MWLMU0bmwAAAAAAAAAAAAAGNdEXKJiqNk97IBV8XYnDX5pn4c43NSb01Y17MVx3x39JQgAAAAAAAAAACzYG12OFpjLdt6ztlXMPR2l+mONUR5rVAAAAAAAAAAAAAAAAAMLtuLtuYq3xMKtVTq1TE7ti2K3pKjUx1fXPxiJBzAAAAAAAAAA34D8bR/dCzAAAAAAAAAAAAAAAAAAr+mPx09I+QA4gAAAAAf/Z"
                      alt="Mr. Sanjay Kumar - CEO"
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 bg-black"
                    />
                  </div>

                  <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-gradient-to-br from-orange-600 to-red-700 text-white px-8 py-4 md:px-10 md:py-5 rounded-full shadow-2xl border-4 border-white animate-pulse">
                    <p className="text-xl md:text-2xl font-extrabold tracking-wider">
                      CEO
                    </p>
                  </div>

                  <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-tr from-orange-500 via-transparent to-red-600 opacity-30"></div>
                </div>
              </div>

              <div className="text-gray-700 space-y-8 order-last lg:order-last">
                <div className="bg-white rounded-3xl p-8 md:p-10 lg:p-12 shadow-lg border border-gray-100">
                  <p className="text-lg md:text-xl leading-relaxed text-justify">
                    At <span className="font-bold text-orange-600">S.S SAFETY SOLUTIONS</span>, we believe safety is the foundation of progress. 
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
                      S.S SAFETY SOLUTIONS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
export default Home;