import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowRight, ShoppingCart, Star, Shield, Award, Users, Zap, Quote, CheckCircle2, ChevronLeft, ChevronRight, Sparkles, Building2, Briefcase, Calendar, CheckCircle, Crosshair, Fingerprint, Flame, HelpCircle, ChevronDown, Tag } from 'lucide-react';
import { motion, useScroll, useTransform, useInView, animate, useMotionValue, useSpring } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';
import SEO from '../components/SEO';

/* ─── Animated Counter ─────────────────────────────────────────────────── */
function AnimatedCounter({ target, suffix = '', duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setDisplayed(Math.round(v)),
    });
    return controls.stop;
  }, [inView, target, duration]);

  return <span ref={ref}>{displayed.toLocaleString()}{suffix}</span>;
}

/* ─── Magnetic Button ───────────────────────────────────────────────────── */
function MagneticButton({ children, className, onClick }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.35);
    y.set((e.clientY - cy) * 0.35);
  }, [x, y]);

  const handleLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.button
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      className={className}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.button>
  );
}

/* ─── Floating Particles ────────────────────────────────────────────────── */
function Particles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 4,
    duration: Math.random() * 8 + 6,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-orange-400/30"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -40, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-red-700/10 blur-3xl" />
    </div>
  );
}

/* ─── Section Wrapper with fade-up ─────────────────────────────────────── */
function FadeUp({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Category Card ─────────────────────────────────────────────────────── */
function CategoryCard({ item, index }) {
  const getHashId = (title) =>
    title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');

  return (
    <motion.div
      initial={{ opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500 border border-gray-100"
      style={{ willChange: 'transform' }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
          style={{ transform: 'scale(1.02)' }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1.02)')}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        {/* Category label pill */}
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-red-700 text-xs font-bold px-3 py-1 rounded-full shadow">
          {item.title}
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">{item.desc}</p>
        <Link to={`/products?id=${item.title}`}>
          <motion.button
            whileHover={{ x: 4 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="inline-flex items-center gap-2 text-red-700 font-semibold text-sm group/btn"
          >
            Explore
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </motion.button>
        </Link>
      </div>

      {/* Animated border accent */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-700 w-0 group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-gray-100">
      {/* Image */}
      <Link to={`/products/${product.id}`} className="relative h-64 overflow-hidden flex-shrink-0 block">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {product.badge && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute top-3 left-3 bg-red-700 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider shadow-lg"
          >
            {product.badge}
          </motion.div>
        )}

        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1.5 rounded-full flex items-center gap-1 shadow-md">
          <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
          <span className="text-xs font-bold text-gray-800">{product.rating}</span>
        </div>
      </Link>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1 text-center">
        <Link to={`/products/${product.id}`} className="hover:text-red-800 transition-colors block mb-2">
          <h3 className="text-lg font-bold text-red-700 leading-snug">{product.name}</h3>
        </Link>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{product.description}</p>

        <div className="mb-4">
          {typeof product.price === 'number' ? (
            <span className="text-2xl font-extrabold text-red-700">
               Rs.{product.price.toFixed()}
            </span>
          ) : (
            <span className="text-xl font-bold text-red-700">{product.price}</span>
          )}
        </div>

        <MagneticButton
          onClick={() => onAddToCart(product)}
          className="inline-flex items-center justify-center gap-2 bg-red-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-red-800 transition-colors duration-300 shadow-md hover:shadow-red-200 hover:shadow-lg w-full"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </MagneticButton>
      </div>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────────────────── */
function Home() {
  const siteUrl = 'https://www.sssafetysolutions.com';
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const [openFaq, setOpenFaq] = useState(0);

  const homeFaqs = [
    {
      q: 'Where can I find an authorized army store near me in Pakistan?',
      a: 'S.S Safety Solutions operates from 47 Brandreth Road, Lahore, offering nationwide delivery across Pakistan. We supply military tactical gear, body armor vests, plate carriers, duty belts, and tactical pocket knives with fast shipping to Karachi, Islamabad, Rawalpindi, and all cities.'
    },
    {
      q: 'What is the taser price in Pakistan and what self defence gadgets are available?',
      a: 'Genuine rechargeable taser guns and police-grade stun guns at S.S Safety Solutions range between Rs. 3,800 and Rs. 5,800. Equipped with high-voltage deterrence, integrated laser sights, and LED flashlights, they are widely used for personal protection, women self-defense, and security staff.'
    },
    {
      q: 'How does your biometric attendance system integrate with the Punjab login portal?',
      a: 'Our biometric attendance systems feature high-speed optical fingerprint and RFID sensors that comply with official institutional standards. They seamlessly connect with HR software and export data compatible with the biometric attendance system Punjab login requirements.'
    },
    {
      q: 'Do you supply certified outdoor fire hydrants and optical smoke detectors?',
      a: 'Yes, S.S Safety Solutions provides BS 750 / NFPA compliant ductile iron fire hydrant pillar systems, landing valves, and EN 54-7 certified optical smoke detector sensors for industrial facilities, commercial plazas, and residential towers.'
    },
    {
      q: 'What are your delivery timelines and payment options in Pakistan?',
      a: 'We offer express 24-hour delivery in Lahore and 2 to 4 business days nationwide across Pakistan. We support Cash on Delivery (COD), direct bank transfer, and institutional corporate billing.'
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': homeFaqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.a
      }
    }))
  };

  const breadcrumbs = [{ name: 'Home', url: siteUrl }];
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'SS Safety Solutions - Home',
    description:
      'Leading supplier of tactical gear, army store items, taser guns, biometric attendance systems, fire hydrants, smoke detectors, and PPE in Pakistan.',
    url: siteUrl,
    publisher: {
      '@type': 'Organization',
      name: 'SS Safety Solutions',
      logo: { '@type': 'ImageObject', url: `${siteUrl}/android-chrome-192x192.png` },
    },
  };

  const stats = [
    { icon: Shield, value: 5000, suffix: '+', label: 'Products Delivered' },
    { icon: Award, value: 12, suffix: '+', label: 'Years of Trust' },
    { icon: Users, value: 800, suffix: '+', label: 'Happy Clients' },
    { icon: Zap, value: 99, suffix: '%', label: 'Satisfaction Rate' },
  ];

  const products = [
    {
      id: 'safety-shoes-st001',
      name: 'Premium Safety Boots Pro-X',
      price: 'Call for Price',
      rating: 4.9,
      badge: 'BEST SELLER',
      image: '/images/products/infographics/safety-boots-pro-x.jpg',
      description: 'Steel-toe protection with anti-slip sole. EN ISO 20345 certified for ultimate comfort in heavy-duty environments.',
    },
    {
      id: 'safety-helmet',
      name: 'Tactical Ballistic Helmet',
      price: 'Call for Price',
      rating: 4.8,
      badge: 'NEW ARRIVAL',
      image: '/images/products/infographics/tactical-ballistic-helmet.jpg',
      description: 'NIJ Level IIIA protection. Lightweight, adjustable fit for security and tactical operations.',
    },
    {
      id: 'bullet-proof-jacket',
      name: 'Ballistic Protection Body Armor',
      price: 'Call for Price',
      rating: 4.9,
      badge: 'NIJ CERTIFIED',
      image: '/images/products/infographics/bullet-proof-jacket.jpg',
      description: 'NIJ Level IIIA ballistic vest with ultra-lightweight UHMWPE panels and modular MOLLE system.',
    },
    {
      id: 'best-harness',
      name: 'Full-Body Fall Arrest Harness',
      price: 'Call for Price',
      rating: 5.0,
      badge: 'TOP RATED',
      image: '/images/products/infographics/best-harness.jpg',
      description: 'EN 361 & ANSI certified full-body harness with quick-connect buckles and padded lumbar support.',
    },
    {
      id: 'leather-heat-resistance-hand-gloves',
      name: 'Heat-Resistant Leather Gloves Pro',
      price: 'Call for Price',
      rating: 4.8,
      badge: 'TOP RATED',
      image: '/images/products/infographics/leather-heat-resistance-hand-gloves.jpg',
      description: 'EN 407 certified heavy-duty cowhide leather gloves with Kevlar stitching, resisting heat up to 500°C.',
    }
  ];

  const categories = [
    { title: 'Security Equipment', desc: 'Tactical gear, body armor, helmets & protective suits for high-risk operations.', img: 'https://acelinkarmor.com/wp-content/uploads/2024/08/helmet-category-banner.jpg' },
    { title: 'Rescue Equipment', desc: 'Ropes, harnesses, stretchers & specialized tools for emergency response.', img: 'https://www.cmcpro.com/wp-content/uploads/wd/products/500104_AZTEK_ProSeries_System__5.jpg?ver=1731612266' },
    { title: 'Fire Fighting Equipment', desc: 'Extinguishers, hoses, nozzles & essential firefighting tools.', img: 'https://i0.wp.com/newelaf.com/wp-content/uploads/2023/05/Fire-Fighting-Equipments.webp' },
    { title: 'Safety Shoes', desc: 'Steel-toe, anti-slip boots meeting international safety standards.', img: 'https://m.media-amazon.com/images/I/71Dn8rcuo7L._AC_UY900_.jpg' },
    { title: 'Road Safety', desc: 'Cones, reflective signs, barriers & safety signage.', img: 'https://skyk.in/wp-content/uploads/2025/03/13146690_Traffic-barriers-collection-min-800x600.jpg' },
    { title: 'Fire Fighting Vehicle', desc: 'Specialized fire trucks for rapid emergency deployment.', img: 'https://media.gettyimages.com/id/89909590/photo/modern-red-fire-engine-truck-isolated-on-white-clipping-path.jpg?s=612x612&w=gi&k=20&c=prDUir8GOlpxi-ul0Pa7m4oKTG6X9tWNEoJk2MAFqNY=' },
    { title: 'Fire Alarm System', desc: 'Smoke detectors, sensors & early warning panels.', img: 'https://douglaselectric.us/wp-content/uploads/2023/06/fire-alarm-system-installation-2-859x600.jpg' },
    { title: 'Fall Arrest System', desc: 'Harnesses, lanyards & anchors for height safety.', img: 'https://www.shutterstock.com/image-photo/harness-fall-arrest-lanyard-260nw-2535477175.jpg' },
    { title: 'Personal Protective Wear', desc: 'High-visibility jackets & weather-resistant clothing.', img: 'https://cdn.prod.website-files.com/647888ca92d03e3fca3f1ea0/647888ca92d03e3fca3f23a6_Safety%20yellow%20and%20orange%20vests.jpg' },
    { title: 'Medical Equipment For Ambulance', desc: 'Defibrillators, oxygen systems & emergency kits.', img: 'http://mfimedical.com/cdn/shop/articles/stretcher-in-ambulance-1_7982e7b7-ef61-4213-8138-fcb05ceeddc7.jpg?v=1748437823' },
    { title: 'Personal Protective Equipments', desc: 'Helmets, gloves, glasses & full PPE kits.', img: 'https://thumbs.dreamstime.com/b/personal-protective-equipment-ppe-kit-hospital-doctors-nurses-personal-protective-equipment-ppe-kit-180073267.jpg' },
    { title: 'Laboratory safety System', desc: 'Goggles, lab coats, gloves & safety equipment for laboratory work.', img: 'https://media.istockphoto.com/id/918825222/photo/woman-scientist-adjusts-protective-goggles-staring-intently.jpg?s=612x612&w=0&k=20&c=SC0wMROl6EG69TUoKXnlQ-lssKlQzVAHjswjUTWiGSk=' },
    { title: 'Safety Containment System', desc: 'Secondary containment solutions for hazardous materials storage.', img: 'https://assets.production.denios.io/article/327073_20220809-092005.jpg' },
    { title: 'Spill Prevention Containment and Control', desc: 'Spill kits, absorbents & containment systems for emergency response.', img: 'https://www.absorbentsonline.com/spill-containment-blog/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3J/jPWh0dHBzJTNBJTJGJTJGd3d3LmFic29yYmVudHNvbmxpbmUuY29tJTJGc3BpbGwtY29udGFpbm1lbnQtYmxvZyUyRndwLWNvbnRlbnQlMkZ1cGxvYWRzJTJGMjAyMiUyRjA0JTJGV2hhdC1Jcy1BLVNwaWxsLUtpdC0xMDI0eDY4My5qcGcmY2FjaGVNYXJrZXI9MTY0OTE2MzIzNi00NDgwNyZ0b2tlbj0xY2E2YmU1NWQ5ZGU5YmRk.q.jpg' },
    { title: 'Industrial Tools', desc: 'Heavy-duty machinery & equipment for industrial applications.', img: 'https://media.istockphoto.com/id/1157027831/photo/industrial-factory-interior-with-equipment-conveyor-line-and-steel-tools-industry-background.jpg?s=612x612&w=0&k=20&c=YsNqcfwIgc8V_FU--eztNOQrZB1PWRFruUVS0M1w36U=' },
    { title: 'Hand tools', desc: 'Wrenches, hammers, pliers & essential manual tools.', img: 'https://media.istockphoto.com/id/596042932/photo/set-of-hand-various-work-tools-on-grey-background.jpg?s=612x612&w=0&k=20&c=Tpz6mmcCZs_tVPd_yq0lmDvPqkvp0Zo5XMWpICP6rZk=' },
    { title: 'Power Tools', desc: 'Drills, saws, grinders & electric power tools.', img: 'https://www.shutterstock.com/image-photo/construction-carpentry-tools-electric-corded-260nw-1990855535.jpg' },
  ];

  const { addToCart } = useCart();

  const handleAddToCart = useCallback((product) => {
    addToCart({ id: product.id, title: product.name, price: product.price, image: product.image, quantity: 1 });
    toast.success(`${product.name} × 1 added to cart!`);
  }, [addToCart]);

  /* Headline stagger */
  const headline = ['S.S SAFETY', 'SOLUTIONS'];
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
  };
  const word = {
    hidden: { opacity: 0, y: 60, skewY: 6 },
    show: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <>
      <SEO
        title="SS Safety Solutions | Tactical Gear, Army Store & Safety Equipment Pakistan"
        description="Pakistan's leading supplier of tactical gear, taser guns, stun guns, army store items, biometric attendance systems, fire hydrants, smoke detectors, and PPE. Certified safety solutions with nationwide delivery."
        keywords="tactical gear, stun gun, taser, self defence gadgets, army store, taser price in pakistan, tactical gear pakistan, army store near me, knife price in pakistan, pakistan knife, pocket knife, stun gun pakistan, tactical gear pk, taser gun in pakistan, biometric attendance, biometric attendance system, biometric attendance system punjab login, biometric attendance system login, fire hydrant, smoke detector, safety equipment pakistan, protective gear, PPE, safety shoes"
        url="https://sssafetysolutions.pk/"
        image="https://sssafetysolutions.pk/android-chrome-512x512.png"
        type="website"
        breadcrumbs={breadcrumbs}
        schema={[homeSchema, faqSchema]}
      />

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[640px] flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        aria-label="Hero"
      >
        {/* Ken Burns bg */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{ scale: heroScale, y: heroY }}
        >
          <img
            src="https://wallpapercave.com/wp/wp2592365.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            fetchpriority="high"
          />
        </motion.div>

        {/* Layered overlays */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-red-950/40 via-transparent to-orange-950/30" />

        {/* Particles */}
        <Particles />

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-5xl mx-auto"
          style={{ opacity: heroOpacity }}
        >
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <img
              src="https://png.pngtree.com/png-vector/20250112/ourmid/pngtree-bright-orange-flame-icon-illustration-with-vibrant-yellow-and-red-tones-png-image_15160948.png"
              alt="Flame Icon"
              className="h-16 w-16 mx-auto drop-shadow-[0_0_24px_rgba(251,146,60,0.8)]"
            />
          </motion.div>

          {/* Headline with stagger */}
          <motion.h1 variants={container} initial="hidden" animate="show" className="overflow-hidden mb-6">
            {headline.map((line, i) => (
              <motion.div key={i} variants={word} className="overflow-hidden block">
                <span
                  className={`block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none ${
                    i === 0 ? 'text-white' : 'text-orange-400'
                  }`}
                  style={{ textShadow: '0 4px 32px rgba(0,0,0,0.5)' }}
                >
                  {line}
                </span>
              </motion.div>
            ))}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/75 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed tracking-wide"
          >
            Pakistan's trusted source for certified fire safety, rescue, and industrial protection equipment.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <MagneticButton className="relative overflow-hidden px-10 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-base rounded-full shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-shadow duration-300 group">
              <span className="relative z-10 flex items-center gap-2">
                Explore Products <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </MagneticButton>

            <MagneticButton className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-base rounded-full border border-white/25 hover:bg-white/20 transition-colors duration-300">
              Contact Us
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-0.5 h-8 bg-gradient-to-b from-white/40 to-transparent rounded-full"
          />
        </motion.div>
      </section>

      {/* ── STATS BAND ─────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-r from-red-900 via-red-800 to-red-900 py-16 overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <FadeUp key={i} delay={i * 0.1} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 backdrop-blur mb-3 mx-auto">
                <s.icon className="w-5 h-5 text-orange-300" />
              </div>
              <div className="text-3xl md:text-4xl font-black text-white mb-1">
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-white/60 text-sm font-medium tracking-wide">{s.label}</div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── CATEGORIES ─────────────────────────────────────────────────────── */}
      <section className="py-28 px-4 bg-gray-50 relative overflow-hidden">
        {/* bg decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-orange-100/60 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-red-100/50 blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <FadeUp className="text-center mb-20">
            <p className="text-orange-600 text-sm font-bold tracking-widest uppercase mb-3">What We Offer</p>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-5">
              Premium Safety<br />
              <span className="text-red-700">Equipment Categories</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Every category backed by international certifications and years of field experience.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((item, index) => (
              <CategoryCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ──────────────────────────────────────────────── */}
      <section className="py-28 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-red-50/80 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <FadeUp className="text-center mb-16">
            <p className="text-orange-600 text-sm font-bold tracking-widest uppercase mb-3">Top Picks</p>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
              Featured <span className="text-red-700">Products</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.15}>
            <Swiper
              modules={[Navigation, Pagination, A11y, Autoplay]}
              loop
              autoplay={{ delay: 3200, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              spaceBetween={24}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="!pb-14"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id} className="h-auto">
                  <ProductCard product={product} onAddToCart={handleAddToCart} />
                </SwiperSlide>
              ))}
            </Swiper>
          </FadeUp>
        </div>
      </section>

      {/* ── LEADERSHIP & EXECUTIVE BOARD ───────────────────────────────────── */}
      <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-stone-50 via-white to-orange-50/40 relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 right-10 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-orange-200/35 via-red-100/25 to-transparent blur-3xl" />
          <div className="absolute bottom-10 left-10 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-red-200/30 via-amber-100/35 to-transparent blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        </div>

        <div className="max-w-6xl mx-auto relative space-y-20 md:space-y-28">
          {/* Section Header */}
          <FadeUp className="text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-orange-100 text-orange-700 border border-orange-200/80 shadow-sm mb-4">
              <Award className="w-3.5 h-3.5 text-orange-600" />
              Leadership &amp; Vision
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
              Executive <span className="bg-gradient-to-r from-red-700 via-orange-600 to-red-800 bg-clip-text text-transparent">Leadership</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              Steered by visionary stewardship, rigorous corporate governance, and an absolute commitment to human life and certified industrial safety across Pakistan.
            </p>
          </FadeUp>

          {/* ── 1. TOP SPOTLIGHT: FOUNDER & CEO ──────────────────────────────── */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* CEO Portrait Card (5 cols) */}
            <FadeUp delay={0.1} className="lg:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-md">
                {/* Multi-layer ambient backdrop glow */}
                <div className="absolute -inset-5 rounded-3xl bg-gradient-to-tr from-amber-500/25 via-orange-500/30 to-red-600/25 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Portrait card */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/95 bg-slate-900 ring-1 ring-black/5">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-950">
                    <img
                      src="/images/leadership/founder-ceo.jpg"
                      alt="Mr. Sufyain Ali – Founder & CEO, S.S Safety Solutions"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Subtle gradient vignette at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                    {/* Quick identity card on bottom of photo */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/45 backdrop-blur-md border border-white/15 text-white">
                      <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider mb-0.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Founder &amp; Chief Executive</span>
                      </div>
                      <p className="text-xl font-black tracking-wide text-white">Mr. SUFYAIN ALI</p>
                      <p className="text-xs font-semibold text-gray-300 tracking-wider">S.S Safety Solutions • Founded 2012</p>
                    </div>
                  </div>

                  {/* Floating CEO Role Badge */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-3 -right-3 bg-gradient-to-br from-amber-500 via-orange-600 to-red-700 text-white px-5 py-2.5 rounded-full shadow-2xl border-2 border-white font-black text-xs tracking-wider flex items-center gap-1.5"
                  >
                    <Shield className="w-3.5 h-3.5 fill-white/20" />
                    <span>FOUNDER &amp; CEO</span>
                  </motion.div>
                </div>
              </div>
            </FadeUp>

            {/* CEO Message Card (7 cols) */}
            <FadeUp delay={0.2} className="lg:col-span-7">
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-orange-100/90 relative">
                {/* Decorative Quote Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/15 via-orange-500/10 to-red-500/10 border border-orange-200/60 flex items-center justify-center mb-6">
                  <Quote className="w-7 h-7 text-red-700" />
                </div>

                <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                  <p>
                    When we established <strong className="text-orange-600 font-bold">S.S SAFETY SOLUTIONS</strong>, our founding ethos was rooted in a non-negotiable truth: <em className="text-gray-900 font-semibold not-italic">human life and worker dignity are sacred</em>. Every worker who enters an industrial plant, a high-altitude scaffold, or a hazardous fire emergency deserves returning home safely to their families.
                  </p>
                  <p>
                    Over 12 years of steadfast dedication, we have transformed safety supply into a hallmark of certified excellence. From our headquarters in Lahore to industrial hubs across Pakistan, our equipment carries internationally accredited testing—spanning <strong className="text-gray-900 font-semibold">ISO 9001, CE, OSHA, and EN standards</strong>.
                  </p>
                  <p className="text-gray-900 font-medium italic border-l-4 border-orange-500 pl-4 py-1 bg-orange-50/50 rounded-r-xl">
                    "Our commitment is unshakeable: delivering certified, life-saving protection you can trust unconditionally—every project, every industry, every single day."
                  </p>
                </div>

                {/* Key Executive Highlights */}
                <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-gray-100 text-center">
                  <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60">
                    <p className="text-2xl font-black text-red-800">12+</p>
                    <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wider">Years of Trust</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60">
                    <p className="text-2xl font-black text-orange-600">800+</p>
                    <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wider">Happy Clients</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60">
                    <p className="text-2xl font-black text-red-700">100%</p>
                    <p className="text-[11px] font-bold text-gray-600 uppercase tracking-wider">Certified Gear</p>
                  </div>
                </div>

                {/* Executive Signature & Designation */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-red-800 tracking-tight">
                      Mr. SUFYAIN ALI
                    </h3>
                    <p className="text-orange-600 font-semibold text-sm mt-0.5">Founder &amp; Chief Executive Officer</p>
                    <p className="text-gray-400 text-xs mt-0.5">S.S SAFETY SOLUTIONS • Lahore, Pakistan</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                    Verified Leadership
                  </span>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* ── 2. STRATEGIC TIMELINE OF GROWTH ──────────────────────────────── */}
          <FadeUp delay={0.15} className="relative">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-100/80 text-red-800 mb-2">
                <Calendar className="w-3.5 h-3.5 text-red-700" />
                Company Milestones
              </span>
              <h3 className="text-2xl md:text-4xl font-black text-gray-900">
                A Decade of Proven <span className="text-red-700">Impact &amp; Growth</span>
              </h3>
              <p className="text-gray-500 text-sm md:text-base mt-2 max-w-xl mx-auto">
                How our leadership guided S.S Safety Solutions from foundational values into nationwide market leadership.
              </p>
            </div>

            {/* Timeline Cards Grid */}
            <div className="relative">
              {/* Connecting line on desktop */}
              <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 -translate-y-1/2 z-0 opacity-25" />

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
                {[
                  {
                    year: '2012',
                    title: 'Foundation & Vision',
                    desc: 'Founded in Lahore with an absolute pledge to make certified PPE accessible across Pakistan.',
                    badge: 'Inception'
                  },
                  {
                    year: '2016',
                    title: 'Global Certification',
                    desc: 'Fully accredited with ISO 9001, CE, and OSHA compliant protective gear catalog.',
                    badge: 'Quality Mark'
                  },
                  {
                    year: '2020',
                    title: 'Nationwide Expansion',
                    desc: 'Scaled supply chains across Punjab, Sindh, KPK, and federal industrial zones.',
                    badge: 'Scale'
                  },
                  {
                    year: '2024',
                    title: 'Workforce Culture',
                    desc: 'Pioneering human-first HR and high-risk specialized protection suites.',
                    badge: 'Excellence'
                  },
                  {
                    year: '2026',
                    title: 'Next-Gen Horizon',
                    desc: 'Smart digital safety ecosystems, automated tracking, and international export partners.',
                    badge: 'Future Ready'
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 border border-orange-100 shadow-md hover:shadow-xl transition-all relative overflow-hidden group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-black text-red-700 tracking-tight">{item.year}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-orange-100 text-orange-700">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="font-black text-gray-900 text-sm mb-1.5">{item.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                    <div className="mt-3 h-1 w-0 group-hover:w-full bg-gradient-to-r from-orange-500 to-red-600 rounded-full transition-all duration-300" />
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* ── 3. INTERACTIVE EXECUTIVE CAROUSEL / SWIPE DECK ─────────────────── */}
          <FadeUp delay={0.2} className="relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-100 text-orange-800 mb-2">
                  <Briefcase className="w-3.5 h-3.5 text-orange-700" />
                  Executive Board &amp; Team
                </span>
                <h3 className="text-2xl md:text-4xl font-black text-gray-900">
                  Meet Our <span className="text-red-700">Executive Leadership</span>
                </h3>
                <p className="text-gray-500 text-sm md:text-base mt-1">
                  Swipe or click to view our executive leaders guiding strategy, operations, and governance.
                </p>
              </div>

              {/* Quick Swiper Controls */}
              <div className="flex items-center gap-2">
                <button
                  id="leadership-prev"
                  aria-label="Previous Leader"
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center justify-center shadow hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  id="leadership-next"
                  aria-label="Next Leader"
                  className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center justify-center shadow hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Swiper Carousel */}
            <Swiper
              modules={[Navigation, Pagination, A11y, Autoplay]}
              navigation={{
                prevEl: '#leadership-prev',
                nextEl: '#leadership-next',
              }}
              pagination={{ clickable: true }}
              spaceBetween={24}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="!pb-14"
            >
              {[
                {
                  id: 'founder-ceo',
                  name: 'Mr. SUFYAIN ALI',
                  role: 'Founder & Chief Executive Officer',
                  badge: 'FOUNDER & CEO',
                  image: '/images/leadership/founder-ceo.jpg',
                  quote: 'Safety is not a luxury; it is the fundamental prerequisite of industrial progress and human dignity.',
                  focus: ['Enterprise Strategy', 'Strategic Vision', 'Client Partnerships'],
                  gradient: 'from-amber-500 via-orange-600 to-red-700',
                  badgeBg: 'bg-gradient-to-r from-amber-500 to-orange-600'
                },
                {
                  id: 'gm-hr',
                  name: 'Mr. ARSLAN NISAR',
                  role: 'General Manager & Head of HR',
                  badge: 'GM & HR',
                  image: '/images/leadership/arslan-nisar.jpg',
                  quote: 'Aligning operational execution with human-centric empathy to empower workers across the nation.',
                  focus: ['Operations & Supply', 'Human Resources', 'ISO Quality Benchmarks'],
                  gradient: 'from-orange-500 via-red-600 to-red-700',
                  badgeBg: 'bg-gradient-to-r from-orange-600 to-red-700'
                },
                {
                  id: 'admin-finance',
                  name: 'Dr. SIDRA SIDDIQUI',
                  role: 'Admin & Chief Finance Manager',
                  badge: 'ADMIN & FINANCE',
                  image: '/images/leadership/dr-sidra-siddiqui.jpg',
                  quote: 'Ensuring pristine financial integrity, governance, and institutional accountability across every operation.',
                  focus: ['Corporate Governance', 'Financial Strategy', 'Administrative Compliance'],
                  gradient: 'from-purple-600 via-pink-600 to-red-600',
                  badgeBg: 'bg-gradient-to-r from-rose-600 to-purple-600'
                }
              ].map((leader) => (
                <SwiperSlide key={leader.id} className="h-auto">
                  <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full group">
                    {/* Portrait Frame */}
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-950">
                      <img
                        src={leader.image}
                        alt={`${leader.name} – ${leader.role}`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-106"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                      {/* Floating Badge */}
                      <div className={`absolute top-3 right-3 text-white text-[11px] font-black px-3.5 py-1.5 rounded-full shadow-lg ${leader.badgeBg} border border-white/30 flex items-center gap-1.5`}>
                        <Shield className="w-3 h-3 fill-white/20" />
                        <span>{leader.badge}</span>
                      </div>

                      {/* Photo Overlay Title */}
                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <p className="text-lg font-black tracking-wide text-white drop-shadow">{leader.name}</p>
                        <p className="text-xs font-semibold text-orange-300 drop-shadow">{leader.role}</p>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <p className="text-gray-600 text-sm leading-relaxed italic border-l-2 border-orange-500 pl-3">
                        "{leader.quote}"
                      </p>

                      <div className="pt-3 border-t border-gray-100">
                        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">Core Leadership Focus</p>
                        <div className="flex flex-wrap gap-1.5">
                          {leader.focus.map((tag, i) => (
                            <span
                              key={i}
                              className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-orange-50 text-orange-800 border border-orange-200/60"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </FadeUp>
        </div>
      </section>

      {/* ── SEO AUTHORITY DIVISIONS ─────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-stone-50/80 relative overflow-hidden border-t border-stone-200/60">
        <div className="max-w-7xl mx-auto relative">
          <FadeUp className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-red-100 text-red-800 border border-red-200/80 shadow-xs mb-4">
              <Shield className="w-3.5 h-3.5 text-red-700" />
              Specialized Divisions
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
              Top Ranked <span className="text-red-700">Safety &amp; Tactical Categories</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              Equipping security agencies, corporate enterprises, industrial complexes, and individuals across Pakistan with certified high-performance gear.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Division 1: Tactical Gear & Army Store */}
            <FadeUp delay={0.05} className="h-full">
              <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full group hover:-translate-y-1.5">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center mb-5 text-amber-700 group-hover:scale-110 transition-transform">
                  <Crosshair className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-700 mb-1">Defense &amp; Field</span>
                <h3 className="text-xl font-extrabold text-gray-900 mb-2.5 group-hover:text-red-700 transition-colors">
                  Tactical Gear &amp; Army Store
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 grow">
                  Certified tactical gear pakistan, MOLLE plate carriers, military vests, duty belts, and outdoor tactical accessories from the top army store near you.
                </p>
                <div className="space-y-2 pt-3 border-t border-gray-100 mb-5 text-xs text-gray-500">
                  <div className="flex items-center gap-1.5 font-medium text-gray-700">
                    <CheckCircle className="w-3.5 h-3.5 text-green-600" /> 1000D Cordura Nylon Vests
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-gray-700">
                    <CheckCircle className="w-3.5 h-3.5 text-green-600" /> Level III/IV Plate Ready
                  </div>
                </div>
                <Link
                  to="/products?q=tactical+gear"
                  className="mt-auto inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-stone-50 hover:bg-red-700 text-gray-800 hover:text-white font-bold text-xs transition-colors group/btn"
                >
                  <span>Explore Tactical Gear</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </FadeUp>

            {/* Division 2: Self Defence & Tasers */}
            <FadeUp delay={0.1} className="h-full">
              <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full group hover:-translate-y-1.5">
                <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-200/80 flex items-center justify-center mb-5 text-red-700 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-red-700 mb-1">Personal Security</span>
                <h3 className="text-xl font-extrabold text-gray-900 mb-2.5 group-hover:text-red-700 transition-colors">
                  Stun Guns, Tasers &amp; Knives
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 grow">
                  High-voltage stun gun pakistan, laser taser gun models, self defence gadgets, and titanium EDC pocket knife collections at the best taser price in pakistan.
                </p>
                <div className="space-y-2 pt-3 border-t border-gray-100 mb-5 text-xs text-gray-500">
                  <div className="flex items-center gap-1.5 font-medium text-gray-700">
                    <CheckCircle className="w-3.5 h-3.5 text-green-600" /> Ultra-High Voltage Deterrence
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-gray-700">
                    <CheckCircle className="w-3.5 h-3.5 text-green-600" /> Razor Sharp Folding EDC Knives
                  </div>
                </div>
                <Link
                  to="/products?q=taser"
                  className="mt-auto inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-stone-50 hover:bg-red-700 text-gray-800 hover:text-white font-bold text-xs transition-colors group/btn"
                >
                  <span>Explore Self Defence</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </FadeUp>

            {/* Division 3: Biometric Attendance Systems */}
            <FadeUp delay={0.15} className="h-full">
              <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full group hover:-translate-y-1.5">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center mb-5 text-blue-700 group-hover:scale-110 transition-transform">
                  <Fingerprint className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-700 mb-1">Workforce Management</span>
                <h3 className="text-xl font-extrabold text-gray-900 mb-2.5 group-hover:text-red-700 transition-colors">
                  Biometric Attendance Systems
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 grow">
                  Advanced biometric attendance machines, RFID readers, and time-tracking hardware compliant with the biometric attendance system punjab login portal.
                </p>
                <div className="space-y-2 pt-3 border-t border-gray-100 mb-5 text-xs text-gray-500">
                  <div className="flex items-center gap-1.5 font-medium text-gray-700">
                    <CheckCircle className="w-3.5 h-3.5 text-green-600" /> High-Speed Fingerprint Verification
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-gray-700">
                    <CheckCircle className="w-3.5 h-3.5 text-green-600" /> Punjab Portal Login Compatible
                  </div>
                </div>
                <Link
                  to="/products?q=biometric"
                  className="mt-auto inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-stone-50 hover:bg-red-700 text-gray-800 hover:text-white font-bold text-xs transition-colors group/btn"
                >
                  <span>Explore Biometrics</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </FadeUp>

            {/* Division 4: Fire Hydrants & Smoke Detectors */}
            <FadeUp delay={0.2} className="h-full">
              <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full group hover:-translate-y-1.5">
                <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-200/80 flex items-center justify-center mb-5 text-orange-700 group-hover:scale-110 transition-transform">
                  <Flame className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-orange-700 mb-1">Fire Safety &amp; Alarm</span>
                <h3 className="text-xl font-extrabold text-gray-900 mb-2.5 group-hover:text-red-700 transition-colors">
                  Fire Hydrants &amp; Smoke Alarms
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 grow">
                  Heavy-duty outdoor fire hydrant pillars, landing valves, and photoelectric optical smoke detector units conforming to BS 750, NFPA, and EN 54 standards.
                </p>
                <div className="space-y-2 pt-3 border-t border-gray-100 mb-5 text-xs text-gray-500">
                  <div className="flex items-center gap-1.5 font-medium text-gray-700">
                    <CheckCircle className="w-3.5 h-3.5 text-green-600" /> 16 Bar Pressure Rated Hydrants
                  </div>
                  <div className="flex items-center gap-1.5 font-medium text-gray-700">
                    <CheckCircle className="w-3.5 h-3.5 text-green-600" /> Photoelectric Dual-Beam Sensors
                  </div>
                </div>
                <Link
                  to="/products?q=fire+hydrant"
                  className="mt-auto inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-stone-50 hover:bg-red-700 text-gray-800 hover:text-white font-bold text-xs transition-colors group/btn"
                >
                  <span>Explore Fire Safety</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* Quick Search Tag Cloud */}
          <FadeUp delay={0.25} className="mt-14 p-6 sm:p-8 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-4 h-4 text-red-700" />
              <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-wider">
                Trending Security &amp; Safety Searches in Pakistan
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "tactical gear", "stun gun", "taser", "self defence gadgets", "army store",
                "taser price in pakistan", "tactical gear pakistan", "army store near me",
                "knife price in pakistan", "pakistan knife", "pocket knife", "stun gun pakistan",
                "tactical gear pk", "taser gun in pakistan", "biometric attendance",
                "biometric attendance system", "biometric attendance system punjab login",
                "biometric attendance system login", "fire hydrant", "smoke detector"
              ].map((kw, i) => (
                <Link
                  key={i}
                  to={`/products?q=${encodeURIComponent(kw)}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-stone-50 text-gray-700 border border-gray-200 hover:bg-red-700 hover:text-white hover:border-red-700 transition-all shadow-2xs"
                >
                  <span>🔍</span> {kw}
                </Link>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS (FAQ) ────────────────────────────────── */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative">
          <FadeUp className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-orange-100 text-orange-800 border border-orange-200 shadow-xs mb-4">
              <HelpCircle className="w-3.5 h-3.5 text-orange-700" />
              Customer Knowledge Base
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
              Frequently Asked <span className="text-red-700">Questions</span>
            </h2>
            <p className="mt-3 text-gray-500 text-base">
              Clear answers regarding our safety equipment, order delivery in Pakistan, certifications, and institutional bulk supply.
            </p>
          </FadeUp>

          <div className="space-y-4">
            {homeFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <FadeUp key={index} delay={index * 0.05}>
                  <div className={`rounded-2xl border transition-all duration-300 ${isOpen ? 'bg-orange-50/40 border-orange-300 shadow-md' : 'bg-gray-50/70 border-gray-200/80 hover:border-orange-200'}`}>
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-gray-900 text-base sm:text-lg select-none"
                      aria-expanded={isOpen}
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-xs font-black shrink-0">
                          {index + 1}
                        </span>
                        <span>{faq.q}</span>
                      </span>
                      <ChevronDown className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-orange-600' : ''}`} />
                    </button>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-6 pb-6 pt-1 text-gray-600 text-sm sm:text-base leading-relaxed pl-16 border-t border-orange-100/60"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-900 via-red-800 to-orange-800 py-20 px-4 text-center">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <FadeUp className="relative max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-black text-white mb-5 leading-tight">
            Ready to make your workplace <span className="text-orange-300">safer?</span>
          </h3>
          <p className="text-white/65 text-lg mb-8">
            Talk to our safety specialists and get a customised quote for your project.
          </p>
          <MagneticButton className="inline-flex items-center gap-2 bg-white text-red-800 font-bold text-base px-10 py-4 rounded-full shadow-2xl hover:shadow-white/20 transition-shadow duration-300 group">
            Get in Touch <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" />
          </MagneticButton>
        </FadeUp>
      </section>

      {/* Global Swiper pagination style overrides */}
      <style>{`
        .swiper-pagination-bullet {
          background: #b91c1c !important;
          opacity: 0.35;
          width: 8px;
          height: 8px;
          transition: all 0.3s;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          width: 24px !important;
          border-radius: 4px !important;
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
      `}</style>
    </>
  );
}

export default Home;