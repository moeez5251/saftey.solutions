import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Award, Truck, Users, Flame, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const Counter = ({ end, suffix = '', duration = 2.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.span
      ref={ref}
      initial={{ innerText: 0 }}
      animate={isInView ? { innerText: end } : { innerText: 0 }}
      transition={{ duration, ease: "easeOut" }}
      onUpdate={(latest) => {
        if (ref.current) {
          ref.current.innerText = Math.floor(latest.innerText).toLocaleString() + suffix;
        }
      }}
      className="text-5xl md:text-6xl font-extrabold text-red-700"
    >
      0{suffix}
    </motion.span>
  );
};

function About() {
  const siteUrl = "https://www.sssafetysolutions.com";
  const aboutUrl = `${siteUrl}/about-us`;

  const breadcrumbs = [
    { name: "Home", url: siteUrl },
    { name: "About Us", url: aboutUrl }
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About SS Safety Solutions",
    "description": "Learn about SS Safety Solutions - your trusted partner in comprehensive safety solutions with over 12 years of excellence.",
    "url": aboutUrl,
    "publisher": {
      "@type": "Organization",
      "name": "SS Safety Solutions"
    }
  };

  return (
    <>
      <SEO
        title="About SS Safety Solutions | Premium Safety Equipment Provider Pakistan"
        description="Learn about SS Safety Solutions - your trusted partner in comprehensive safety solutions. We deliver world-class, certified equipment that protects lives across Pakistan."
        keywords="about SS Safety Solutions, safety equipment company Pakistan, safety gear provider, fire safety equipment, PPE supplier Pakistan"
        url={aboutUrl}
        image={`${siteUrl}/about-og.jpg`}
        type="website"
        breadcrumbs={breadcrumbs}
        schema={[aboutSchema]}
      />
      {/* Hero-style Intro Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-red-900/20 to-gray-900">
        <div className="absolute inset-0 bg-black/40"></div>
        <img
          src="https://images.stockcake.com/public/1/6/6/16625036-4df1-42c9-b3c5-6b6c4adceec1_large/workers-smiling-together-stockcake.jpg"
          alt="SS Safety Solutions Team"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white uppercase tracking-wider mb-8"
          >
            About <span className="text-orange-500">SS.SAFETY SOLUTIONS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
          >
            Your trusted partner in comprehensive safety solutions. We deliver world-class, certified equipment that protects lives, empowers industries, and ensures peace of mind across homes, offices, and high-risk environments.
          </motion.p>
        </div>
      </section>

      {/* What We Provide Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-red-50/30 to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-center text-red-800 uppercase tracking-wider mb-16"
          >
            What We Provide
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-start gap-4">
                  <Flame className="w-10 h-10 text-orange-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-red-700 mb-2">Premium Fire Safety Equipment</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Advanced fire extinguishers, alarm systems, hoses, nozzles, and complete firefighting solutions certified to international standards.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="flex items-start gap-4">
                  <Shield className="w-10 h-10 text-orange-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-red-700 mb-2">Personal Protective Equipment (PPE)</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Helmets, gloves, safety boots, high-visibility vests, fall arrest harnesses, and full-body protection for every industry.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <div className="flex items-start gap-4">
                  <Truck className="w-10 h-10 text-orange-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-red-700 mb-2">Rescue & Road Safety Solutions</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Ropes, stretchers, traffic cones, barriers, signs, and specialized vehicles for emergency response and road safety.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-10 h-10 text-orange-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-red-700 mb-2">End-to-End Support</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Nationwide delivery, installation, maintenance, training, and 24/7 customer support for complete peace of mind.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <img
                src="https://images.stockcake.com/public/9/d/5/9d5b1e74-3f24-4bf4-b149-cbad70feb42f_large/happy-construction-team-stockcake.jpg"
                alt="Our Expert Team Delivering Safety"
                className="rounded-2xl shadow-2xl w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Counter Stats Section with Scroll Animation */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-red-400 to-orange-400 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-center uppercase tracking-wider mb-16"
          >
            Our Impact in Numbers
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <Users className="w-16 h-16 mx-auto mb-6 text-orange-300" />
              <Counter end={500} suffix="+" />
              <p className="text-xl md:text-2xl font-semibold mt-4">Products Delivered</p>
            </div>
            <div>
              <Award className="w-16 h-16 mx-auto mb-6 text-orange-300" />
              <Counter end={150} suffix="+" />
              <p className="text-xl md:text-2xl font-semibold mt-4">Happy Clients</p>
            </div>
            <div>
              <Shield className="w-16 h-16 mx-auto mb-6 text-orange-300" />
              <Counter end={12} suffix="+" />
              <p className="text-xl md:text-2xl font-semibold mt-4">Years of Excellence</p>
            </div>
            <div>
              <CheckCircle className="w-16 h-16 mx-auto mb-6 text-orange-300" />
              <Counter end={100} suffix="%" />
              <p className="text-xl md:text-2xl font-semibold mt-4">Certified Products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Warehouse */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-red-50/30 to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-center text-red-800 uppercase tracking-wider mb-16"
          >
            Quality You Can Trust
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://www.shutterstock.com/image-photo/villach-austria-june-07-2025-260nw-2643015813.jpg"
                alt="Our State-of-the-Art Warehouse"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-8"
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Every product at <span className="font-bold text-orange-600">SS.SAFETY SOLUTIONS</span> undergoes rigorous testing and carries internationally recognized certifications including ISO, CE, OSHA, and EN standards.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Our modern warehouse facilities ensure fast, reliable delivery across the nation while maintaining the highest quality control.
              </p>

              <div className="flex flex-wrap gap-8 justify-center lg:justify-start mt-10">
                <img src="https://www.shutterstock.com/image-vector/collection-green-iso-9001-certification-260nw-2663004085.jpg" alt="ISO Certified" className="h-32 object-contain" />
                <img src="https://www.shutterstock.com/image-vector/safety-certificate-label-logo-vector-260nw-2310668283.jpg" alt="Safety Certified" className="h-32 object-contain" />
                <img src="https://www.shutterstock.com/image-vector/ce-mark-industrial-certificate-line-260nw-2667271493.jpg" alt="CE Marked" className="h-32 object-contain" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;